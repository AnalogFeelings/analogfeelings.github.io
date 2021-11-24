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
  const reader = new FileReader();
  var postsJson = new File([""], "./posts.json", { type: "text/plain" });

  reader.addEventListener('load', () =>
  {
    LoadPosts(reader.result);
  }, false);
  
  reader.readAsText(postsJson);

  function LoadPosts(fileContent)
  {
    console.log(fileContent);
    let parsedPosts = JSON.parse(fileContent);
    let i = 0;
    for(var post in parsedPosts)
    {
      let createdPost = document.createElement("li");
      createdPost.innerHTML = `<b>${post.date}</b> <a href="${post.url}">${post.title}</a>`;

      postsList.appendChild(createdPost);
      if(i < 5) recentPosts.appendChild(createdPost);
      i++;
    }
  }
}

//I hate JavaScript please do not make me write javascript ever again.
function CheckCss()
{
  var cookieValue = GetCookie("theme");
  var finalCss = "https://unpkg.com/xp.css@0.3.0/dist/98.css";
  var finalImages = "sprites98.css";
  var finalTheme = "98;"

  switch (cookieValue)
  {
    case "xp":
      finalTheme = "xp";
      finalCss = "https://unpkg.com/xp.css";
      finalImages = "spritesXP.css";
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

function CheckTabHash()
{
  var tab = window.location.hash.substring(1);
  console.log(tab);

  var homeButton = document.getElementById("homeTab");
  var postsButton = document.getElementById("postsTab");
  var projectsButton = document.getElementById("projectsTab");
  var aboutButton = document.getElementById("aboutTab");

  var homePanel = document.getElementById("tabHome");
  var postsPanel = document.getElementById("tabPosts");
  var projectsPanel = document.getElementById("tabProjects");
  var aboutPanel = document.getElementById("tabAbout");

  switch(tab)
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