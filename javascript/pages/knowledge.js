LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();
	await RetrieveBlogData(false, LoadArticles);

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
