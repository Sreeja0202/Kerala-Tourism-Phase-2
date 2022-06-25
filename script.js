function validate()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if(email.value == "" || password.value == "")
    {
        return false;
    }
    else
    {
        return true;
    }
}