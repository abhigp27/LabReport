$(document).ready(function() {

    function createDiv(class_name) {
        var element = document.createElement("div");
        element.className = class_name;
        return element;
    }

    function createInput(class_name, type) {
        var element = document.createElement("input");
        element.className = class_name;
        element.type = type;
        return element;
    }

    function setDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = 'Date: ' + dd + '/' + mm + '/' + yyyy;
        $("#reportDate").html(today);
    }
    setDate();

    $("#addNewTest").click(function() {
        /*
        TODO: 
        1. Use separate field for measurement unit(left aligned) and its value(right aligned).
        */

        var testCategoryItem = createDiv("testCategoryItem");        
        
        var testName = createDiv("testName customTestName");
        var customTestNameBox = createInput("customTestNameBox", "text");
        testName.appendChild(customTestNameBox);

        var testRange = createDiv("testRange customTestRange");
        var customTestRangeBox = createInput("customTestRangeBox", "text");
        testRange.appendChild(customTestRangeBox);

        var testResult = createDiv("testResult");

        var customTestResultPrint = createDiv("customTestResultPrint");
        var customTestResultValue = createInput("customTestResultValue", "text");
        customTestResultPrint.appendChild(customTestResultValue);

        testResult.appendChild(customTestResultPrint);

        testCategoryItem.appendChild(testName);
        testCategoryItem.appendChild(testRange);
        testCategoryItem.appendChild(testResult);

        $(".testItem").append(testCategoryItem);
    });

    $("#printReport").click(function() {
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
            if (customNames[i].value == "" || customNames[i].value == null) {
                $($(".customTestName")[i]).hide();
            } else {
                $(".customTestName")[i].innerHTML = customNames[i].value;
            }
            if (customRanges[i].value == "" || customRanges[i].value == null) {
                $($(".customTestRange")[i]).hide();
            } else {
                $(".customTestRange")[i].innerHTML = customRanges[i].value;
            }
            if (customValues[i].value == "" || customValues[i].value == null) {
                $($(".customTestResultPrint")[i]).hide();
            } else {
                $(".customTestResultPrint")[i].innerHTML = customValues[i].value;
            }
        }

        if ($("#report_comments").val() == "" || $("#report_comments").val() == null) {
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