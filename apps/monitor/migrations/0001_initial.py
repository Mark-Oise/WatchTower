# Generated by Django 5.1.2 on 2024-12-18 19:47

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Monitor",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(help_text="Monitor name", max_length=255)),
                ("url", models.URLField(help_text="URL to monitor", max_length=255)),
                (
                    "interval",
                    models.IntegerField(
                        choices=[
                            (5, "5 minutes"),
                            (10, "10 minutes"),
                            (15, "15 minutes"),
                            (30, "30 minutes"),
                            (60, "60 minutes"),
                        ],
                        default=5,
                        help_text="Monitoring interval in minutes",
                    ),
                ),
                (
                    "description",
                    models.TextField(
                        blank=True, help_text="Description of the monitor.", null=True
                    ),
                ),
                (
                    "alert_threshold",
                    models.PositiveIntegerField(
                        default=3, help_text="Failures before alert is triggered."
                    ),
                ),
                (
                    "last_checked",
                    models.DateTimeField(
                        blank=True, help_text="Last check timestamp.", null=True
                    ),
                ),
                (
                    "is_active",
                    models.BooleanField(
                        default=True,
                        help_text="Whether monitoring is active or paused.",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True, help_text="Timestamp of creation."
                    ),
                ),
                (
                    "updated_at",
                    models.DateTimeField(
                        auto_now=True, help_text="Timestamp of last update."
                    ),
                ),
                (
                    "availability",
                    models.CharField(
                        choices=[
                            ("online", "Online"),
                            ("offline", "Offline"),
                            ("unknown", "Unknown"),
                        ],
                        default="unknown",
                        help_text="Current availability status of the monitored service.",
                        max_length=7,
                    ),
                ),
                (
                    "consecutive_failures",
                    models.PositiveIntegerField(
                        default=0, help_text="Number of consecutive failed checks."
                    ),
                ),
                (
                    "last_ssl_check",
                    models.DateTimeField(
                        blank=True,
                        help_text="Last SSL certificate check timestamp",
                        null=True,
                    ),
                ),
                (
                    "slug",
                    models.SlugField(
                        help_text="URL-friendly identifier for the monitor",
                        max_length=255,
                        unique=True,
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="monitors",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Monitor",
                "verbose_name_plural": "Monitors",
                "ordering": ["-created_at"],
            },
        ),
        migrations.CreateModel(
            name="MonitorLog",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("success", "Success"),
                            ("failure", "Failure"),
                            ("error", "Error"),
                            ("warning", "Warning"),
                        ],
                        help_text="Result status of the check",
                        max_length=10,
                    ),
                ),
                (
                    "response_time",
                    models.FloatField(
                        blank=True, help_text="Response time in milliseconds", null=True
                    ),
                ),
                (
                    "status_code",
                    models.PositiveSmallIntegerField(
                        blank=True,
                        help_text="HTTP status code (for HTTP monitors)",
                        null=True,
                    ),
                ),
                (
                    "error_message",
                    models.TextField(
                        blank=True, help_text="Error details if check failed", null=True
                    ),
                ),
                (
                    "checked_at",
                    models.DateTimeField(
                        auto_now_add=True, help_text="When the check was performed"
                    ),
                ),
                (
                    "monitor",
                    models.ForeignKey(
                        help_text="Associated monitor",
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="logs",
                        to="monitor.monitor",
                    ),
                ),
            ],
            options={
                "verbose_name": "Monitor Log",
                "verbose_name_plural": "Monitor Logs",
                "ordering": ["-checked_at"],
            },
        ),
        migrations.AddIndex(
            model_name="monitor",
            index=models.Index(fields=["slug"], name="monitor_mon_slug_d628ad_idx"),
        ),
        migrations.AddIndex(
            model_name="monitorlog",
            index=models.Index(
                fields=["monitor", "checked_at"], name="monitor_mon_monitor_69162d_idx"
            ),
        ),
        migrations.AddIndex(
            model_name="monitorlog",
            index=models.Index(fields=["status"], name="monitor_mon_status_e82ca0_idx"),
        ),
        migrations.AddIndex(
            model_name="monitorlog",
            index=models.Index(
                fields=["status", "response_time", "checked_at"],
                name="monitor_mon_status_f6c611_idx",
            ),
        ),
    ]
