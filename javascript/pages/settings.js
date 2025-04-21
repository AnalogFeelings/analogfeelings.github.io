const THEME_DROPDOWN_ID = "themeDropdown";
const NAVLINK_DROPDOWN_ID = "navlinkDropdown";

LoadTheme();
LoadWallpaper();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadBasics();

	let themeDropdown = document.getElementById(THEME_DROPDOWN_ID);
	let navlinkDropdown = document.getElementById(NAVLINK_DROPDOWN_ID);

	themeDropdown.value = GetThemePreference();
	themeDropdown.addEventListener("change", OnThemeChanged);

	navlinkDropdown.value = GetNavlinkPreference();
	navlinkDropdown.addEventListener("change", OnNavlinkChanged);
}

/**
 * Handles theme selection.
 */
function OnThemeChanged()
{
	let dropdown = document.getElementById(THEME_DROPDOWN_ID);
	let value = dropdown.value;

	switch (value)
	{
		case LIGHT_THEME:
		case DARK_THEME:
		case SYSTEM_THEME:
			SetThemePreference(value);
			break;
		default:
			SetThemePreference(SYSTEM_THEME);
			break;
	}
}

/**
 * Handles navlink visibility selection.
 */
function OnNavlinkChanged()
{
	let dropdown = document.getElementById(NAVLINK_DROPDOWN_ID);
	let value = dropdown.value;

	switch(value)
	{
		case NAVLINK_ENABLED:
		case NAVLINK_DISABLED:
				SetNavlinkPreference(value);
				break;
		default:
			SetNavlinkPreference(NAVLINK_ENABLED);
			break;
	}
}
