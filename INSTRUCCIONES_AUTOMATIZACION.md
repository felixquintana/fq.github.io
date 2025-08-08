# BladeRunner Tech News - Instrucciones de Automatización

## Resumen del Proyecto

Se ha creado exitosamente una página web futurista para noticias de tecnología con las siguientes características:

- **Diseño:** Estilo futurista/art deco/minimalista inspirado en Blade Runner
- **Tecnologías:** HTML, CSS y JavaScript puro
- **Dominio:** bladerunner.es (configurado en GitHub Pages)
- **Repositorio:** https://github.com/felixquintana/fq.github.io
- **Rama:** gh-pages

## Sistema de Actualización Automática

### Archivos del Sistema

1. **`news_updater.py`** - Script principal que busca y actualiza noticias
2. **`update_schedule.sh`** - Script de shell para automatización
3. **`news_data.json`** - Archivo de datos de noticias (generado automáticamente)
4. **`script.js`** - Archivo JavaScript que se actualiza automáticamente

### Configuración de Automatización Diaria (8:00 AM España)

Para configurar la actualización automática diaria a las 8:00 AM hora de España, sigue estos pasos:

#### Opción 1: Usando Cron (Recomendado para servidores Linux)

1. **Abrir el crontab:**
   ```bash
   crontab -e
   ```

2. **Agregar la siguiente línea:**
   ```bash
   0 8 * * * /home/ubuntu/fq.github.io/update_schedule.sh
   ```

3. **Guardar y salir del editor**

#### Opción 2: Usando GitHub Actions (Recomendado para automatización en la nube)

1. **Crear el directorio `.github/workflows/` en tu repositorio:**
   ```bash
   mkdir -p .github/workflows
   ```

2. **Crear el archivo `.github/workflows/update-news.yml`:**
   ```yaml
   name: Actualizar Noticias Diariamente
   
   on:
     schedule:
       - cron: '0 6 * * *'  # 6:00 UTC = 8:00 AM España (horario de verano)
       - cron: '0 7 * * *'  # 7:00 UTC = 8:00 AM España (horario de invierno)
     workflow_dispatch:  # Permite ejecución manual
   
   jobs:
     update-news:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout repository
         uses: actions/checkout@v3
         with:
           ref: gh-pages
           token: ${{ secrets.GITHUB_TOKEN }}
       
       - name: Setup Python
         uses: actions/setup-python@v4
         with:
           python-version: '3.11'
       
       - name: Install dependencies
         run: |
           pip install requests beautifulsoup4
       
       - name: Update news
         run: |
           python news_updater.py
       
       - name: Commit and push changes
         run: |
           git config --local user.email "felixalbertoquintana@gmail.com"
           git config --local user.name "Felix Quintana"
           git add .
           git commit -m "Actualización automática de noticias - $(date '+%Y-%m-%d %H:%M')" || exit 0
           git push
   ```

3. **Subir el archivo al repositorio:**
   ```bash
   git add .github/workflows/update-news.yml
   git commit -m "Agregar automatización con GitHub Actions"
   git push origin gh-pages
   ```

#### Opción 3: Usando un Servicio de Cron Online

Puedes usar servicios como:
- **cron-job.org**
- **EasyCron**
- **SetCronJob**

Configurar para ejecutar:
```
URL: https://tu-servidor.com/ejecutar-actualizacion
Horario: Diariamente a las 8:00 AM (zona horaria de España)
```

### Configuración del Dominio

El dominio `bladerunner.es` debe estar configurado con los siguientes registros DNS:

```
Tipo: CNAME
Nombre: www
Valor: felixquintana.github.io

Tipo: A
Nombre: @
Valores: 
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

### Monitoreo y Logs

- Los logs de actualización se guardan en `update.log`
- Para verificar el estado: `tail -f update.log`
- Para ejecutar manualmente: `./update_schedule.sh`

### Fuentes de Noticias Configuradas

1. **MIT Technology Review España** - https://technologyreview.es/
2. **Xataka** - https://www.xataka.com/ (como respaldo)

### Personalización

Para agregar más fuentes de noticias, edita el archivo `news_updater.py` y modifica la lista `news_sources`:

```python
self.news_sources = [
    {
        'name': 'Nueva Fuente',
        'url': 'https://ejemplo.com/',
        'selector': '.titulo-noticia',
        'summary_selector': '.resumen',
        'base_url': 'https://ejemplo.com'
    }
]
```

### Solución de Problemas

1. **Las noticias no se actualizan:**
   - Verificar que el script tenga permisos de ejecución: `chmod +x update_schedule.sh`
   - Revisar los logs: `cat update.log`
   - Ejecutar manualmente: `python3 news_updater.py`

2. **Error de Git:**
   - Verificar credenciales: `git config --list`
   - Verificar conexión: `git remote -v`

3. **Problemas con el dominio:**
   - Verificar configuración DNS
   - Esperar propagación (puede tardar hasta 24 horas)

### Mantenimiento

- **Semanal:** Revisar logs de actualización
- **Mensual:** Verificar que las fuentes de noticias sigan funcionando
- **Trimestral:** Actualizar dependencias Python si es necesario

## Contacto y Soporte

Para cualquier problema o mejora, contactar a:
- **Email:** felixalbertoquintana@gmail.com
- **Repositorio:** https://github.com/felixquintana/fq.github.io

---

**Fecha de creación:** 8 de agosto de 2025
**Versión:** 1.0
**Estado:** Implementado y funcionando

