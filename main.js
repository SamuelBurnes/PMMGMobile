console.log("PMMG Mobile Loaded");

class PMMGMobile {
	loop(){
		this.nots_recolor();
		window.setTimeout(() => this.loop(), 1000);
	}
	
	nots_recolor()
	{
		try
		{
			const container = document.getElementById("container");
			const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent === "Buffer / NOTS")
			{
				console.log("NOTS Detected");
			}
		} catch(e)
		{console.log("NOTS Not Detected")}
		return;
	}

}

const runner = new PMMGMobile();
runner.loop();