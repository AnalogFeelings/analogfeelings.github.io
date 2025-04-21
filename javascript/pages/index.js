LoadTheme();
LoadWallpaper();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadBasics();

	await RetrieveBlogData(ArticleType.Post, LoadPosts);
	await RetrieveBlogData(ArticleType.Knowledge, LoadArticles);
}

function LoadPosts(fileContent)
{
	let recentPosts = document.getElementById("recentPostsList");
	let i = 0;

	for (const value of fileContent)
	{
		if(i >= 8)
			break;

		let createdPostRecent = GenerateArticle(value);

		recentPosts.appendChild(createdPostRecent);

		i++;
	}
}

function LoadArticles(fileContent)
{
	let recentArticles = document.getElementById("recentArticleList");
	let i = 0;

	for (const value of fileContent)
	{
		if(i >= 8)
			break;

		let createdArticleRecent = GenerateArticle(value);

		recentArticles.appendChild(createdArticleRecent);

		i++;
	}
}
