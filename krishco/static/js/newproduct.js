    // ====================== Animation ===============================
    $('#b2').click(function () {
        $('#togx').css({ 'margin-left': '10rem', 'border-radius': '0 1rem 1rem 0' });
        $('#body').css('margin-left', '-100%');
        $('#lf,#lt,.fa-search').show();
    })
    $('#b1').click(function () {
        $('#togx').css({ 'margin-left': '0rem', 'border-radius': '1rem 0 0 1rem' });
        $('#body').css('margin-left', '0%');
        $('#lf,#lt,.fa-search').hide();
        $('#d3').html('');
    })
    // --------------------------------------------------------------------
    // ======================== Mandatory ===========================
    var flag = true;
    function ch2(t, l) {
        a = $(t).val();
        if (a == null) {
            $(t).css('border', '2px solid red');
            $(l).html('Select any One!');
            flag = false;
        }
    }
    function ch3(t, l) {
        $(t).css('border', '1px solid black');
        $(l).html('');
    }
    // -----------------------------------------
    // ======================= Download==========================

    $(document).on('click', '#b7', function () {
        $("#table3").table2excel({
            exclude: ".sn,#sn,#chk",
            filename: $('#s1').val() + "_exp.xls"
        });
    });
    function legend(l, t) {
        a = $(t).val();
        if (a.trim() == '')
            $(l).css('visibility', 'hidden')
        else
            $(l).css('visibility', 'visible')
    }
    function Tdate() {
        var x = new Date();
        dd = x.getDate();
        yy = x.getFullYear();
        mm = x.getMonth() + 1;
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        y = yy + "-" + mm + "-" + dd; //for date format
        $("#t6").val(y);
        $("#t6").attr('max', y);
    }

    $(document).ready(function(){
        // Activate tooltip
        $('[data-toggle="tooltip"]').tooltip();
        
        // Select/Deselect checkboxes
        var checkbox = $('table tbody input[type="checkbox"]');
        $("#selectAll").click(function(){
            if(this.checked){
                checkbox.each(function(){
                    this.checked = true;                        
                });
            } else{
                checkbox.each(function(){
                    this.checked = false;                        
                });
            } 
        });
        checkbox.click(function(){
            if(!this.checked){
                $("#selectAll").prop("checked", false);
            }
        });
    });