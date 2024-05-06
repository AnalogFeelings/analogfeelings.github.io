LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();

	await RetrieveBlogData(true, LoadPosts);

	let themeDropdown = document.getElementById("themeDropdown");

	themeDropdown.value = GetThemePreference();
	themeDropdown.addEventListener("change", OnThemeChanged);

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
