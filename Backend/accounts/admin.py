from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    # admin list view te j field gulo dekhte chao
    list_display = (
        "email",
        "full_name",
        "user_type",
        "education_level",
        "experience_level",
        "preferred_career_track",
        "is_staff",
        "is_active",
    )
    list_filter = ("user_type", "is_staff", "is_active", "education_level", "experience_level")
    search_fields = ("email", "full_name")
    ordering = ("email",)

    # admin form er field structure customize
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal Info", {"fields": ("full_name", "bio", "skills", "cv_text")}),
        ("Professional Details", {
            "fields": (
                "user_type",
                "education_level",
                "experience_level",
                "preferred_career_track",
            )
        }),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email",
                "full_name",
                "password1",
                "password2",
                "user_type",
                "is_active",
                "is_staff",
            ),
        }),
    )
