window.onload = CheckCss;

function CheckCss()
{
    var cookieValue = GetCookie("theme");

    switch(cookieValue)
    {
        case "xp":
            document.getElementById("98style").setAttribute("style", "visibility: hidden;");
            document.getElementById("XPstyle").removeAttribute("style");
            break;
        default:
        case "98":
            break;  
    }
}

function GetCookie(cname) 
{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}