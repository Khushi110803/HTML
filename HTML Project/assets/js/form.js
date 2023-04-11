function Validate()
{
    if (f1.firstname.value=="")
    {
        alert("Please Enter First Name ");
        f1.firstname.focus();
        return false;
    }
    if (isNaN(f1.firstname.value)==false)
    {
        alert("First Name Cannot be numeric");
        f1.firstname.focus();
        return false;
    }
    if (f1.lastname.value=="")
    {
        alert("Please Enter Last Name ");
        f1.lastname.focus();
        return false;
    }
    if (isNaN(f1.lastname.value)==false)
    {
        alert("Last Name Cannot be numeric");
        f1.lastname.focus();
        return false;
    }
    if (f1.country.value=="0")
    {
        alert("Please Select your Country");
        f1.country.focus();
        return false;
    }
    if (f1.mobile.value=="")
    {
        alert("Please Enter Mobile No ");
        f1.mobile.focus();
        return false;
    }
    if (isNaN(f1.mobile.value)==true)
    {
        alert("Mobile Number must be numeric");
        f1.mobile.focus();
        return false;
    }
    if (f1.mobile.value.length!=11)
    {
        alert("Mobile Number must be 11 Digit only. ");
        f1.mobile.focus();
        return false;
    }
    if (f1.email.value=="")
    {
        alert("Please Enter Email ");
        f1.email.focus();
        return false;
    }
    

    if (f1.subject.value=="")
    {
        alert("Please Enter Subject Name ");
        f1.subject.focus();
        return false;
    }
    if (f1.subject.value.length<5 ||f1.subject.value.length>300  )
    {
        alert("Subject must be more than 5 character or less than 300 character. ");
        f1.subject.focus();
        return false;
    }
       
}