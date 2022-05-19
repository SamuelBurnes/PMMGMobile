console.log("PMMG Mobile Loaded");

class PMMGMobile {
	loop(){
		const tiles = document.querySelectorAll("div._7Ge4LWt06zuiD6QZsE91+Q==");
		console.log(tiles);
		window.setTimeout(() => this.loop(), 1000);
	}

}

const runner = new PMMGMobile();
runner.loop();