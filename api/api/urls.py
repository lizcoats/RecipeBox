from django.contrib import admin
from django.urls import path,include               
from rest_framework import routers                 
from recipes import views  

                        

router = routers.DefaultRouter()                   
# router.register(r'recipes', views.RecipeView, 'recipe')  
router.register('', views.RecipeView, 'recipe')  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))    
       
]
