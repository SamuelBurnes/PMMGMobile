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
				const notsElem = buffer.children[1].firstChild;
				Array.from(notsElem.children).forEach(nots => {
					if(nots.outerHTML.includes("_6iTMJZ+xm-PbG+nWoPqh7g=="))
					{
						const notType = document.createElement("div");
						notType.classList.add("pmmg-nots");
						notType.textContent = "test";
						console.log(notType);
						//nots.children[1].insertBefore(notType, nots.children[1].children[0]);
					}
				});
			}
			else
			{
				console.log("NOTS Not Detected Negative");
			}
		} catch(e)
		{console.log(e)}
		return;
	}

}

const runner = new PMMGMobile();
runner.loop();