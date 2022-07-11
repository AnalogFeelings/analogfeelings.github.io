window.onload = PageStartup;
window.onhashchange = CheckTabHash;

function PageStartup()
{
	PromptCookies();
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
			let createdPostDesc = document.createElement("p");
			//The post you see in the "Recent Posts" part of the home tab.
			let createdPostRecent = document.createElement("li");
			let createdPostRecentDesc = document.createElement("p");
			//Bottom margin for each list element.
			let marginStyle = "margin-bottom: 2px;";
			let marginStyleDesc = "margin-left: 8px; margin-top: 3px; margin-bottom: 3px;";

			createdPost.setAttribute("style", marginStyle);
			createdPostDesc.setAttribute("style", marginStyleDesc);
			createdPostRecent.setAttribute("style", marginStyle);
			createdPostRecentDesc.setAttribute("style", marginStyleDesc);

			createdPost.innerHTML = `<b>${ currentValue.date }</b> <a href="${ currentValue.url }">${ currentValue.title }</a>`;
			createdPostDesc.innerHTML = currentValue.description;
			createdPostRecent.innerHTML = `<b>${ currentValue.date }</b> <a href="${ currentValue.url }">${ currentValue.title }</a>`;
			createdPostRecentDesc.innerHTML = currentValue.description;

			postsList.appendChild(createdPost);
			postsList.appendChild(createdPostDesc);

			if (i < 5)
			{
				recentPosts.appendChild(createdPostRecent);
				recentPosts.appendChild(createdPostRecentDesc);
			}

			i++;
		});
	}
}

//I hate JavaScript please do not make me write javascript ever again.
function CheckTabHash()
{
	let bannerSpriteDefaults = "headerSprite";
	let tab = window.location.hash.substring(1);

	let homeButton = document.getElementById("homeButton");
	let postsButton = document.getElementById("postsButton");
	let projectsButton = document.getElementById("projectsButton");
	let aboutButton = document.getElementById("aboutButton");

	let homePanel = document.getElementById("Home");
	let postsPanel = document.getElementById("Posts");
	let projectsPanel = document.getElementById("Projects");
	let aboutPanel = document.getElementById("About");

	let bannerText = document.getElementById("bannerText");
	let bannerSprite = document.getElementById("bannerSprite");

	switch (tab)
	{
		default:
		case "Home":
			bannerSprite.setAttribute("class", bannerSpriteDefaults + " homeSprite");
			bannerText.innerHTML = `<b>Welcome To My Website!</b>`;

			homeButton.setAttribute("class", "active");
			projectsButton.removeAttribute("class");
			aboutButton.removeAttribute("class");
			postsButton.removeAttribute("class");

			homePanel.removeAttribute("hidden");
			postsPanel.setAttribute("hidden", true);
			projectsPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "Posts":
			bannerSprite.setAttribute("class", bannerSpriteDefaults + " postsSprite");
			bannerText.innerHTML = `<b>My Blog Posts!</b>`;

			postsButton.setAttribute("class", "active");
			projectsButton.removeAttribute("class");
			aboutButton.removeAttribute("class");
			homeButton.removeAttribute("class");

			postsPanel.removeAttribute("hidden");
			homePanel.setAttribute("hidden", true);
			projectsPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "Projects":
			bannerSprite.setAttribute("class", bannerSpriteDefaults + " projectsSprite");
			bannerText.innerHTML = `<b>My Open Source Projects!</b>`;

			projectsButton.setAttribute("class", "active");
			postsButton.removeAttribute("class");
			aboutButton.removeAttribute("class");
			homeButton.removeAttribute("class");

			projectsPanel.removeAttribute("hidden");
			homePanel.setAttribute("hidden", true);
			postsPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "About":
			bannerSprite.setAttribute("class", bannerSpriteDefaults + " aboutSprite");
			bannerText.innerHTML = `<b>About My Website!</b>`;

			aboutButton.setAttribute("class", "active");
			projectsButton.removeAttribute("class");
			postsButton.removeAttribute("class");
			homeButton.removeAttribute("class");

			aboutPanel.removeAttribute("hidden");
			homePanel.setAttribute("hidden", true);
			postsPanel.setAttribute("hidden", true);
			projectsPanel.setAttribute("hidden", true);
			break;
	}
}