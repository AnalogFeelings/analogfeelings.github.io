function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CheckCss()
{
    let finalCss = "/Libraries/XP.css/dist/2000.css";
    let finalImages = "/sprites2000.css";
    let finalTheme = "2000";
    let theyConsented = GetCookie("AcceptedCookies");

    if (theyConsented == "Yes")
    {
        let cookieValue = GetCookie("theme");

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
    }

    let cssElement = document.createElement("link");
    cssElement.rel = "stylesheet";
    cssElement.href = finalCss;

    document.head.appendChild(cssElement);

    let iconCssElement = document.createElement("link");
    iconCssElement.rel = "stylesheet";
    iconCssElement.href = finalImages;

    document.head.appendChild(iconCssElement);

    let bodyElement = document.body;

    switch(getRandomInt(1, 13))
    {
        case 1:
            let agenderFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #000000 0%, #000000 14.29%, #bababa 14.29%, #bababa 28.58%, #ffffff 28.58%, #ffffff 42.87%, " +
                "#99f47c 42.87%, #99f47c 57.16%, #ffffff 57.16%, #ffffff 71.45%, #bababa 71.45%, #bababa 85.74%, #000000 85.74%, #000000 100%)";

            bodyElement.setAttribute("style", agenderFlagStyle);
            break;
        case 2:
            let aromanticFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #00a636 0%, #00a636 20%, #92d474 20%, #92d474 40%, #ffffff 40%, #ffffff 60%, " +
                "#aaaaaa 60%, #aaaaaa 80%, #000000 80%, #000000 100%)";

            bodyElement.setAttribute("style", aromanticFlagStyle);
            break;
        case 3:
            let asexualFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #000000 0%, #000000 25%, #a4a4a4 25%, #a4a4a4 50%, #ffffff 50%, #ffffff 75%, " +
                "#960083 75%, #960083 100%)";

            bodyElement.setAttribute("style", asexualFlagStyle);
            break;
        case 4:
            let bisexualFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #f90073 0%, #f90073 40%, #b14e9a 40%, #b14e9a 60%, #0035ac 60%, #0035ac 100%)";

            bodyElement.setAttribute("style", bisexualFlagStyle);
            break;
        case 5:
            let lgbtqFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #ff0000 0%, #ff0000 16.66%, #ff8d00 16.66%, #ff8d00 33.32%, #ffee00 33.32%, #ffee00 49.98%, " +
                    "#008113 49.98%, #008113 66.64%, #004cff 66.64%, #004cff 83.3%, #89018b 83.3%, #89018b 100%)";

            bodyElement.setAttribute("style", lgbtqFlagStyle);
            break;
        case 6:
            let gayMenFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #00a6d8 0%, #00a6d8 20%, #00baff 20%, #00baff 40%, #ffffff 40%, #ffffff 60%, " +
                    "#00d48c 60%, #00d48c 80%, #00a436 80%, #00a436 100%)";

            bodyElement.setAttribute("style", gayMenFlagStyle);
            break;
        case 7:
            let genderfluidFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #ff76a5 0%, #ff76a5 20%, #ffffff 20%, #ffffff 40%, #de11db 40%, #de11db 60%, " +
                "#000000 60%, #000000 80%, #2a3cc2 80%, #2a3cc2 100%)";

            bodyElement.setAttribute("style", genderfluidFlagStyle);
            break;
        case 8:
            let genderqueerFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #c77fe0 0%, #c77fe0 33.33%, #ffffff 33.33%, #ffffff 66.66%, #0a820c 66.66%, #0a820c 100%)";

            bodyElement.setAttribute("style", genderqueerFlagStyle);
            break;
        case 9:
            let lesbianFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #f72900 0%, #f72900 20%, #ff9b50 20%, #ff9b50 40%, #ffffff 40%, #ffffff 60%, " +
                "#f062a8 60%, #f062a8 80%, #bf0064 80%, #bf0064 100%)";

            bodyElement.setAttribute("style", lesbianFlagStyle);
            break;
        case 10:
            let nonbinaryFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #fff400 0%, #fff400 25%, #fcfcfc 25%, #fcfcfc 50%, #b058d5 50%, #b058d5 75%, " +
                "#282828 75%, #282828 100%)";

            bodyElement.setAttribute("style", nonbinaryFlagStyle);
            break;
        case 11:
            let pansexualFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #ff1b90 0%, #ff1b90 33.33%, #ffd900 33.33%, #ffd900 66.66%, #00b2ff 66.66%, #00b2ff 100%)";

            bodyElement.setAttribute("style", pansexualFlagStyle);
            break;
        case 12:
            let polysexualFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #ff16be 0%, #ff16be 33.33%, #00d661 33.33%, #00d661 66.66%, #0093f9 66.66%, #0093f9 100%)";

            bodyElement.setAttribute("style", polysexualFlagStyle);
            break;
        case 13:
            let transgenderFlagStyle = "height: 100%; background-repeat: no-repeat; background-attachment: fixed; margin: 0;" +
                "background: linear-gradient(180deg, #00cffc 0%, #00cffc 20%, #ffabba 20%, #ffabba 40%, #ffffff 40%, #ffffff 60%, " +
                "#ffabba 60%, #ffabba 80%, #00cffc 80%, #00cffc 100%)";

            bodyElement.setAttribute("style", transgenderFlagStyle);
            break;
    }
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

    let cookieValue = GetCookie("theme");

    switch (cookieValue)
    {
        case "xp":
            SetCookie("theme", "2000", 365);
            break;
        case "2000":
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