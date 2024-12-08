# Generated by Django 5.1.2 on 2024-12-10 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("monitor", "0004_remove_monitor_host_remove_monitor_port_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="monitor",
            name="last_ssl_check",
            field=models.DateTimeField(
                blank=True, help_text="Last SSL certificate check timestamp", null=True
            ),
        ),
        migrations.AlterField(
            model_name="monitorlog",
            name="status",
            field=models.CharField(
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
        migrations.AddIndex(
            model_name="monitorlog",
            index=models.Index(
                fields=["status", "response_time", "checked_at"],
                name="monitor_mon_status_f6c611_idx",
            ),
        ),
    ]
