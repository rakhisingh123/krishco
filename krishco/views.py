from django.shortcuts import render,HttpResponse,redirect

from django.conf import settings
from django.core.mail import send_mail 
from .models import product
from django.core.files.storage import FileSystemStorage
from django.urls import reverse


def index(request):
    print(request.method)
    if request.method == 'POST':
        pass
        mail('enquiry','Rakhi','rajsinghmudadih@gmail.com')
    # return HttpResponse('home page loading')
    n=''
    if request.method=="POST":
        name=request.POST.get('name')
        contNo=request.POST.get('name')
        email=request.POST.get('name')
        message=request.POST.get('name')
        en=contactEnquiry(name=name,contNo=contNo,email=email,message=message)
        en.save()
        n='Data Inserted'
    return render(request,'index.html',{'n':n})
    return render(request,'index.html')
def aboutus(request):
    return render(request,'about.html')
def gallery(request):
    return render(request,'gallary.html')
def blog(request):
    return render(request,'blog.html')
def Productpage(request):
    return render(request,'Product-page.html')
def blogdetail(request):
    return render(request,'Blog_Page/detail.html')
def blogdetail2(request):
    return render(request,'Blog_Page/detail2.html')
def blogdetail3(request):
    return render(request,'Blog_Page/detail3.html')
def blogdetail4(request):
    return render(request,'Blog_Page/detail4.html')
def addproduct(request):
    return render(request,'Product_Page/Add-Product.html')
def agriculturalpipe(request):
    return render(request,'Product_Page/Agricultural-Pipe-Fittings.html')
def agriculturalsubmersible(request):
    return render(request,'Product_Page/agricultural-submersible.html')
def watertank(request):
    return render(request,'Product_Page/water-tank.html')
def colum(request):
    return render(request,'Product_Page/colum.html')
def UPVCCasingPipes(request):
    return render(request,'Product_Page/UPVC-Casing-Pipes.html')
def SWRPipesFittings(request):
    return render(request,'Product_Page/SWR-Pipe-Fittings.html')
def UPVCPipeFittings(request):
    return render(request,'Product_Page/UPVC-Pipe-Fittings.html')
def CPVCPipesFittings(request):
    return render(request,'Product_Page/CPVC-Pipe-Fittings.html')
def agruculturalmonoblocks(request):
    return render(request,'Product_Page/agrucultural-monoblocks.html')
def Shallowwell(request):
    return render(request,'Product_Page/Shallowwell-pump.html')
def Submersiblepump(request):
    return render(request,'Product_Page/Submersible-pump.html')
def openwellsubmersible(request):
    return render(request,'Product_Page/openwell-submersible.html')
def jet(request):
    return render(request,'Product_Page/jet.html')
def agriculturalsubmersible(request):
    return render(request,'Product_Page/agricultural-submersible.html')
def verticalopenwell(request):
    return render(request,'Product_Page/vertical-openwell.html')


def mail(subject,msg,to):  
    # print('hh')
    subject = subject  
    msg     = msg  
    to      = to  
    res     = send_mail(subject, msg, settings.EMAIL_HOST_USER, [to])  
    if(res == 1):  
        msg = "Mail Sent Successfuly"  
    else:  
        msg = "Mail could not sent"  
    return HttpResponse(msg)  
def newproduct(request):
    pro = product.objects.all()
    context ={
        'pro':pro,
    }
    return render(request,'newproduct.html', context)
def add(request):
    if request.method == 'POST':
       productName =request.POST.get('Product Name')
       productId = request.POST.get('Product Id')
       Descripation = request.POST.get('Descripation')
       Image = request.POST.get('Image')
       pro =product(
            productName = productName,
           ProductId = productId,
           Descripation = Descripation,
           Image = Image
        )
    #    pro =product[
           
    #        productName := productName,
    #        productId := productId,
    #        Descripation := Descripation,
    #        Image := Image
    #    ]
        
           
       
       pro.save()
       return redirect('newproduct')
    return render(request,'newproduct.html')
def edit(request,id):
    print(id)
    pro2 = product.objects.all()
    context = {
         'pro2':pro2,
    }
    return redirect(request,'newproduct.html',context)
# def update(request ,id):
#     print(id)
    # if request.method == 'POST':
    #     productName = request.POST.get('Product Name')
    #     productId = request.POST.get('Product Id')
    #     Descripation= request.POST.get('Descripation')
    #     Image = request.POST.get('Image')
    
    # pro = product(
    #     id = id,
    #     productName = productName,
    #     ProductId = productId,
    #     Descripation = Descripation,
    #     Image = Image
    # )
    # pro.save()
    # return redirect('newproduct')
    # return redirect(request,'newproduct.html')
    
def delete(request):
    product = product.objects.get(id=id)
    product.delete()
    return HttpResponseRedirect(reverse,'newproduct.html')
def newblog(request):
    return render(request,'newblog.html')