from django.urls import path
from .views import get_data

urlpatterns = [
    path('hello/', get_data),
]