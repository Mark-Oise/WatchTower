# Generated by Django 5.1.2 on 2024-12-22 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("monitor", "0002_alter_monitor_slug"),
    ]

    operations = [
        migrations.AddField(
            model_name="monitor",
            name="ssl_expiry_date",
            field=models.DateTimeField(
                blank=True, help_text="SSL certificate expiry date", null=True
            ),
        ),
        migrations.AddField(
            model_name="monitor",
            name="ssl_issuer",
            field=models.TextField(
                blank=True, help_text="SSL certificate issuer details", null=True
            ),
        ),
    ]
