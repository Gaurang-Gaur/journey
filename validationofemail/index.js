// alert("hello");
function validate() {
    let v = document.myform.email.value;
    let rg = /^[A-Z a-z 0-9][A-Z a-z 0-9 . _]*@[A-Z a-z 0-9]+([.][A-Z a-z ]+)+$/;
    // if some thing @ it means it have one time occurence
    // + atleast one occurence

    console.log(rg);
    if (v.match(rg)) {
        // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
        // for more knowledge 
        // alert()
        // regular expression start with /^ and end with $/;
        alert("valid emailId");
        return true;

    }
    else {
        alert("Invalid emailId");
        return false;

    }
}