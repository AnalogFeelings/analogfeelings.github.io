window.onload = PageStartup;

function PageStartup()
{
	LoadElements();

	window.addEventListener("mouseup", (e) => HandleClick(e));
}
