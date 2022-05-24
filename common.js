function CheckCss()
{
    let cookieValue = GetCookie("theme");
    let finalCss = "/Libraries/XP.css/dist/98.css";
    let finalImages = "/sprites98.css";
    let finalTheme = "98";

    switch (cookieValue)
    {
        case "xp":
            finalTheme = "xp";
            finalCss = "/Libraries/XP.css/dist/XP.css";
            finalImages = "/spritesXP.css";
            break;
        default:
            break;
    }

    SetCookie("theme", finalTheme, 365);

    let cssElement = document.createElement("link");
    cssElement.rel = "stylesheet";
    cssElement.href = finalCss;

    document.head.appendChild(cssElement);

    let iconCssElement = document.createElement("link");
    iconCssElement.rel = "stylesheet";
    iconCssElement.href = finalImages;

    document.head.appendChild(iconCssElement);
}

function PromptCookies()
{
    let theyConsented = GetCookie("AcceptedCookies");
    if (theyConsented == "Yes" || theyConsented == "No") return;

    let cookiesOverlay = document.getElementById("cookiesOverlay");
    cookiesOverlay.removeAttribute("style");
}

function ConsentCookies()
{
    let cookiesOverlay = document.getElementById("cookiesOverlay");
    cookiesOverlay.style.display = "none";

    SetCookie("AcceptedCookies", "Yes", 60, true);

    let finalTheme = "98";
    let cookieValue = GetCookie("theme");

    switch (cookieValue)
    {
        case "xp":
            finalTheme = "xp";
            break;
        default:
            break;
    }

    SetCookie("theme", finalTheme, 365);
}

function RejectCookies()
{
    let cookiesOverlay = document.getElementById("cookiesOverlay");
    cookiesOverlay.style.display = "none";

    SetCookie("AcceptedCookies", "No", 60, true);
}

function ShowBox(boxId)
{
    let messageBox = document.getElementById(boxId);
    messageBox.removeAttribute("style");
}

function HideBox(boxId)
{
    let messageBox = document.getElementById(boxId);
    messageBox.style.display = "none";
}

function ChangeTab(name)
{
    window.location.hash = name;
}

function ChangeTheme()
{
    let theyConsented = GetCookie("AcceptedCookies");
    if (theyConsented == "No" || theyConsented == "")
    {
        ShowBox("themeWarningOverlay");
        return;
    }

    let cookieValue = GetCookie("theme");

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

function GetCookie(cookieName) 
{
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) 
    {
        let cookie = cookieArray[i];

        while (cookie.charAt(0) == ' ') 
        {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) 
        {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

function SetCookie(cookieName, cookieValue, expireIn, overrideCheck = false) 
{
    if(overrideCheck != true)
    {
        let theyConsented = GetCookie("AcceptedCookies");
        if (theyConsented == "No" || theyConsented == "") return;
    }

    const date = new Date();
    date.setTime(date.getTime() + (expireIn * 24 * 60 * 60 * 1000));

    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + "; path=/";
}