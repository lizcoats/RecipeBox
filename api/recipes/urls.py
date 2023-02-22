from django.urls import path
from .views import RecipesView
urlpatterns = [
    path('', RecipesView.as_view(), name ='recipe_list'),
    path('<int:pk>', RecipesView.as_view(), name ='recipe_detail'),

]