window.onload = PageStartup;

function PageStartup()
{
  CheckCss();
  CheckTabHash();
  GetPosts();
}

function GetPosts()
{
  var recentPosts = document.getElementById("recentPostsList");
  var postsList = document.getElementById("postsList");

  $.getJSON("/posts.json",
    function (data, textStatus, jqXHR)
    {
      LoadPosts(data);
    }
  );

  function LoadPosts(fileContent)
  {
    let i = 0;

    fileContent.forEach(function (currentValue)
    {
      //The post in the "Posts" tab.
      let createdPost = document.createElement("li");
      //The post you see in the "Recent Posts" part of the home tab.
      let createdPostRecent = document.createElement("li");
      //Bottom margin for each list element.
      let marginStyle = "margin-bottom: 2px;";

      createdPost.setAttribute("style", marginStyle);
      createdPostRecent.setAttribute("style", marginStyle);

      createdPost.innerHTML = `<b>${ currentValue.date }</b> <a href="${ currentValue.url }">${ currentValue.title }</a>`;
      createdPostRecent.innerHTML = `<b>${ currentValue.date }</b> <a href="${ currentValue.url }">${ currentValue.title }</a>`;

      postsList.appendChild(createdPost);
      if (i < 5) recentPosts.appendChild(createdPostRecent);

      i++;
    });
  }
}

//I hate JavaScript please do not make me write javascript ever again.
function CheckCss()
{
  let cookieValue = GetCookie("theme");
  let finalCss = "/Libraries/XP.css/dist/98.css";
  let finalImages = "/sprites98.css";
  let finalTheme = "98;"

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

function CheckTabHash()
{
  let tab = window.location.hash.substring(1);

  let homeButton = document.getElementById("homeTab");
  let postsButton = document.getElementById("postsTab");
  let projectsButton = document.getElementById("projectsTab");
  let aboutButton = document.getElementById("aboutTab");

  let homePanel = document.getElementById("tabHome");
  let postsPanel = document.getElementById("tabPosts");
  let projectsPanel = document.getElementById("tabProjects");
  let aboutPanel = document.getElementById("tabAbout");

  switch (tab)
  {
    case "tabPosts":
      postsButton.setAttribute("aria-selected", true);
      projectsButton.setAttribute("aria-selected", false);
      aboutButton.setAttribute("aria-selected", false);
      homeButton.setAttribute("aria-selected", false);

      postsPanel.removeAttribute("hidden");
      homePanel.setAttribute("hidden", true);
      projectsPanel.setAttribute("hidden", true);
      aboutPanel.setAttribute("hidden", true);
      break;
    case "tabProjects":
      projectsButton.setAttribute("aria-selected", true);
      postsButton.setAttribute("aria-selected", false);
      aboutButton.setAttribute("aria-selected", false);
      homeButton.setAttribute("aria-selected", false);

      projectsPanel.removeAttribute("hidden");
      homePanel.setAttribute("hidden", true);
      postsPanel.setAttribute("hidden", true);
      aboutPanel.setAttribute("hidden", true);
      break;
    case "tabAbout":
      aboutButton.setAttribute("aria-selected", true);
      projectsButton.setAttribute("aria-selected", false);
      postsButton.setAttribute("aria-selected", false);
      homeButton.setAttribute("aria-selected", false);

      aboutPanel.removeAttribute("hidden");
      homePanel.setAttribute("hidden", true);
      postsPanel.setAttribute("hidden", true);
      projectsPanel.setAttribute("hidden", true);
      break;
    default:
      break;
  }
}

function ChangeTheme()
{
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

function SetCookie(cookieName, cookieValue, expireIn) 
{
  const date = new Date();
  date.setTime(date.getTime() + (expireIn * 24 * 60 * 60 * 1000));

  let expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + "; path=/";
}