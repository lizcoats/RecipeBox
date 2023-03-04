from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

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
        """
        This view should return a list of all the recipes
        for the currently authenticated user.
        """
        user = self.request.user
        return Recipe.objects.filter(author=user)
  
    def perform_update(self, serializer):
        serializer.save()
        

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













# from rest_framework.response import Response
# from rest_framework.views import APIView
# from django.shortcuts import get_object_or_404
# from .serializers import RecipeSerializer
# from .models import Recipe
# from rest_framework.permissions import IsAuthenticated

# class RecipesView(APIView):
#     permission_classes = [IsAuthenticated]

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







