$(document).ready(function () {
    
    function setDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        } 

        if(mm<10) {
            mm='0'+mm
        } 

        today = 'Date: ' + dd+'/'+mm+'/'+yyyy;
        $("#reportDate").html(today);
    }
    setDate();

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    $("#printReport").click(function () {
        $("#custNameValue").html($("#custName").val());
        $("#custAgeValue").html($("#custAge").val());
        $("#custGenderValue").html($("#custGender").val());
        $("#custRefByValue").html($("#custRefBy").val());
        
        var len = $(".testResultValue").length;
        var x = $(".testResultValue");
        for (var i = 0; i < len-1; i++) {
            $(".testResultPrint")[i].innerHTML = x[i].value + ' mg/100ml';
        }

        if($(".customTestNameBox").val() == "" || $(".customTestNameBox").val() == null) {
            $(".customTestName").css("display", "none");
        } else {
            $(".customTestName").html($(".customTestNameBox").val());
        }

        if($(".customTestRangeBox").val() == "" || $(".customTestRangeBox").val() == null) {
            $(".customTestRange").css("display", "none");
        } else {
            $(".customTestRange").html($(".customTestRangeBox").val());
        }

        if($(".customTestResultValue").val() == "" || $(".customTestResultValue").val() == null) {
            $(".customTestResultPrint").css("display", "none");
        } else {
            $(".customTestResultPrint").html($(".customTestResultValue").val());
        }        

        if($("#report_comments").val() == "" || $("#report_comments").val() == null) {
            $("#report_comments_print").css("display", "none");
            $("#report_comments_print_label").css("display", "none");
        } else {
            $("#report_comments_print").html($("#report_comments").val());
            $("#report_comments_print").css("padding", "10px");
        }        

        $("#printReport").css("display", "none");
        window.print();
    });
});