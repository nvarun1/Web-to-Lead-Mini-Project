function beforeSubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("Input date value: ", inputdate.value); //string --> date (en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    console.log("Formatted Date is: ", formattedDate);
    outputdate.value = formattedDate;
}