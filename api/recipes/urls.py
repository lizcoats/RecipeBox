from django.urls import path
from .views import RecipeDetail, RecipeList

from .views import MyTokenObtainPairView
from . import views


from rest_framework_simplejwt.views import(
    TokenRefreshView,
)

urlpatterns = [
     path('<int:pk>/', RecipeDetail.as_view(), name='detailcreate'),
    path('', RecipeList.as_view(), name='listcreate'),
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
]   
    

#this
# urlpatterns = [
#     path('<int:pk>/', RecipeDetail.as_view(), name='detailcreate'),
#     path('', RecipeList.as_view(), name='listcreate'),
# ]
