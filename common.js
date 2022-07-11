function CheckCss()
{
    let finalCss = "/Libraries/XP-EX.css/dist/2000.css";
    let finalImages = "/sprites2000.css";
    let finalTheme = "2000";
    let themeIndex = 0;

    let theyConsented = GetCookie("AcceptedCookies");

    if (theyConsented == "Yes")
    {
        let cookieValue = GetCookie("theme");

        switch (cookieValue)
        {
            case "xp":
                finalTheme = "xp";
                finalCss = "/Libraries/XP-EX.css/dist/XP.css";
                finalImages = "/spritesXP.css";
                themeIndex = 1;

                break;
            case "7":
                finalTheme = "7";
                finalCss = "/Libraries/XP-EX.css/dist/7.css";
                finalImages = "/sprites7.css";
                themeIndex = 2;

                break;
            default:
                break;
        }

        SetCookie("theme", finalTheme, 365);
    }

    let cssElement = document.createElement("link");
    cssElement.rel = "stylesheet";
    cssElement.href = finalCss;

    document.head.appendChild(cssElement);

    let iconCssElement = document.createElement("link");
    iconCssElement.rel = "stylesheet";
    iconCssElement.href = finalImages;

    document.head.appendChild(iconCssElement);

    let themeDropdown = document.getElementById("themeDropdown");
    themeDropdown.selectedIndex = themeIndex;
}

function PromptCookies()
{
    let theyConsented = GetCookie("AcceptedCookies");
    if (theyConsented == "Yes" || theyConsented == "No") return;

    let cookiesOverlay = document.getElementById("cookiesOverlay");
    cookiesOverlay.removeAttribute("style");
}

function ConsentCookies(fromButton = false)
{
    let cookiesOverlay = document.getElementById("cookiesOverlay");
    cookiesOverlay.style.display = "none";

    SetCookie("AcceptedCookies", "Yes", 60, true);

    let finalTheme = "2000";
    let cookieValue = GetCookie("theme");

    switch (cookieValue)
    {
        case "xp":
            finalTheme = "xp";
            break;
        case "7":
            finalTheme = "7";
            break;
        default:
            break;
    }

    SetCookie("theme", finalTheme, 365);

    if(fromButton) ShowBox("cookieSuccessOverlay");
}

function RejectCookies(fromButton = false)
{
    let cookiesOverlay = document.getElementById("cookiesOverlay");
    cookiesOverlay.style.display = "none";

    SetCookie("AcceptedCookies", "No", 60, true);

    if(fromButton) ShowBox("cookieSuccessOverlay");
}

function ShowBox(boxId)
{
    let messageBox = document.getElementById(boxId);
    messageBox.removeAttribute("hidden");
}

function HideBox(boxId)
{
    let messageBox = document.getElementById(boxId);
    messageBox.setAttribute("hidden", true);
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

    let dropdown = document.getElementById("themeDropdown");

    switch (dropdown.selectedIndex)
    {
        case 0:
            SetCookie("theme", "2000", 365);
            break;
        case 1:
            SetCookie("theme", "xp", 365);
            break;
        case 2:
            SetCookie("theme", "7", 365);
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