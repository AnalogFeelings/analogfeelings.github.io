LoadTheme();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadElements();
	LoadNavlink();

	window.addEventListener("mouseup", (e) => HandleClick(e));
}
