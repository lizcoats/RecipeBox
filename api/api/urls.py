#keep this
# from django.contrib import admin
# from django.urls import path,include               
# from rest_framework import routers                 
# from recipes import views  


# router = routers.DefaultRouter()                   
# # router.register(r'recipes', views.RecipeView, 'recipe')  
# router.register('', views.RecipeView, 'recipe')  

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('', include(router.urls)),
#     path('accounts/', include('accounts.urls')),
#     path('api-auth/',include ('rest_framework.urls')), 
    
# ]
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('recipes.urls')),
]
