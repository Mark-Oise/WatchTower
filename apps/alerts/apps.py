from django.apps import AppConfig


class AlertConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apps.alerts"

    def ready(self):
        from . import signals
        
