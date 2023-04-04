window.onload = PageStartup;

let currentPage = "";

function PageStartup()
{
	LoadElements();
	CheckCurrentPage();
	AddLinkEventHandlers();

	window.addEventListener("mouseup", (e) => HandleClick(e));
}

function SetUrlCurrentPage(page)
{
	const currentUrl = new URL(window.location.href);

	currentUrl.searchParams.set("page", page);

	let newUrl = currentUrl.toString();
	window.history.pushState({path: newUrl}, '', newUrl);
}

function ClearUrlCurrentPage()
{
	const currentUrl = new URL(window.location.href);

	currentUrl.searchParams.delete("page");

	let newUrl = currentUrl.toString();
	window.history.pushState({path: newUrl}, '', newUrl);
}

function GetUrlCurrentPage()
{
	const currentUrl = new URL(window.location.href);

	return currentUrl.searchParams.get("page");
}

function CheckCurrentPage()
{
	let page = GetUrlCurrentPage();
	if(page == null)
	{
		GoToPage("home");
		return;
	}

	GoToPage(page);
}

function GoToPage(page)
{
	if(currentPage === page) return;

	let file = "docs/" + page + ".html";
	let bodyContent = document.querySelector('.bodyContent');

	bodyContent.replaceChildren();

	$.ajax({
		async: false,
		url: file,
		success: function(html_content)
		{
			bodyContent.innerHTML = html_content;
		},
		dataType: 'html'
	});

	currentPage = page;

	if(page === "home")
	{
		ClearUrlCurrentPage();
		return;
	}
	SetUrlCurrentPage(page);
}

function OnAnchorClick(e)
{
	let docPage = e.target.getAttribute("data-ref");

	GoToPage(docPage);
}

function AddLinkEventHandlers()
{
	let docTree = document.getElementById("docsTree");
	let docNav = document.getElementById("docsNavigation");

	let docTreeAnchors = docTree.getElementsByTagName("a");
	let docNavAnchors = docNav.getElementsByTagName("a");

	// A cleaner solution may be to cast both to an array and concat them.
	for(const anchor of docTreeAnchors)
	{
		anchor.addEventListener("click", OnAnchorClick, false);
	}
	for(const anchor of docNavAnchors)
	{
		anchor.addEventListener("click", OnAnchorClick, false);
	}
}