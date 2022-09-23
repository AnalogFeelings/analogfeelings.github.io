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

	let titleText = document.getElementById("TitleText");

	let homeButton = document.getElementById("homeButton");
	let postsButton = document.getElementById("postsButton");
	let repositoriesButton = document.getElementById("repositoriesButton");
	let sitesButton = document.getElementById("sitesButton");
	let aboutButton = document.getElementById("aboutButton");

	let homePanel = document.getElementById("Home");
	let postsPanel = document.getElementById("Posts");
	let repositoriesPanel = document.getElementById("Repositories");
	let sitesPanel = document.getElementById("Sites");
	let aboutPanel = document.getElementById("About");

	let bannerText = document.getElementById("bannerText");
	let bannerSprite = document.getElementById("bannerSprite");

	switch (tab)
	{
		default:
		case "Home":
			document.title = "Home - Nora's Hideout";
			titleText.innerHTML = "Nora's Hideout: Nora's Personal Website - Home";

			bannerSprite.setAttribute("class", bannerSpriteDefaults + " homeSprite");
			bannerText.innerHTML = `<b>Welcome To My Website!</b>`;

			homeButton.setAttribute("class", "active");
			sitesButton.removeAttribute("class");
			repositoriesButton.removeAttribute("class");
			aboutButton.removeAttribute("class");
			postsButton.removeAttribute("class");

			homePanel.removeAttribute("hidden");
			postsPanel.setAttribute("hidden", true);
			repositoriesPanel.setAttribute("hidden", true);
			sitesPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "Posts":
			document.title = "Posts - Nora's Hideout";
			titleText.innerHTML = "Nora's Hideout: Nora's Personal Website - Posts";

			bannerSprite.setAttribute("class", bannerSpriteDefaults + " postsSprite");
			bannerText.innerHTML = `<b>My Blog Posts!</b>`;

			postsButton.setAttribute("class", "active");
			sitesButton.removeAttribute("class");
			repositoriesButton.removeAttribute("class");
			aboutButton.removeAttribute("class");
			homeButton.removeAttribute("class");

			postsPanel.removeAttribute("hidden");
			sitesPanel.setAttribute("hidden", true);
			homePanel.setAttribute("hidden", true);
			repositoriesPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "Projects":
		case "Repositories":
			document.title = "Repositories - Nora's Hideout";
			titleText.innerHTML = "Nora's Hideout: Nora's Personal Website - Repositories";

			bannerSprite.setAttribute("class", bannerSpriteDefaults + " repositoriesSprite");
			bannerText.innerHTML = `<b>My Open Source Repositories!</b>`;

			repositoriesButton.setAttribute("class", "active");
			sitesButton.removeAttribute("class");
			postsButton.removeAttribute("class");
			aboutButton.removeAttribute("class");
			homeButton.removeAttribute("class");

			repositoriesPanel.removeAttribute("hidden");
			sitesPanel.setAttribute("hidden", true);
			homePanel.setAttribute("hidden", true);
			postsPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "Sites":
			document.title = "Sites - Nora's Hideout";
			titleText.innerHTML = "Nora's Hideout: Nora's Personal Website - Sites";

			bannerSprite.setAttribute("class", bannerSpriteDefaults + " sitesSprite");
			bannerText.innerHTML = `<b>My Project Websites!</b>`;

			sitesButton.setAttribute("class", "active");
			repositoriesButton.removeAttribute("class");
			postsButton.removeAttribute("class");
			aboutButton.removeAttribute("class");
			homeButton.removeAttribute("class");

			sitesPanel.removeAttribute("hidden");
			repositoriesPanel.setAttribute("hidden", true);
			homePanel.setAttribute("hidden", true);
			postsPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "About":
			document.title = "About - Nora's Hideout";
			titleText.innerHTML = "Nora's Hideout: Nora's Personal Website - About";

			bannerSprite.setAttribute("class", bannerSpriteDefaults + " aboutSprite");
			bannerText.innerHTML = `<b>About My Website!</b>`;

			aboutButton.setAttribute("class", "active");
			sitesButton.removeAttribute("class");
			repositoriesButton.removeAttribute("class");
			postsButton.removeAttribute("class");
			homeButton.removeAttribute("class");

			aboutPanel.removeAttribute("hidden");
			sitesPanel.setAttribute("hidden", true);
			homePanel.setAttribute("hidden", true);
			postsPanel.setAttribute("hidden", true);
			repositoriesPanel.setAttribute("hidden", true);
			break;
	}
}