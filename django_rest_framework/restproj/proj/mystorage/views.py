from rest_framework import viewsets
from .models import Essay, Album, Files
from .serializers import EssaySerializer, AlbumSerializer, FileSerializer
from rest_framework.filters import SearchFilter
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

class PostViewSet(viewsets.ModelViewSet):
    queryset = Essay.objects.all()
    serializer_class = EssaySerializer

    filter_backends = [SearchFilter]
    search_fields = ('title','body')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    #현재 request를 보낸 유저
    # == self.request.user

    def get_queryset(self):
        qs = super().get_queryset()
        
        if self.request.user.is_authenticated:
            qs = qs.filter(author = self.request.user)
        else:
            qs = qs.none()
        return qs

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class FileViewSet(viewsets.ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FileSerializer

    # parser_class 지정
    # create() 오버라이딩
    parser_classes = (MultiPartParser, FormParser)
    #다양한 미디어 형태들을 수락할 수 있게 도와준다

    # API HTTP -> get() post()
    # create() --> post() 요청

    def post(self, request, *args, **kwargs):
        serializer = FileSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        else:
            return Response(serializer.error, status=HTTP_400_BAD_REQUEST)