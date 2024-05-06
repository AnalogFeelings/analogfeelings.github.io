LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();

	await RetrieveBlogData(true, LoadPosts);
	await RetrieveBlogData(false, LoadArticles);

	let themeDropdown = document.getElementById("themeDropdown");

	themeDropdown.value = GetThemePreference();
	themeDropdown.addEventListener("change", OnThemeChanged);

	window.addEventListener("mouseup", (e) => HandleClick(e));
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
