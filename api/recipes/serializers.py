from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    ingredients = serializers.CharField(max_length=255)
    time = serializers.IntegerField()
    instructions = serializers.CharField(max_length=1000)
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Recipe
        fields = ['id','name','ingredients','time','instructions']

    def create(self, validated_data):
        
        return Recipe.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.ingredients = validated_data.get('ingredients', instance.ingredients)
        instance.time = validated_data.get('time', instance.time)
        instance.id = validated_data.get('id', instance.id)
        instance.instructions = validated_data.get('instructions', instance.instructions)
        instance.save()
        return instance