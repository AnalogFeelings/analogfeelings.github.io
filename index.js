window.onload = PageStartup;

function PageStartup()
{
	LoadElements();

	RetrievePosts(LoadPosts);

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

		createdPostRecent.classList.add("recentPostHeader");
		createdPostRecentDesc.classList.add("recentPostDescription");

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