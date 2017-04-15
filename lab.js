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

    $("#addNewTest").click(function () {
        var testcategory = 
                "<div class='testCategoryItem'>"+
                    "<div class='testName customTestName'><input class='customTestNameBox' type='text'></div>"+
                    "<div class='testRange customTestRange'><input class='customTestRangeBox' type='text'></div>"+
                    "<div class='testResult'>"+
                        "<div class='customTestResultPrint'>"+
                            "<input class='customTestResultValue' type='text'>"+
                        "</div>"+
                    "</div>"+
                "</div>";
        $( ".testItem" ).append(testcategory);
    });

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

        len = $(".customTestNameBox").length;
        var customNames = $(".customTestNameBox");
        var customRanges = $(".customTestRangeBox");
        var customValues = $(".customTestResultValue");
        for (var i = 0; i < len; i++) {            
            if(customNames[i].value == "" || customNames[i].value == null) {
                $($(".customTestName")[i]).hide();
            } else {
                $(".customTestName")[i].innerHTML = customNames[i].value;
            }
            if(customRanges[i].value == "" || customRanges[i].value == null) {
                $($(".customTestRange")[i]).hide();
            } else {
                $(".customTestRange")[i].innerHTML = customRanges[i].value;
            }
            if(customValues[i].value == "" || customValues[i].value == null) {
                $($(".customTestResultPrint")[i]).hide();
            } else {
                $(".customTestResultPrint")[i].innerHTML = customValues[i].value;
            }
        }                

        if($("#report_comments").val() == "" || $("#report_comments").val() == null) {
            $("#report_comments_print").hide();
            $("#report_comments_print_label").hide();
        } else {
            $("#report_comments_print").html($("#report_comments").val());
            $("#report_comments_print").css("padding", "10px");
        }        

        $("#addNewTest").hide();
        $("#printReport").hide();
        window.print();
    });
});