window.onload = PageStartup;

function PageStartup()
{
	LoadElements();

	RetrieveBlogData(true, LoadPosts);

	window.addEventListener("mouseup", (e) => HandleClick(e));
}

function LoadPosts(fileContent)
{
	let postsList = document.getElementById("postsList");

	let i = 0;

	fileContent.forEach(function (currentValue)
	{
		//The post you see in the "Recent Posts" part of the home tab.
		let createdPost = document.createElement("li");
		let createdPostDesc = document.createElement("p");

		createdPost.classList.add("postHeader");
		createdPostDesc.classList.add("postDescription");

		createdPost.innerHTML = `<b>${ currentValue.date }</b> - <a href="${ currentValue.url }">${ currentValue.title }</a>`;
		createdPostDesc.innerHTML = currentValue.description;

		postsList.appendChild(createdPost);
		postsList.appendChild(createdPostDesc);

		i++;
	});
}
