$(function () {

    $("#svg2").on("click", function (evt) {
        var target = evt.target;
        var landCode = $(target).attr("id");


        var ajaxCall = $.ajax({
            url: "/epAJAX/servlet",
            method: "POST",
            data: landCode
        });
        ajaxCall.done(function (data, status) {
            var contryElement = data[0];

            if (contryElement === null) {
                $("#contryINFO").val("Not a Country");
                return;
            }

            var contryString = "";
            var contryString = "Country: " + contryElement.name + "\n";
            contryString += "Population: " + contryElement.population + "\n";
            contryString += "Area: " + contryElement.area + "\n";
            var borderString = "Borders: ";

            $(contryElement.borders).each(function (index) {
                borderString += contryElement.borders[index] + ",";
            });
            borderString = borderString.substring(0, borderString.length - 1);
            contryString += borderString;
            $("#contryINFO").val(contryString);


        });
        ajaxCall.fail(function (data, status) {
            alert("Fail +" + status);

        });
        ajaxCall.always(function (data, status) {
            console.log(data);
            console.log(status);
        });

    });

});

