/**
 * Loads external HTML elements dynamically.
 */
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

/**
 * Opens the page sidebar.
 */
function OpenSidebar()
{
    let sideBar = document.getElementById("sideBar");
    let isShown = sideBar.classList.contains("shown");

    sideBar.classList.toggle("shown", !isShown);
}

/**
 * Hides the sidebar if clicked outside of its bounds.
 * Only for mobile.
 * @param {MouseEvent} e The mouse click event.
 */
function HandleClick(e)
{
    let sideBar = document.getElementById("sideBar");
    let sideBarButton = document.getElementById("sideBarButton");

    if (!sideBar.contains(e.target) && !sideBarButton.contains(e.target))
    {
        sideBar.classList.toggle("shown", false);
    }
}

const POSTS_PATH = "/resources/data/posts.json";
const KNOWLEDGE_PATH = "/resources/data/knowledge.json";

/**
 * Retrieves blog post data from a JSON file.
 * @param {boolean} isPosts If true, fetch content from the posts file, otherwise, knowledge.
 * @param {...receivePostsCallback} callbackFunctions The callbacks that will receive the data.
 */
function RetrieveBlogData(isPosts, ...callbackFunctions)
{
    $.getJSON(isPosts ? POSTS_PATH : KNOWLEDGE_PATH,
        function (data, textStatus, jqXHR)
        {
            callbackFunctions.forEach(x => x.apply(null, new Array(data)));
        }
    );
}

/**
 * Callback for receiving post data.
 * @callback receivePostsCallback
 * @param {object} data The JSON data.
 */
