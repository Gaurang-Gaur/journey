// alert("hello");
function validate() {
    let ph = document.myform.ph.value;
    let rg = /^[7-9][0-9]{9}$/;
    console.log(rg);
    if (ph.match(rg)) {
        // alert()
        alert("validate no.");
        return true;

    }
    else {
        alert("Invalid phone no.");
        return false;

    }
}