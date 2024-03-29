LoadTheme();

window.onload = PageStartup;

function PageStartup()
{
	LoadElements();

	RetrieveBlogData(false, LoadArticles);

	let themeDropdown = document.getElementById("themeDropdown");

	themeDropdown.value = GetThemePreference();
	themeDropdown.addEventListener("change", OnThemeChanged);

	window.addEventListener("mouseup", (e) => HandleClick(e));
}

function LoadArticles(fileContent)
{
	let articleList = document.getElementById("articleList");

	let i = 0;

	fileContent.forEach(function (currentValue)
	{
		let createdArticle = document.createElement("li");
		let createdArticleDesc = document.createElement("p");

		createdArticle.classList.add("postHeader");
		createdArticleDesc.classList.add("postDescription");

		createdArticle.innerHTML = `<b>${ currentValue.date }</b> - <a href="${ currentValue.url }">${ currentValue.title }</a>`;
		createdArticleDesc.innerHTML = currentValue.description;

		articleList.appendChild(createdArticle);
		articleList.appendChild(createdArticleDesc);

		i++;
	});
}
