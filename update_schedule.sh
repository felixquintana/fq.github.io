#!/bin/bash

# BladeRunner Tech News - Script de Actualización Automática
# Este script se ejecuta diariamente a las 8:00 AM (hora de España)

# Configuración
PROJECT_DIR="/home/ubuntu/bladerunner-news"
LOG_FILE="$PROJECT_DIR/update.log"
PYTHON_SCRIPT="$PROJECT_DIR/news_updater.py"

# Función de logging
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

# Función principal
main() {
    log_message "=== Iniciando actualización automática de noticias ==="
    
    # Cambiar al directorio del proyecto
    cd "$PROJECT_DIR" || {
        log_message "ERROR: No se pudo acceder al directorio $PROJECT_DIR"
        exit 1
    }
    
    # Ejecutar el actualizador de noticias
    log_message "Ejecutando actualizador de noticias..."
    
    if python3 "$PYTHON_SCRIPT" >> "$LOG_FILE" 2>&1; then
        log_message "✅ Actualización completada exitosamente"
        
        # Si estamos en un entorno con Git configurado, hacer commit y push
        if [ -d ".git" ]; then
            log_message "Actualizando repositorio Git..."
            
            git add . >> "$LOG_FILE" 2>&1
            git commit -m "Actualización automática de noticias - $(date '+%Y-%m-%d %H:%M')" >> "$LOG_FILE" 2>&1
            git push origin gh-pages >> "$LOG_FILE" 2>&1
            
            if [ $? -eq 0 ]; then
                log_message "✅ Cambios subidos a GitHub exitosamente"
            else
                log_message "⚠️ Error al subir cambios a GitHub"
            fi
        fi
        
    else
        log_message "❌ Error en la actualización de noticias"
        exit 1
    fi
    
    log_message "=== Actualización completada ==="
}

# Ejecutar función principal
main "$@"

