#!/usr/bin/env python3
"""
BladeRunner Tech News - Actualizador Automático de Noticias
Este script busca y actualiza las noticias de tecnología diariamente.
"""

import requests
from bs4 import BeautifulSoup
import json
import os
import re
from datetime import datetime
import time
import random
from urllib.parse import urljoin, urlparse

class NewsUpdater:
    def __init__(self):
        self.news_sources = [
            {
                'name': 'Xataka',
                'url': 'https://www.xataka.com/',
                'selector': '.article-title',
                'summary_selector': '.article-excerpt',
                'base_url': 'https://www.xataka.com'
            },
            {
                'name': 'MIT Technology Review',
                'url': 'https://technologyreview.es/',
                'selector': 'h2 a, h3 a',
                'summary_selector': '.excerpt',
                'base_url': 'https://technologyreview.es'
            }
        ]
        
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        self.max_news = 8
        self.output_file = 'news_data.json'
        
    def clean_text(self, text):
        """Limpia y normaliza el texto extraído."""
        if not text:
            return ""
        
        # Eliminar caracteres especiales y normalizar espacios
        text = re.sub(r'\s+', ' ', text.strip())
        text = re.sub(r'[^\w\s\-.,;:!?áéíóúñüÁÉÍÓÚÑÜ]', '', text)
        
        # Limitar longitud
        if len(text) > 200:
            text = text[:197] + "..."
            
        return text
    
    def extract_news_from_source(self, source):
        """Extrae noticias de una fuente específica."""
        try:
            print(f"Extrayendo noticias de {source['name']}...")
            
            response = requests.get(source['url'], headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            news_items = []
            
            # Buscar títulos de noticias
            title_elements = soup.select(source['selector'])[:self.max_news]
            
            for element in title_elements:
                try:
                    # Extraer título
                    if element.name == 'a':
                        title = element.get_text(strip=True)
                        link = element.get('href')
                    else:
                        link_elem = element.find('a')
                        if link_elem:
                            title = link_elem.get_text(strip=True)
                            link = link_elem.get('href')
                        else:
                            title = element.get_text(strip=True)
                            link = None
                    
                    if not title or not link:
                        continue
                    
                    # Normalizar URL
                    if link.startswith('/'):
                        link = urljoin(source['base_url'], link)
                    elif not link.startswith('http'):
                        link = urljoin(source['url'], link)
                    
                    # Generar resumen básico (se puede mejorar con IA)
                    summary = self.generate_summary(title)
                    
                    # Filtrar noticias tecnológicas
                    if self.is_tech_news(title):
                        news_items.append({
                            'title': self.clean_text(title),
                            'summary': summary,
                            'link': link,
                            'source': source['name'],
                            'timestamp': datetime.now().isoformat()
                        })
                
                except Exception as e:
                    print(f"Error procesando elemento: {e}")
                    continue
            
            print(f"Extraídas {len(news_items)} noticias de {source['name']}")
            return news_items
            
        except Exception as e:
            print(f"Error extrayendo de {source['name']}: {e}")
            return []
    
    def is_tech_news(self, title):
        """Determina si una noticia es sobre tecnología."""
        tech_keywords = [
            'ia', 'inteligencia artificial', 'ai', 'machine learning',
            'tecnología', 'tech', 'software', 'hardware', 'app',
            'smartphone', 'móvil', 'ordenador', 'pc', 'mac',
            'google', 'apple', 'microsoft', 'amazon', 'meta',
            'openai', 'chatgpt', 'nvidia', 'tesla', 'spacex',
            'robot', 'drone', 'chip', 'procesador', 'gpu',
            'internet', 'web', 'digital', 'cyber', 'datos',
            'cloud', 'nube', 'blockchain', 'crypto', 'bitcoin',
            'realidad virtual', 'vr', 'ar', 'metaverso',
            'gaming', 'videojuego', 'consola', 'steam',
            'startup', 'innovación', 'desarrollo', 'programación'
        ]
        
        title_lower = title.lower()
        return any(keyword in title_lower for keyword in tech_keywords)
    
    def generate_summary(self, title):
        """Genera un resumen básico basado en el título."""
        # Plantillas de resumen según palabras clave
        summaries = {
            'ia': "Nuevos desarrollos en inteligencia artificial que están transformando la industria tecnológica.",
            'openai': "Avances significativos en el desarrollo de modelos de lenguaje y herramientas de IA.",
            'nvidia': "Innovaciones en procesamiento gráfico y computación de alto rendimiento para IA.",
            'google': "Últimas actualizaciones y lanzamientos de productos de la gigante tecnológica.",
            'apple': "Novedades en el ecosistema de productos y servicios de Apple.",
            'tesla': "Desarrollos en vehículos eléctricos y tecnología de conducción autónoma.",
            'gaming': "Noticias del mundo de los videojuegos y la industria del entretenimiento digital.",
            'smartphone': "Últimas tendencias y lanzamientos en el mercado de dispositivos móviles.",
            'chip': "Avances en semiconductores y procesadores que impulsan la tecnología moderna.",
            'startup': "Nuevas empresas emergentes que están disrumpiendo el panorama tecnológico."
        }
        
        title_lower = title.lower()
        for keyword, summary in summaries.items():
            if keyword in title_lower:
                return summary
        
        # Resumen genérico
        return "Desarrollo tecnológico relevante que impacta en la industria y los usuarios."
    
    def fetch_all_news(self):
        """Obtiene noticias de todas las fuentes configuradas."""
        all_news = []
        
        for source in self.news_sources:
            news_items = self.extract_news_from_source(source)
            all_news.extend(news_items)
            
            # Pausa entre solicitudes para ser respetuoso
            time.sleep(random.uniform(1, 3))
        
        # Eliminar duplicados basados en títulos similares
        unique_news = self.remove_duplicates(all_news)
        
        # Ordenar por relevancia/timestamp y limitar
        unique_news = sorted(unique_news, key=lambda x: x['timestamp'], reverse=True)
        return unique_news[:self.max_news]
    
    def remove_duplicates(self, news_list):
        """Elimina noticias duplicadas basándose en similitud de títulos."""
        unique_news = []
        seen_titles = set()
        
        for news in news_list:
            # Normalizar título para comparación
            normalized_title = re.sub(r'[^\w\s]', '', news['title'].lower())
            title_words = set(normalized_title.split())
            
            # Verificar si es similar a algún título ya visto
            is_duplicate = False
            for seen_title in seen_titles:
                seen_words = set(seen_title.split())
                # Si comparten más del 60% de las palabras, considerarlo duplicado
                if len(title_words & seen_words) / len(title_words | seen_words) > 0.6:
                    is_duplicate = True
                    break
            
            if not is_duplicate:
                unique_news.append(news)
                seen_titles.add(normalized_title)
        
        return unique_news
    
    def save_news_data(self, news_data):
        """Guarda los datos de noticias en formato JSON."""
        try:
            with open(self.output_file, 'w', encoding='utf-8') as f:
                json.dump({
                    'last_updated': datetime.now().isoformat(),
                    'news_count': len(news_data),
                    'news': news_data
                }, f, ensure_ascii=False, indent=2)
            
            print(f"Datos guardados en {self.output_file}")
            return True
            
        except Exception as e:
            print(f"Error guardando datos: {e}")
            return False
    
    def update_javascript_file(self, news_data):
        """Actualiza el archivo JavaScript con las nuevas noticias."""
        try:
            # Leer el archivo JavaScript actual
            js_file = 'script.js'
            with open(js_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Generar el nuevo array de noticias
            js_news_array = "const newsData = [\n"
            for news in news_data:
                title_escaped = news['title'].replace('"', '\\"')
                summary_escaped = news['summary'].replace('"', '\\"')
                js_news_array += f"""    {{
        title: "{title_escaped}",
        summary: "{summary_escaped}",
        link: "{news['link']}"
    }},
"""
            js_news_array += "];"
            
            # Reemplazar el array existente
            pattern = r'const newsData = \[.*?\];'
            new_content = re.sub(pattern, js_news_array, content, flags=re.DOTALL)
            
            # Guardar el archivo actualizado
            with open(js_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print("Archivo JavaScript actualizado correctamente")
            return True
            
        except Exception as e:
            print(f"Error actualizando JavaScript: {e}")
            return False
    
    def run_update(self):
        """Ejecuta el proceso completo de actualización."""
        print("=== BladeRunner Tech News - Actualizador ===")
        print(f"Iniciando actualización: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        
        try:
            # Obtener noticias
            news_data = self.fetch_all_news()
            
            if not news_data:
                print("No se pudieron obtener noticias. Manteniendo datos existentes.")
                return False
            
            print(f"Obtenidas {len(news_data)} noticias únicas")
            
            # Guardar datos
            if self.save_news_data(news_data):
                # Actualizar JavaScript
                if self.update_javascript_file(news_data):
                    print("✅ Actualización completada exitosamente")
                    return True
            
            print("❌ Error en la actualización")
            return False
            
        except Exception as e:
            print(f"Error general en la actualización: {e}")
            return False

def main():
    """Función principal."""
    updater = NewsUpdater()
    success = updater.run_update()
    
    if success:
        print("Proceso completado correctamente")
        exit(0)
    else:
        print("Proceso completado con errores")
        exit(1)

if __name__ == "__main__":
    main()

