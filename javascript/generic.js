LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();

	window.addEventListener("mouseup", (e) => HandleClick(e));
}
