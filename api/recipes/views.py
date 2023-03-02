from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework.permissions import IsAuthenticated

class RecipeList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RecipeSerializer
    def get_queryset(self):
        """
        This view should return a list of all the recipes
        for the currently authenticated user.
        """
        user = self.request.user
        return Recipe.objects.filter(author=user)
    def perform_create(self,serializer):
        serializer.save(author = self.request.user)
      

class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        return Recipe.objects.filter(author=user)

    def perform_create(self,serializer):
        serializer.save(author = self.request.user)

from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...
        return token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class =  MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes=[
        'token/',
        'token/refresh',
    ]
    return Response(routes)






# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework.serializers import Serializer
# from .models import Recipe
# from .serializers import RecipeSerializer
# from recipes import serializers
# from .utils import updateRecipe, getRecipeDetail, deleteRecipe, getRecipesList, createRecipe
# # Create your views here.


# @api_view(['GET'])
# def getRoutes(request):

#     routes = [
#         {
#             'Endpoint': '/recipes/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns an array of recipes'
#         },
#         {
#             'Endpoint': '/recipes/id',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns a single recipe object'
#         },
#         {
#             'Endpoint': '/recipes/create/',
#             'method': 'POST',
#             'body': {'body': ""},
#             'description': 'Creates new recipe with data sent in post request'
#         },
#         {
#             'Endpoint': '/recipes/id/update/',
#             'method': 'PUT',
#             'body': {'body': ""},
#             'description': 'Creates an existing recipe with data sent in post request'
#         },
#         {
#             'Endpoint': '/recipes/id/delete/',
#             'method': 'DELETE',
#             'body': None,
#             'description': 'Deletes an exiting recipe'
#         },
#     ]
#     return Response(routes)

# @api_view(['GET', 'POST'])
# def getRecipes(request):

#     if request.method == 'GET':
#         return getRecipesList(request)

#     if request.method == 'POST':
#         return createRecipe(request)


# @api_view(['GET', 'PUT', 'DELETE'])
# def getRecipe(request, pk):

#     if request.method == 'GET':
#         return getRecipeDetail(request, pk)

#     if request.method == 'PUT':
#         return updateRecipe(request, pk)

#     if request.method == 'DELETE':
#         return deleteRecipe(request, pk)






# from rest_framework.response import Response
# from rest_framework.views import APIView
# from django.shortcuts import get_object_or_404
# from .serializers import RecipeSerializer
# from .models import Recipe


# class RecipesView(APIView):

#     def get(self, request, pk=None):
#         if pk:
#             data = Recipe.objects.get(id=pk)
#             serializer = RecipeSerializer(data)
#         else:
#             data = Recipe.objects.all()
#             serializer = RecipeSerializer(data, many=True)
#         return Response({"result": serializer.data})

#     def post(self,request):
#         recipe = request.data
#         serializer = RecipeSerializer(data=recipe)
#         if serializer.is_valid(raise_exception=True):
#             recipe_saved = serializer.save()
#         return Response({"result": f"Recipe{recipe_saved.name}"})

#     def put(self, request, pk):
#         saved_recipe = get_object_or_404(Recipe.objects.all(), pk=pk)
#         data = request.data
#         serializer = RecipeSerializer(instance=saved_recipe, data=data, partial=True)
#         if serializer.is_valid(raise_exception=True):
#             recipe_saved = serializer.save()
#         return Response({"result": f"Recipe{recipe_saved.name} updated"})

#     def delete(self, request, pk):
#         recipe = get_object_or_404(Recipe.objects.all(), pk=pk)
#         recipe.delete()
#         return Response({"result": f"Recipe id{pk} deleted"}, status=204)


