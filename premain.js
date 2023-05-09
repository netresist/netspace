// ==============================================
// Useful Variables (For Settings)
// ==============================================
let timePeriodEnabled = true;
let MilitaryTime = false;
let timeEnabled = true;

let dateEnabled = true;

let weatherEnabled = true;
let weatherIconEnabled = true;
let useFahrenheit = true;

let useDefaultTheme = false;

let useNewTab = false;

// ==============================================
// Cookie Functions
// ==============================================
function setCookie(cname, cvalue, exmins) {
	const d = new Date();
	d.setTime(d.getTime() + exmins * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}



// ==============================================

const root = document.querySelector(":root");



// Sets default command
if (localStorage.getItem("currentSearchType") == null) {
	localStorage.setItem("currentSearchType", "google");
}

if (localStorage.getItem("bookmarks") == null) {
	let defaultBookmarks = {
		General: {
			ChatGPT: "https://chat.openai.com/",
			Gdrive: "https://drive.google.com",
			Calendar: "https://calendar.google.com",
		},
		Resources: {
			Programming: "https://www.codecademy.com/resources/docs",
			Math: "https://docs.google.com/document/d/1rtokzhpvkUPnymudl_ZVmfAA7H33VIyLQUpujNGwrTo/",
			Physics: "https://sites.google.com/site/physicsnorthwest/physics-online-resources",
			Astronomy: "https://sites.google.com/site/aancsite/resource-guide/miscellaneous",
			English: "https://www.ef.com/wwen/english-resources/",
		},
		Coding: {
			"Stack Overflow": "https://stackoverflow.com",
			GitHub: "https://github.com",
			Coderbyte: "https://coderbyte.com/",
			IDE: "https://playcode.io/",
			GitHub: "https://coding.tools/",
		},
		Tools: {
			Calculator: "https://www.rapidtables.com/calc/math/calculator.html",
			Calendar: "https://www.rapidtables.com/tools/calendar.html",
			"Text to Speech": "https://www.rapidtables.com/tools/text-to-speech.html",
		},
	};

	localStorage.setItem("bookmarks", JSON.stringify(defaultBookmarks));
}

root.style.setProperty(
	"--background-image",
	'url("' + localStorage.getItem("background-image") + '")'
);
root.style.setProperty(
	"--primary-background-color",
	localStorage.getItem("primary-background-color")
);
root.style.setProperty(
	"--primary-foreground-color",
	localStorage.getItem("primary-foreground-color")
);
root.style.setProperty(
	"--primary-invert-value",
	localStorage.getItem("primary-invert-value")
);
root.style.setProperty(
	"--secondary-background-color",
	localStorage.getItem("secondary-background-color")
);
root.style.setProperty(
	"--secondary-foreground-color",
	localStorage.getItem("secondary-foreground-color")
);
root.style.setProperty(
	"--secondary-invert-value",
	localStorage.getItem("secondary-invert-value")
);
root.style.setProperty(
	"--suggestion-color",
	localStorage.getItem("suggestion-color")
);

root.style.setProperty(
	"--input-border-color",
	localStorage.getItem("input-border-color")
)

