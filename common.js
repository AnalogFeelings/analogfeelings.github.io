function LoadElements()
{
    let includeElements = document.querySelectorAll('[data-include]');

    for(const element of includeElements)
    {
        let name = element.getAttribute("data-include");
        let file = '/elements/' + name + '.html';

        // Had to make sync to prevent race conditions.
        $.ajax({
            async: false,
            url: file,
            success: function(html_content)
            {
                $(element).replaceWith(html_content);
            },
            dataType: 'html'
        });
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

    if (!sideBar.contains(e.target) && !sideBarButton.contains(e.target))
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