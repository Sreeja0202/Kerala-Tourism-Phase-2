// login form validation strts

function loginvalidate()
{  
    
    let email = document.getElementById("email");
let password = document.getElementById("password");
// let regexp = /^([a-zA-Z0-9\._\-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp.test(email.value))
    {
        return true;
    }
    else
    {
        alert("Please esure your emailid is correct");
        return false;
    }
}

// login form validation ends

// regitration form validation starts

function registervalidate()
{
    let name = document.getElementById('name').value;
    let regname =/^[A-Za-z\. ]{3,30}$/;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let num = document.getElementById("num").value;
    let regnum = /^\d{3}[\s\-]?\d{3}[\s\-]?\d{4}$/;
    function registervalidate()
    {
        if(regname.test(name.value))
        {
            alert("Name format is correct");
            return true;
        }
        else
        {
            alert("Name format is wrong");
            return false;
        }
    }
}
