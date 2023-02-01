function LoadElements()
{
    let includeElements = document.querySelectorAll('[data-include]');

    for(const element of includeElements)
    {
        let name = element.getAttribute("data-include");

        let file = 'Elements/' + name + '.html';

        $.get(file, function(html_content)
        {
            $(element).replaceWith(html_content);
        }, 'html');
    }
}

function OpenSidebar()
{
    let sideBar = document.getElementById("sideBar");
    let isShown = sideBar.classList.contains("shown");

    sideBar.classList.toggle("shown", !isShown);
}

function HandleClick(e)
{
    let sideBar = document.getElementById("sideBar");
    let sideBarButton = document.getElementById("sideBarButton");

    if (e.target !== sideBarButton && e.target !== sideBar)
    {
        sideBar.classList.toggle("shown", false);
    }
}

function RetrievePosts(callbackFunction)
{
    $.getJSON("/posts.json",
        function (data, textStatus, jqXHR)
        {
            callbackFunction(data);
        }
    );
}