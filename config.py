# config.py
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'mi_clave_secreta'
    # Otras configuraciones...