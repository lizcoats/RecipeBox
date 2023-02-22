from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .serializers import RecipeSerializer
from .models import Recipe

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


