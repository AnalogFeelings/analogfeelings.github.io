window.onload = CheckCss;

function CheckCss()
{
    var cookieValue = GetCookie("theme");
    var finalCss = "https://unpkg.com/xp.css@0.3.0/dist/98.css";
    var finalImages = "../../sprites98.css";
    var finalTheme = "98;"

    switch (cookieValue)
    {
        case "xp":
            finalTheme = "xp";
            finalCss = "https://unpkg.com/xp.css";
            finalImages = "../../spritesXP.css";
            break;
        default:
            break;
    }

    SetCookie("theme", finalTheme, 365);

    var cssElement = document.createElement("link");
    cssElement.rel = "stylesheet";
    cssElement.href = finalCss;

    document.head.appendChild(cssElement);

    var iconCssElement = document.createElement("link");
    iconCssElement.rel = "stylesheet";
    iconCssElement.href = finalImages;

    document.head.appendChild(iconCssElement);
}

function ChangeTheme()
{
    var cookieValue = GetCookie("theme");
    switch (cookieValue)
    {
        case "xp":
            SetCookie("theme", "98", 365);
            break;
        case "98":
        default:
            SetCookie("theme", "xp", 365);
            break;
    }

    location.reload();
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

function SetCookie(cname, cvalue, exdays) 
{
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}