$(document).ready(function () {

    $('#t1').keypress(function (e) {
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

    $('#t,#t100').on('keypress', function (e) {
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

$("#t2").on('focusout', function () {
    var inputvalues = $(this).val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(inputvalues)) {
        $('#t15').html('Inavlid Email Id!')
        $('#t15').css('color', 'red')
        flag = false
        return regex.test(inputvalues);
    }
});

$('#t2').on('focus', function () {
    var t = $('#t15').text()
    if (t = ('Inavlid Email Id!'))
        $('#t15').html('')
});