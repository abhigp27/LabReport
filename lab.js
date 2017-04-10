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
        for (var i = 0; i < len; i++) {
            $(".testResultPrint")[i].innerHTML = x[i].value + ' mg/100ml';
        }

        $("#printReport").css("display", "none");
        window.print();
    });
});