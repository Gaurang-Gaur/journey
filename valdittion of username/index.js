// alert("hello");
function validate() {
    let v = document.myform.username.value;
    let rg = /^[A-Z a-z]+$/;
    console.log(rg);
    if (v.match(rg)) {
        // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
        // for more knowledge 
        // alert()
        alert("validate username");
        return true;

    }
    else {
        alert("Invalid username");
        return false;

    }
}