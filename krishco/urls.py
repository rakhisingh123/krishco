from django.contrib import admin
from django.urls import path
# from .views import mail
from krishco import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index,name='index'),
    path('aboutus/', views.aboutus,name='aboutus'),
    path('gallery/', views.gallery,name='gallery'),
    path('blog/', views.blog,name='blog'),
    path('Productpage/',views.Productpage,name='Productpage'),
    path('blogdetail/',views.blogdetail,name='blogdetails'),
    path('blogdetail2/',views.blogdetail2,name='blogdetail2'),
    path('blogdetail3/',views.blogdetail3,name='blogdetail3'),
    path('blogdetail4/',views.blogdetail4,name='blogdetail4'),
    path('addproduct/',views.addproduct,name='addproduct'),
    path('agriculturalpipe/',views.agriculturalpipe,name='agriculturalpipe'),
    path('agriculturalsubmersible/',views.agriculturalsubmersible,name='agriculturalsubmersible'),
    path('watertank/',views.watertank,name='watertank'),
    path('colum/',views.colum,name='colum'),
    path('UPVCCasingPipes/',views.UPVCCasingPipes,name='UPVCCasingPipes'),
    path('SWRPipesFittings',views.SWRPipesFittings,name='SWRPipesFittings'),
    path('UPVCPipeFittings/',views.UPVCPipeFittings,name='UPVCPipeFittings'),
    path('CPVCPipesFittings/',views.CPVCPipesFittings,name='CPVCPipesFittings'),
    path('agruculturalmonoblocks/',views.agruculturalmonoblocks,name='agruculturalmonoblocks'),
    path('Shallowwell/',views.Shallowwell,name='Shallowwell'),
    path('Submersiblepump/',views.Submersiblepump,name='Submersiblepump'),
    path('openwellsubmersible/',views.openwellsubmersible,name='openwellsubmersible'),
    path('jet/',views.jet,name='jet'),
    path('agruculturalmonoblocks/',views.agruculturalmonoblocks,name='agruculturalmonoblocks'),
    path('agriculturalsubmersible/',views.agriculturalsubmersible,name='agriculturalsubmersible'),
    path('verticalopenwell/',views.verticalopenwell,name='verticalopenwell'),
    path('newproduct',views.newproduct,name='newproduct'),
    path('newblog',views.newblog,name='newblog'),
    path('add',views.add,name='add'),
    path('edit/<str:id>',views.edit,name='edit'),
    # path('update/<str:id>',views.update,name='update'),/
     path('delete/<int:id>', views.delete, name='delete'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)