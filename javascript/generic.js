LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();

	let themeDropdown = document.getElementById("themeDropdown");

	themeDropdown.value = GetThemePreference();
	themeDropdown.addEventListener("change", OnThemeChanged);

	window.addEventListener("mouseup", (e) => HandleClick(e));
}
