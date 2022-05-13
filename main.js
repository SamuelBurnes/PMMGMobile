const tiles = document.querySelector("div.E4k-KlbccYxDX+4RCvyOIA==");
console.log("For Loop Start");
console.log(tiles);
Array.from(tiles).forEach(tile => {
	console.log(tile.firstChild.firstChild.children[1].textContent);
});