LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadBasics();

	await RetrieveBlogData(ArticleType.Knowledge, LoadArticles);
}

function LoadArticles(fileContent)
{
	let articleList = document.getElementById("articleList");

	for (const value of fileContent)
	{
		let createdArticle = GenerateArticle(value);

		articleList.appendChild(createdArticle);
	}
}
