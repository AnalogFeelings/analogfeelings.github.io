const THEME_DROPDOWN_ID = "themeDropdown";
const WALLPAPER_DROPDOWN_ID = "wallpaperDropdown";
const NAVLINK_DROPDOWN_ID = "navlinkDropdown";

let themeDropdown;
let wallpaperDropdown;
let navlinkDropdown;

LoadTheme();
LoadWallpaper();

window.onload = PageStartup;

async function PageStartup()
{
	await LoadBasics();

	themeDropdown = document.getElementById(THEME_DROPDOWN_ID);
	wallpaperDropdown = document.getElementById(WALLPAPER_DROPDOWN_ID);
	navlinkDropdown = document.getElementById(NAVLINK_DROPDOWN_ID);

	themeDropdown.value = GetThemePreference();
	themeDropdown.addEventListener("change", OnThemeChanged);

	wallpaperDropdown.value = GetWallpaperPreference();
	wallpaperDropdown.addEventListener("change", OnWallpaperChanged);

	navlinkDropdown.value = GetNavlinkPreference();
	navlinkDropdown.addEventListener("change", OnNavlinkChanged);
}

/**
 * Handles theme selection.
 */
function OnThemeChanged()
{
	let value = themeDropdown.value;

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
 * Handles wallpaper selection.
 */
function OnWallpaperChanged()
{
	let value = wallpaperDropdown.value;

	switch (value)
	{
		case ANALOG_WALLPAPER:
		case INDIGO_WALLPAPER:
			SetWallpaperPreference(value);
			break;
		default:
			SetWallpaperPreference(ANALOG_WALLPAPER);
			break;
	}
}

/**
 * Handles navlink visibility selection.
 */
function OnNavlinkChanged()
{
	let value = navlinkDropdown.value;

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
