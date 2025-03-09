LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();
	LoadNavlink();
	await RetrieveBlogData(ArticleType.Knowledge, LoadArticles);

	window.addEventListener("mouseup", (e) => HandleClick(e));
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
