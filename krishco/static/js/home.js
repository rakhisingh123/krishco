$(document).ready(function () {
    var a = 0;
    $('.fa-bars').click(function () {
        if (a == 0) {
            $('.nav').css({ 'right': '0rem', 'transition': '.3s all linear' })
            a = 1;
        }
        else if (a == 1) {
            $('.nav').css({ 'right': '-21rem', 'transition': '.3s all linear' })
            a = 0;
        }
    });

    $('#t6,#t7').keypress(function (e) {
        if (!((e.which >= 48 && e.which <= 57) || e.which == 46)) {
            $(this).siblings('span').html('Only Digits are Allowed')
            e.preventDefault();
        }
        else if (e.which == 48) {
            if (e.target.selectionStart === 0)
                return false;
            else if ($(this).val().slice(-1) === ' ')
                e.preventDefault();
        }
        else {
            $(this).siblings('span').html('')
        }

    })

    $('#t111,#t10,#t11').on('keypress', function (e) {
        if ((e.which == 32) && e.target.selectionStart == 0)
            return false;
        else if ((e.which == 46) && e.target.selectionStart == 0)
            return false;
        else if (!(e.which >= 65 && e.which <= 90 || e.which >= 97 && e.which <= 122 || e.which == 32 || e.which == 46)) {
            $(this).siblings('span').html('Only Alphabate allowed')
            e.preventDefault();

            return false;
        }
        else if (e.which == 32 && $(this).val().slice(-1) == ' ') {
            e.preventDefault();
        }
        else if (e.which == 46 && $(this).val().slice(-1) == ' ') {
            e.preventDefault();
        }
        else
            $(this).siblings('span').html('')
    });
});

$("#t0").on('focusout', function () {
    var inputvalues = $(this).val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(inputvalues)) {
        $('#t15').html('Inavlid Email Id!')
        $('#t15').css('color', 'red')
        flag = false
        return regex.test(inputvalues);
    }
});

$('#t0').on('focus', function () {
    var t = $('#t5').text()
    if (t = ('Inavlid Email Id!'))
        $('#t15').html('')
});
$(document).ready(function () {
    // alert(sessionStorage.getItem('val'))
    if (sessionStorage.getItem('val') != null) {
        if (sessionStorage.getItem('val').trim() == 'CONTACT US') {
            location.href = '#s'
            setTimeout(scrllo, 1);
            sessionStorage.setItem('val', null)
        }
        else if (sessionStorage.getItem('val').trim() == 'PRODUCT') {
            location.href = '#ss';
            setTimeout(scrlo, 1)
            sessionStorage.setItem('val', null)
        }
    }
    $('.fa-xmark').click(function () {
        $('.popup').css('display', 'none');
        $('.popup .value1 img').attr('src', null);
        $('.popup .value2 img').attr('src', null);
    })
    $('.btn').click(function () {
        // sessionStorage.setItem('url', $(this).children('a').attr('href'))
        $('.popup').css('display', 'flex');
        var kk = $(this).siblings('span').text();
        if (kk.trim() == 1) {
            $('.popup .value1 img').attr('src', '/image/nine.jpg');
            $('.popup .value2 img').attr('src', '/image/ten.jpg');
        }
        else if (kk.trim() == 2) {
            $('.popup .value1 img').attr('src', '/image/eleven.jpg');
            $('.popup .value2 img').attr('src', '/image/twel.jpg');
        }
        else if (kk.trim() == 3) {
            $('.popup .value1 img').attr('src', '/image/thiteen.jpg');
            $('.popup .value2 img').attr('src', '/image/fourthen.jpg');
        }
        else if (kk.trim() == 4) {
            $('.popup .value1 img').attr('src', '/image/one.jpg');
            $('.popup .value2 img').attr('src', '/image/two.jpg');
        }
        else if (kk.trim() == 5) {
            $('.popup .value1 img').attr('src', '/image/three.jpg');
            $('.popup .value2 img').attr('src', '/image/four.jpg');
        }
        else if (kk.trim() == 6) {
            $('.popup .value1 img').attr('src', '/image/five.jpg');
            $('.popup .value2 img').attr('src', '/image/six.jpg');
        }
    })

    $('.content2').click(function () {
        $('.popup1').css('display', 'flex');
    })
});

// function scrllo() {
//     window.scrollBy(0, -150)
// }
function scrll() {
    window.scrollBy(0, -210)
}

function scrlo() {
    window.scrollBy(0, -300)
}


function legend(l, t) {
    a = $(t).val();
    if (a.trim() == '')
        $(l).css('visibility', 'hidden')
    else
        $(l).css('visibility', 'visible')
}