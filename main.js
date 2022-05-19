console.log("PMMG Mobile Loaded");
// Words to search for, their types, and colors courtesy of Ray K
// Searches must be lower case
const Searchers = [
	["contract", "contract", "rgb(247, 166, 0)"],
	["produced", "produced", "#3fa2de"],
	["accepted", "advert", "#449c57"],
	["expired", "advert", "#449c57"],
	["trade", "trade", "#008000"],
	["order filled", "order", "#cc2929"],
	["arrived at", "arrival", "#b336b3"],
	["report", "report", "#00aa77"],
	["election", "election", "#8f52cc"],
	["governor", "governor", "#8f52cc"],
	["rules", "rules", "#8f52cc"],
	["cogc", "COGC", "#8f52cc"],
	["chamber of global commerce", "COGC", "#8f52cc"],
	["expert", "expert", "#ff8a00"],
	["our corporation", "corp", "#8f52cc"],
	["population infrastructure project", "POPI", "#8f52cc"],
	["apex", "update", "#00aa77"],
	["warehous", "war", "#cc2929"]
]
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
						const text = nots.children[1].children[0].textContent.toLowerCase();

						Searchers.forEach(search => {
							const match = text.match(new RegExp(search[0]));
							if(match != null)
							{
								notType.style.color = search[2];
								notType.textContent = search[1].toUpperCase();
								notType.style.display = "inline-block";
								notType.style.minWidth = "62px";
								notType.style.maxWidth = "62px";
								nots.children[1].insertBefore(notType, nots.children[1].children[0]);

								// Shorten Notifications
								var matches;
								var notText = nots.children[1].children[1].textContent;

								if(notText == null){return;}

								notText = notText.replace(/Chamber of Global Commerce/, "COGC");

								switch(search[0])
								{
									case "produced":
										notText = notText.replace(/at your base /, "");
										notText = notText.replace(/One /, "1 ");
										notText = notText.replace(/ have been/, "");
										notText = notText.replace(/ unit[s]? of/, "");
										matches = notText.match(/ ([A-z -]+) produced/);
										if(matches != null && matches[1] != undefined && Materials[matches[1]] != undefined)
										{
											notText = notText.replace(new RegExp(matches[1]), Materials[matches[1]][0]);
										}
										break;
									case "trade":
										matches = notText.match(/your ([A-z -]+) order/);
										if(matches != null && matches[1] != undefined && Materials[matches[1]] != undefined)
										{
											notText = notText.replace(new RegExp(matches[1]), Materials[matches[1]][0]);
										}
									case "order filled":
										notText = notText.replace(/ Commodity Exchange/, "");
										matches = notText.match(/([A-z -]+) order/);
										if(matches != null && matches[1] != undefined && Materials[matches[1]] != undefined)
										{
											notText = notText.replace(new RegExp(matches[1]), Materials[matches[1]][0]);
										}
										break;
									case "accepted":
										notText = notText.replace(/ the/, "");
										notText = notText.replace(/ local market/, "");
										break;
									case "contract":
										notText = notText.replace(/Your partner /, "");
										break;
									case "arrived at":
										notText = notText.replace(/its destination /, "");
										break;
									case "cogc":
									case "chamber of global commerce":
										notText = notText.replace(/ a new economic program/, "");
										break;
								}
								nots.children[1].children[1].textContent = notText;
							}
						});
						
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