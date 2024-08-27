function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value);  //the value getting here is String, convert into Date type. Before conversion it into Date data type. Find its Local of the logged user(System.debug(UserInfo.getLocale()))

    let formmattedDate = new Date(inputdate.value).toLocaleDateString("en-IN"); //Remove underscore , and add hyphen
    // If you want to formate the date with Logged user location, then add the method of 'toLocalDareString()'
    outputdate.value = formmattedDate;

}