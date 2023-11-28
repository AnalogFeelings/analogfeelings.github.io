LoadTheme();

window.onload = PageStartup;

let currentPage = "";
let allTrees = null;
let treeObject = null;

function PageStartup()
{
	LoadElements();
	LoadTrees();
	CheckCurrentPage();
	AddEventHandlers();

	window.addEventListener("mouseup", (e) => HandleClick(e));
}

// Utility functions for URL queries.
function SetUrlParameter(name, value)
{
	const currentUrl = new URL(window.location.href);

	currentUrl.searchParams.set(name, value);

	let newUrl = currentUrl.toString();
	window.history.pushState({path: newUrl}, '', newUrl);
}

function ClearUrlParameter(name)
{
	const currentUrl = new URL(window.location.href);

	currentUrl.searchParams.delete(name);

	let newUrl = currentUrl.toString();
	window.history.pushState({path: newUrl}, '', newUrl);
}

function GetUrlParameter(name)
{
	const currentUrl = new URL(window.location.href);

	return currentUrl.searchParams.get(name);
}
// === === === === === === === === === === === === === === ===

// Loads the current page off the URL.
function CheckCurrentPage()
{
	let page = GetUrlParameter("page");

	if(page == null)
	{
		GoToPage("home");
	}
	else
	{
		GoToPage(page);
	}
}

// Fetches an anchor's page and adds it to the body content.
function GoToPage(page)
{
	if(currentPage === page)
		return;

	let file = "docs/" + page + ".html";
	let bodyContent = document.querySelector('.bodyContent');

	bodyContent.replaceChildren();

	// Not asynchronous to prevent any sort of race condition.
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
		ClearUrlParameter("page");
	}
	else
	{
		SetUrlParameter("page", page);
	}

	Prism.highlightAllUnder(bodyContent, true);
}

// Loads the state of the sidebar tree view from the session storage.
function LoadTrees()
{
	let docTree = document.getElementById("docsTree");
	let docSubTrees = docTree.getElementsByTagName("details");

	allTrees = docSubTrees;

	let tree = sessionStorage.getItem("tree");

	// No data? Populate it.
	if(tree == null)
	{
		treeObject = {};

		for(const subTree of docSubTrees)
		{
			// Do not store empty IDs.
			if(subTree.id === "")
				continue;

			treeObject[subTree.id] = subTree.open;
		}

		sessionStorage.setItem("tree", JSON.stringify(treeObject));
	}
	else
	{
		treeObject = JSON.parse(tree);

		let foundUnknown = false;
		for(const subTree of docSubTrees)
		{
			let value = treeObject[subTree.id];

			// Found a missing subtree, add it.
			if(value == null || value === false)
			{
				if(subTree.id === "")
					continue;

				treeObject[subTree.id] = subTree.open;
				foundUnknown = true;
			}

			subTree.open = value;
		}

		// Only set tree again if a missing subtree was found.
		if(foundUnknown)
			sessionStorage.setItem("tree", JSON.stringify(treeObject));
	}
}

// Save a tree's state.
function SaveTree(id, value)
{
	if(id === "")
		return;

	treeObject[id] = value;

	sessionStorage.setItem("tree", JSON.stringify(treeObject));
}

function OnAnchorClick(e)
{
	// Get the page from the data-ref attribute of the anchor.
	let docPage = e.target.getAttribute("data-ref");

	GoToPage(docPage);
}

function OnDetailsToggled(e)
{
	SaveTree(e.target.id, e.target.open);
}

function AddEventHandlers()
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
	for(const details of allTrees)
	{
		details.addEventListener("toggle", OnDetailsToggled, false);
	}
}
