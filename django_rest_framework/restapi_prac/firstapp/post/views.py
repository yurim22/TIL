
# Create your views here.
from .models import Post
from .serializer import PostSerializer
from rest_framework import viewsets

# cbv
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer