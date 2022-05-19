console.log("PMMG Mobile Loaded");

class PMMGMobile {
	loop(){
		this.nots_recolor();
		window.setTimeout(() => this.loop(), 1000);
	}
	
	cleanup(className)
	{
		Array.from(document.getElementsByClassName(className)).forEach(elem => {
			elem.parentNode.removeChild(elem);
		});
	}

	nots_recolor()
	{
		try
		{
			console.log("Start NOTS Processing");
			this.cleanup("pmmg-nots");
			const container = document.getElementById("container");
			const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent === "Buffer / NOTS")
			{
				console.log(buffer);
				const notsElem = buffer.children[1].firstChild;
				console.log(notsElem);
				Array.from(notsElem).forEach(nots => {
					if(nots.classList.includes("_6iTMJZ+xm-PbG+nWoPqh7g=="))
					{
						console.log("Processing Not");
						const notType = document.createElement("div");
						notType.classList.add("pmmg-nots");
						notType.textContent = "test";
						nots.children[1].insertBefore(notType, nots.children[1].children[0]);
					}
				});
			}
		} catch(e)
		{console.log("NOTS Not Detected")}
		return;
	}

}

const runner = new PMMGMobile();
runner.loop();