let captchachecked = false;

function beforeSubmit() {
    if (captchachecked) {
        let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("Input date value: ", inputdate.value); //string --> date (en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    console.log("Formatted Date is: ", formattedDate);
    outputdate.value = formattedDate;
    } else {
        alert("Please Check the reCaptcha box to submit the lead");
        event.preventDefault();//this method will stop the submission of the form
    }
}


function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
}

setInterval(timestamp, 500); 

function captchasuccess() {
    captchachecked = true;
}