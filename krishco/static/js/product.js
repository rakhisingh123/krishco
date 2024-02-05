$(document).ready(function () {
    $('.main .list li').hover(function(){
        $(this).siblings().css({'background-color': '#DCDCDC','font-weight': 'normal','scale': '1'});
        $(this).css({'background-color': 'white','font-weight': 'bolder','scale': '1.1'});
        let title=$(this).children('span').html().trim();
        $('.products').css('display','none');
        if(title=='Residential Pumps'){
            $('.resi').css('display','flex');
        }
        else if(title=='Agricultural Pumps'){
            $('.agri').css('display','flex');
        }
        else if(title=='Solar Water Pumps'){
            $('.solar-water').css('display','flex');
        }
        else if(title=='Specialty Pumps'){
            $('.speciality').css('display','flex');
        }
        else if(title=='CPVC Pumps'){
            $('.cpvc-pump').css('display','flex');
        }
        else if(title=='CPVC Pipes &amp; Fittings'){
            $('.cpvc-pipe').css('display','flex');
            // if(confirm('Do you want to open another page?'))
            //     location.href='/Product-Page/CPVC-Pipe-Fittings.html';
            // else
            //     location.reload()
        }
        else if(title=='UPVC Pipes &amp; Fittings'){
            $('.upvc-pipe').css('display','flex');
        }
        else if(title=='SWR Pipes &amp; Fittings'){
            $('.sewerage-pipe').css('display','flex');
        }
        else if(title=='Agricultural Pipes &amp; Fittings'){
            $('.agri-pipe').css('display','flex');
        }
        else if(title=='UPVC Casing Pipes'){
            $('.upvc-casing-pipe').css('display','flex');
        }
        else if(title=='Column Pipes'){
            $('.column-pipe').css('display','flex');
        }
        else if(title=='Water Tanks'){
            $('.water-tank').css('display','flex');
        }
        else if(title=='Solvent Cement'){
            $('.solvent-cement').css('display','flex');
        }
    });
    $('.fa-bars-progress').click(function () {
        $('.main aside').css('width', '30rem');
        $('.butun').css('left', '30rem');
        $('.fa-close').css({'display':'block','color':'red'});
        $('.fa-bars-progress').css('display', 'none');
    })
    $('.fa-close').click(function () {
        $('.main aside').css('width', '0%');
        $('.butun').css('left', '0%');
        $('.fa-close').css('display', 'none');
        $('.fa-bars-progress').css('display', 'block');
    })
    $('.features .title ul li').hover(function () {
        $('.features .title ul li').css({'background-color':'transparent','color':'black'});
        $(this).css({'background-color':'white','color':'blue'});
        $('.details').css('display', 'none'); 
        if($(this).attr('class')=='title1'){
            $('.details1').css('display', 'block');
        }
        else if($(this).attr('class')=='title2'){
            $('.details2').css('display', 'block');
        }
        else if($(this).attr('class')=='title3'){
            $('.details3').css('display', 'block');
        }
    });
});
function addpopup(d) {
    $('.popup-products .main .main1 img').attr('src',$(d).siblings("img").attr("src"));
    $('.popup-products .main .main2 h2').html($(d).siblings('span').html());
    $('.popup-products').css('transform','scale(1)');
}
function productbar(){
    // alert($('.fa-bars-progress').css('display'))
    if($('.fa-bars').css('display')=='none'){
        $('.main aside').css('width', '24%');
    }
    else if($('.fa-bars').css('display')=='block' && $('.fa-bars-progress').css('display')=='inline-block'){
        $('.main aside').css('width', '0');
    }
}