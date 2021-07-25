window.onload = function CheckUserAgent()
{
    console.log("Checking user agent...");
    var agent = navigator.userAgent.toLowerCase();
    if(agent.includes("android") || agent.includes("iphone"))
    {
        console.log("User is on mobile!");
        window.location.href = "mobile.html";
    }
    else window.location.href = "index.html";
}