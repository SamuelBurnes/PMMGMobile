console.log("Start");

const runner = new PMMGMobile();
runner.loop();

class PMMGMobile {
	loop(){
		console.log("Looped");

		window.setTimeout(() => this.loop(), 1000);
	}

}