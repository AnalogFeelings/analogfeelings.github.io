LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();
	LoadNavlink();
	await RetrieveBlogData(ArticleType.Post, LoadPosts);

	window.addEventListener("mouseup", (e) => HandleClick(e));
}

function LoadPosts(fileContent)
{
	let postList = document.getElementById("postsList");

	for (const value of fileContent)
	{
		let createdArticle = GenerateArticle(value);

		postList.appendChild(createdArticle);
	}
}
