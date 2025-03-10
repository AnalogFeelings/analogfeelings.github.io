LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadBasics();

	await RetrieveBlogData(ArticleType.Post, LoadPosts);
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
