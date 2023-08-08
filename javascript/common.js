/**
 * Changes the theme in the DOM.
 * @param theme The selected theme.
 */
function ChangeDisplayTheme(theme)
{
    let validPreference = GetValidTheme(theme);

    document.documentElement.dataset.appliedMode = validPreference;
}

/**
 * Gets the user's preferred theme from the local storage.
 * @returns {string|string} The preferred theme, or "system" if none.
 */
function GetThemePreference()
{
    return localStorage.getItem("theme") || "system";
}

/**
 * Sets the user's preferred theme to local storage.
 * @param theme The selected theme.
 */
function SetThemePreference(theme)
{
    localStorage.setItem("theme", theme);

    ChangeDisplayTheme(theme);
}

function GetValidTheme(theme)
{
    let isSystem = matchMedia("(prefers-color-scheme: light)").matches;

    if(theme === "light")
        return "light";
    if(theme === "dark")
        return "dark";
    if(isSystem)
        return "light";

    return "dark";
}

/**
 * Handles theme selection.
 */
function OnThemeChanged()
{
    let dropdown = document.getElementById("themeDropdown");
    let value = dropdown.value;

    switch(value)
    {
        case "light":
        case "dark":
        case "system":
            SetThemePreference(value);
            break;
        default:
            SetThemePreference("system");
            break;
    }
}

/**
 * Loads the site theme.
 */
function LoadTheme()
{
    let preference = GetThemePreference();

    ChangeDisplayTheme(preference);
}

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
