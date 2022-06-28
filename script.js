// login form validation strts

function loginvalidate()
{  
    
    let email = document.getElementById("email");
let password = document.getElementById("password");
// let regexp = /^([a-zA-Z0-9\._\-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regemail.test(email.value))
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

// function registervalidate()
// {
//     let name = document.getElementById('name').value;
//     let regname = /^[A-Za-z\. ]{3,30}\D$/;
//     let dob = document.getElementById("dob").value;
//     let email = document.getElementById("email").value;
//     let regemail = /^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     let password = document.getElementById("password").value;
//     let regassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//     let confirmpassword = document.getElementById("confirmpassword").value;
//     let num = document.getElementById("num").value;
//     let regnum = /^\d{3}[\s\-]?\d{3}[\s\-]?\d{4}$/;
    
//     if(regname.test(name.value)){
//         alert("NAME  format is verified");
//         return true;
//     }
//     else{
//         alert("Name formt is wrong");
//         return false;
//     }
   
// }

var nameerror = document.getElementById("nameerrorr");
var phoneerror = document.getElementById("phoneerror");
var emailerror = document.getElementById("emailerror");
var passworderror = document.getElementById("passworderror");
var cpassworderror = document.getElementById("cpassworderror"); 
var submiterror = document.getElementById("submiterror"); 

function validatename()
{
    var name = document.getElementById("name").value;
    if(name.length == 0)
    {
        nameerror.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z\. ]{3,30}\D$/))
    {
        nameerror.innerHTML = "Name is in Wrong Formar";  
        return false; 
    }
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function contactvalidate()
{
    var number = document.getElementById("number").value;
    if(number == 0)
    {
        phoneerror.innerHTML= "Phone number is required";
        return false;

    }
    if (!number.match(/^\d{3}[\s\-]?\d{3}[\s\-]?\d{4}$/))
    {
        phoneerror.innerHTML= "Only 10 digits allowed";
        return false;
    }
phoneerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}

function emailvalidate()
{
    var email = document.getElementById("email").value;
    if(email == 0)
    {
       emailerror.innerHTML = "Email is required";
       return false;
    }
    if(!email.match(/^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        emailerror.innerHTML = "Email is in wrong format";
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function passwordvalidate()
{
    var password = document.getElementById("password").value;
    var passwordmsg = document.getElementById("passwordmsg");
    var strength = document.getElementById("strength");
    var upper = document.getElementById("upper");
    var lower = document.getElementById("lower");
    var digit = document.getElementById("digit");
    var min = document.getElementById("min");
    // password number check

    if(password.match(/[0-9]/))
    {
        digit.style.color = 'green';
    }
    else{
        digit.style.color = 'red';
    }

    // uppercase check
    if(password.match(/[A-Z]/))
    {
        upper.style.color = 'green';
    }
    else
    {
        upper.style.color = 'red';
    }

    // lowercase check
    if(password.match(/[a-z]/))
    {
        lower.style.color = 'green';
    }
    else
    {
        lower.style.color = 'red';
    }

    // min 8 characters
    if(password.length<8)
    {
        min.style.color = 'red';
    }
    else
    {
        min.style.color = 'green';
    }

    // password.addEventlistener('input', () => 
    // {
        if (password.length > 0)
        {
            passwordmsg.style.display = "block";
            passwordmsg.style.color = "#eb4034";
        }
            
        else
        {
        passwordmsg.style.display = "null";
        }

        if(password.length < 4)
        {
            strength.innerHTML = "poor";
            passwordmsg.style.color = "#eb4034";

        }
        else if(password.length >= 4 && password.length < 8)
        {
            strength.innerHTML = "medium";
            passwordmsg.style.color = "#a88b32";

        }
        else if(password.length >= 8)
        {
            strength.innerHTML = "strong";
            passwordmsg.style.color = "#2e9624";
        }
    // })

}

// validate confirm password
function confirmpasswordvalidate()
{
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    if(password == cpassword)
    {
        document.getElementById('upper').style.display = 'none';
        document.getElementById('lower').style.display = 'none';
        document.getElementById('digit').style.display = 'none';
        document.getElementById('min').style.display = 'none';
        cpassworderror.innerHTML = "Password matches";
        return true;
    }
    else
    {
        document.getElementById('upper').style.display = 'block';
        document.getElementById('lower').style.display = 'block';
        document.getElementById('digit').style.display = 'block';
        document.getElementById('min').style.display = 'block';
        cpassworderror.innerHTML = "Password mismatch";
        return false;
    }

}

function validateform()
{
    if(validatename() || emailvalidate() || contactvalidate() || passwordvalidate() || confirmpasswordvalidate())
    {
        // submiterror.style.display = "block";
        // submiterror.innerHTML = "Please fix error to submit";
        // setTimeout(function() {submiterror.style.display = 'none';}, 3000);
        return true;
    }
    else
    {
        
        submiterror.innerHTML = "Please fix error to submit";
        return false;
    }
    
}
