LoadTheme();

window.onload = PageStartup;

function PageStartup()
{
	LoadElements();

	let themeDropdown = document.getElementById("themeDropdown");

	themeDropdown.value = GetThemePreference();
	themeDropdown.addEventListener("change", OnThemeChanged);

	window.addEventListener("mouseup", (e) => HandleClick(e));
}
