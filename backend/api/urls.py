from django.urls import path
from . import views

urlpatterns = [
    path('v1/', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    
    path('notes/<str:pk>/', views.getNote, name="note"),
]
