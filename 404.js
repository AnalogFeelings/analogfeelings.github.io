window.onload = CheckCss;

function CheckCss()
{
    let theyConsented = GetCookie("AcceptedCookies");

    if(theyConsented == "Yes")
    {
        var cookieValue = GetCookie("theme");

        switch (cookieValue)
        {
            case "7":
            case "xp":
                document.getElementById("2000style").setAttribute("hidden", true);
                document.getElementById("XPstyle").removeAttribute("hidden");
                break;
            default:
            case "2000":
                break;
        }
    }
}