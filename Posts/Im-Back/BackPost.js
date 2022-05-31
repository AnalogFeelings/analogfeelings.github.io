window.onload = PageLoad;

function PageLoad()
{
	PromptCookies();
	CheckCss();
}

function GoToHomeTab(name)
{
	window.location = `/#${ name }`;
}