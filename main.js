const tiles = document.querySelectorAll("div[class~='_7Ge4LWt06zuiD6QZsE91+Q==']");
(Array.from(tiles)).forEach(tile => {
	console.log(tile.firstChild.firstChild.children[1].textContent);
});