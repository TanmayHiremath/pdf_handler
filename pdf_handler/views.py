from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from PIL import Image
from wsgiref.util import FileWrapper
import os
# Create your views here.
class ImgToPdf(APIView):
      def get(self, request):
            return render(request, 'index.html')
      def post(self, request):
            img_list = []
            for img in request.FILES.getlist('file'):
                  img_list.append(Image.open(img).convert('RGB'))
            home_img = img_list[0]
            print(home_img)
            home_img.save('xyz.pdf', "PDF" ,resolution=100.0, save_all=True, append_images=img_list[1:])
            filename = 'xyz.pdf'
            content = FileWrapper(filename)
            response = HttpResponse(content, content_type='application/pdf')
            response['Content-Length'] = os.path.getsize(filename)
            response['Content-Disposition'] = 'attachment; filename=%s' % 'converted.pdf'
            return response
    
