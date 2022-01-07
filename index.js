window.onload = PageStartup;
window.onhashchange = CheckTabHash;

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
function CheckTabHash()
{
	let tab = window.location.hash.substring(1);

	let homeButton = document.getElementById("homeTab");
	let postsButton = document.getElementById("postsTab");
	let projectsButton = document.getElementById("projectsTab");
	let aboutButton = document.getElementById("aboutTab");

	let homePanel = document.getElementById("Home");
	let postsPanel = document.getElementById("Posts");
	let projectsPanel = document.getElementById("Projects");
	let aboutPanel = document.getElementById("About");

	switch (tab)
	{
		case "Posts":
			postsButton.setAttribute("aria-selected", true);
			projectsButton.setAttribute("aria-selected", false);
			aboutButton.setAttribute("aria-selected", false);
			homeButton.setAttribute("aria-selected", false);

			postsPanel.removeAttribute("hidden");
			homePanel.setAttribute("hidden", true);
			projectsPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "Projects":
			projectsButton.setAttribute("aria-selected", true);
			postsButton.setAttribute("aria-selected", false);
			aboutButton.setAttribute("aria-selected", false);
			homeButton.setAttribute("aria-selected", false);

			projectsPanel.removeAttribute("hidden");
			homePanel.setAttribute("hidden", true);
			postsPanel.setAttribute("hidden", true);
			aboutPanel.setAttribute("hidden", true);
			break;
		case "About":
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