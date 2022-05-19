console.log("Start");

class PMMGMobile {
	loop(){
		console.log("Looped");

		window.setTimeout(() => this.loop(), 1000);
	}

}

const runner = new PMMGMobile();
runner.loop();