window.onload = PageStartup;

function PageStartup()
{
	LoadElements();

	RetrievePosts(true, LoadPosts);
	RetrievePosts(false, LoadArticles);

	window.addEventListener("mouseup", (e) => HandleClick(e));
}

function LoadPosts(fileContent)
{
	let recentPosts = document.getElementById("recentPostsList");

	let i = 0;

	fileContent.forEach(function (currentValue)
	{
		//The post you see in the "Recent Posts" part of the home tab.
		let createdPostRecent = document.createElement("li");
		let createdPostRecentDesc = document.createElement("p");

		createdPostRecent.classList.add("postHeader");
		createdPostRecentDesc.classList.add("postDescription");

		createdPostRecent.innerHTML = `<b>${ currentValue.date }</b> - <a href="${ currentValue.url }">${ currentValue.title }</a>`;
		createdPostRecentDesc.innerHTML = currentValue.description;

		if (i < 8)
		{
			recentPosts.appendChild(createdPostRecent);
			recentPosts.appendChild(createdPostRecentDesc);
		}

		i++;
	});
}

function LoadArticles(fileContent)
{
	let recentArticles = document.getElementById("recentArticleList");

	let i = 0;

	fileContent.forEach(function (currentValue)
	{
		//The post you see in the "Recent Posts" part of the home tab.
		let createdArticleRecent = document.createElement("li");
		let createdArticleRecentDesc = document.createElement("p");

		createdArticleRecent.classList.add("postHeader");
		createdArticleRecentDesc.classList.add("postDescription");

		createdArticleRecent.innerHTML = `<b>${ currentValue.date }</b> - <a href="${ currentValue.url }">${ currentValue.title }</a>`;
		createdArticleRecentDesc.innerHTML = currentValue.description;

		if (i < 8)
		{
			recentArticles.appendChild(createdArticleRecent);
			recentArticles.appendChild(createdArticleRecentDesc);
		}

		i++;
	});
}
