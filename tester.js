console.log("PMMG Mobile Loaded");
const CurrencySymbols = {
	"CIS": "₡",
	"AIC": "₳",
	"NCC": "₦",
	"ICA": "ǂ",
	"ECD": "€",
}
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

const Materials = {
	"Antenna Array": ["AAR",0.78,0.5],
	"Advanced Bulkhead": ["ABH",0.6,0.9],
	"Automated Cooling System": ["ACS",0.3,0.2],
	"Advanced Deck Elements": ["ADE",0.4,1.5],
	"Auto-Doc": ["ADR",0.1,0.1],
	"Audio Distribution System": ["ADS",0.7,2],
	"Aerostat Foundation": ["AEF",2,5],
	"Advanced STL Engine": ["AEN",14,7],
	"Advanced Fuel Pump": ["AFP",1,0.25],
	"Advanced Fuel Rod": ["AFR",0.4,0.1],
	"Advanced High-G Seats": ["AGS",30,5],
	"Advanced Hull Plate": ["AHP",20,10],
	"Air Scrubber": ["AIR",1.7,3],
	"Aluminium": ["AL",2.7,1],
	"Stellar Pale Ale": ["ALE",0.1,0.1],
	"Protein-Rich Algae": ["ALG",0.7,1],
	"Aluminium Ore": ["ALO",1.35,1],
	"Ammonia": ["AMM",0.86,1],
	"Advanced Nozzle": ["ANZ",6,3],
	"Advanced Thermal Protection Tile": ["APT",0.03,0.3],
	"Argon": ["AR",1.784,1],
	"Advanced Anti-rad Plate": ["ARP",0.04,0.2],
	"Advanced Structural Elements": ["ASE",0.5,0.6],
	"Alpha-Stabilized Titanium": ["AST",4.98,1],
	"Advanced Transparent Aperture": ["ATA",0.3,0.4],
	"Advanced Thermal Protection Material": ["ATP",2.9,1],
	"Gold": ["AU",19.32,1],
	"Gold Ore": ["AUO",3.86,1],
	"Active Water Filter": ["AWF",0.8,1.2],
	"Advanced Whipple Shielding": ["AWH",0.12,1],
	"Helpful Bacteria": ["BAC",0.15,0.15],
	"Basic AI Framework": ["BAI",0.001,0.01],
	"Basic Bulkhead": ["BBH",0.5,0.8],
	"Budget Connectors": ["BCO",0.005,0.002],
	"Basic Deck Elements": ["BDE",0.1,1.5],
	"Beryllium": ["BE",1.84,1],
	"Protein-Rich Beans": ["BEA",0.8,1],
	"Beryl Crystals": ["BER",1.92,1],
	"Basic Fuel Pump": ["BFP",0.8,0.2],
	"Basic Fuel Rod": ["BFR",0.3,0.1],
	"Shielded Connectors": ["BGC",0.01,0.002],
	"Blue Gold": ["BGO",19.32,1],
	"Basic High-G Seats": ["BGS",20,3],
	"Basic Hull Plate": ["BHP",10,10],
	"Full-Body Interaction Device": ["BID",0.05,0.05],
	"Breathable Liquid": ["BL",1.12,1],
	"Desaturation Agent": ["BLE",0.5,0.5],
	"Basic Mainframe": ["BMF",0.8,1.2],
	"Bandages": ["BND",0.001,0.005],
	"Boron Crystals": ["BOR",1.8,1],
	"Borosilicate": ["BOS",1.5,1],
	"Basic Thermal Protection Tile": ["BPT",0.02,0.3],
	"Command Bridge MK1": ["BR1",180,300],
	"Command Bridge MK2": ["BR2",280,400],
	"Bioreactive Minerals": ["BRM",2.5,1],
	"Bronze": ["BRO",8.73,1],
	"Basic Anti-rad Plate": ["BRP",0.03,0.2],
	"Short-distance Command Bridge": ["BRS",150,200],
	"Body Scanner": ["BSC",0.1,0.1],
	"Basic Structural Elements": ["BSE",0.3,0.5],
	"Basic Transparent Aperture": ["BTA",0.3,0.4],
	"Bacterial Tungsten Solution": ["BTS",1.05,1],
	"Basic Whipple Shielding": ["BWH",0.1,1],
	"Basic Workstation": ["BWS",0.05,0.1],
	"Carbon": ["C",2.25,1],
	"Calcium": ["CA",1.54,1],
	"Caffeinated Beans": ["CAF",0.86,1],
	"Electric Field Capacitor": ["CAP",0.001,0.001],
	"Large Capacitor Bank": ["CBL",5.4,2.4],
	"Medium Capacitor Bank": ["CBM",3.6,1.6],
	"Small Capacitor Bank": ["CBS",1.8,0.8],
	"Climate Controller": ["CC",0.5,1],
	"Crowd Control Drone": ["CCD",0.3,0.05],
	"Capacitive Display": ["CD",0.004,0.002],
	"Ceramic Fabric": ["CF",2.82,1],
	"Combustion Chamber": ["CHA",1.2,0.7],
	"Chlorine": ["CL",3.2,1],
	"Caliche Rock": ["CLI",2.42,1],
	"": ["CMK",4.56,33.2],
	"Caffeinated Infusion": ["COF",0.1,0.1],
	"Communication System": ["COM",0.5,1.5],
	"Cotton Fabric": ["COT",0.77,1],
	"Crew Quarters (Large)": ["CQL",75,150],
	"Crew Quarters (Medium)": ["CQM",50,100],
	"Crew Quarters (Small)": ["CQS",25,50],
	"Crew Quarters (Tiny)": ["CQT",12.5,25],
	"Cryogenic Unit": ["CRU",2.2,2],
	"Cryogenic Stabilizer": ["CST",1.14,1],
	"Ceramic-Tungsten Fabric": ["CTF",4.32,1],
	"Copper": ["CU",8.92,1],
	"Copper Ore": ["CUO",4.01,1],
	"Data Analyzer": ["DA",0.001,0.01],
	"Drone Chassis": ["DCH",0.2,0.03],
	"Durable Casing L": ["DCL",0.08,0.8],
	"Durable Casing M": ["DCM",0.04,0.4],
	"Durable Casing S": ["DCS",0.01,0.1],
	"Distributed Database": ["DD",0.001,0.01],
	"DDT Plant Agent": ["DDT",0.11,0.1],
	"Decorative Elements": ["DEC",0.5,2],
	"Information Display": ["DIS",0.02,0.02],
	"Drone Operations Unit": ["DOU",5,4],
	"Drone Frame": ["DRF",0.1,0.02],
	"Data Visualizer": ["DV",0.001,0.01],
	"Drinking Water": ["DW",0.1,0.1],
	"Entertainment Data Core": ["EDC",0.001,0.01],
	"Enriched Einsteinium": ["EES",9.2,1],
	"Standard STL Engine": ["ENG",8,4],
	"Epoxy Resin": ["EPO",0.04,0.02],
	"Einsteinium": ["ES",0.88,0.1],
	"Enriched Technetium": ["ETC",4.1,1],
	"Exoskeleton Work Suit": ["EXO",0.1,0.05],
	"Fluorine": ["F",1.696,1],
	"Ferrominium": ["FAL",3.22,1],
	"Active Cooling Device": ["FAN",0.1,0.1],
	"Flow Control Device": ["FC",0.5,0.25],
	"Iron": ["FE",7.874,1],
	"Iron Ore": ["FEO",5.9,1],
	"Ferro-Titanium": ["FET",6.85,1],
	"FTL Fuel": ["FF",0.05,0.01],
	"FTL Field Controller": ["FFC",50,16],
	"Flavoured Insta-Meal": ["FIM",0.55,0.5],
	"Fission Reactor": ["FIR",7,4.9],
	"Floating Tank": ["FLO",1,2],
	"Fluid Piping": ["FLP",0.3,2],
	"Flux": ["FLX",0.25,0.1],
	"All-Purpose Fodder": ["FOD",1.2,1],
	"Fuel-saving STL Engine": ["FSE",6,3],
	"Entertainment Unit": ["FUN",5,4],
	"Galerite Rock": ["GAL",2.51,1],
	"Cylindrical Gas Container": ["GC",0.05,0.1],
	"Glass Combustion Chamber": ["GCH",1,0.6],
	"Glass-based STL Engine": ["GEN",5,3],
	"Einsteinium-Infused Gin": ["GIN",0.1,0.1],
	"Glass": ["GL",0.016,0.01],
	"Glass Nozzle": ["GNZ",1.5,1],
	"Wine-Quality Grapes": ["GRA",1.1,1],
	"High-Carb Grains": ["GRN",0.9,1],
	"Gas Vent": ["GV",0.25,0.15],
	"Hydrogen": ["H",0.07,1],
	"Water": ["H2O",0.2,0.2],
	"Habitat Unit": ["HAB",10,8],
	"Halite Crystals": ["HAL",2.17,1],
	"High-Capacity Connectors": ["HCC",0.01,0.002],
	"Hydrocarbon Plants": ["HCP",0.8,1],
	"Holographic Display": ["HD",0.05,2],
	"Helium": ["HE",0.145,1],
	"Helium-3 Isotope": ["HE3",0.145,1],
	"Spicy Herbs": ["HER",0.4,1],
	"Heliotrope Extract": ["HEX",1.1,1],
	"Hardened Hull Plate": ["HHP",15,10],
	"HazMat Work Suit": ["HMS",0.05,0.05],
	"Hyperthrust Nozzle": ["HNZ",6,12],
	"Holographic Glasses": ["HOG",0.01,0.01],
	"Flowery Hops": ["HOP",0.35,1],
	"Handheld Personal Console": ["HPC",0.003,0.003],
	"High-power FTL Reactor": ["HPR",18,15],
	"Hardened Structural Elements": ["HSE",3.1,0.7],
	"Smart Space Suit": ["HSS",0.05,0.05],
	"Hyperthrust STL Engine": ["HTE",20,10],
	"Hyper-power Reactor": ["HYR",35,25],
	"Iodine": ["I",4.93,1],
	"Information Data Core": ["IDC",0.001,0.01],
	"Information Management System": ["IMM",0.001,0.01],
	"Indigo Colorant": ["IND",0.21,0.2],
	"InsuFoam": ["INS",0.06,0.1],
	"Sedative Substance": ["JUI",1.2,1],
	"Kombucha": ["KOM",0.1,0.1],
	"Kevlar Fabric": ["KV",1.65,1],
	"Lightweight Bulkhead": ["LBH",0.2,0.6],
	"AI-Assisted Lab Coat": ["LC",0.05,0.05],
	"Large Cargo Bay Kit": ["LCB",200,200],
	"Liquid Crystals": ["LCR",0.15,0.1],
	"Local Database": ["LD",0.001,0.01],
	"Lightweight Deck Elements": ["LDE",0.1,1.2],
	"Laser Diodes": ["LDI",0.001,0.001],
	"Liquid Einsteinium": ["LES",8.84,1],
	"Large FTL Emitter": ["LFE",0.4,1.6],
	"Large FTL Fuel Tank Kit": ["LFL",60,10],
	"Low-heat Fuel Pump": ["LFP",0.5,0.1],
	"Lightweight Hull Plate": ["LHP",5,10],
	"Lithium": ["LI",0.55,1],
	"Lithium Ore": ["LIO",2.75,1],
	"Life Support System": ["LIS",5.6,7],
	"Neon Lighting System": ["LIT",1,2],
	"Logistics System": ["LOG",0.5,1.5],
	"Lightweight Structural Elements": ["LSE",0.3,1.2],
	"Large STL Fuel Tank Kit": ["LSL",125,100],
	"Limestone": ["LST",2.73,1],
	"Lightweight Transparent Aperture": ["LTA",0.3,0.5],
	"Laboratory Unit": ["LU",8,6],
	"Magnetite": ["MAG",5.15,1],
	"High-Carb Maize": ["MAI",1.3,1],
	"Motherboard": ["MB",0.075,0.075],
	"Medium Cargo Bay Kit": ["MCB",100,100],
	"Mineral Construction Granulate": ["MCG",0.24,0.1],
	"Quality Meat Meal": ["MEA",0.6,0.5],
	"Basic Medical Kit": ["MED",0.3,0.1],
	"Medium FTL Emitter": ["MFE",0.2,0.8],
	"Medium Fastener Kit": ["MFK",0.1,0.05],
	"Medium FTL Fuel Tank Kit": ["MFL",24,4],
	"Magnesium": ["MG",0.27,0.16],
	"Magnetic Ground Cover": ["MGC",0.6,0.9],
	"Magnesite": ["MGS",1.73,1],
	"Metal-Halide Lighting System": ["MHL",0.1,0.05],
	"Micro Headphones": ["MHP",0.001,0.001],
	"Machine Learning Interface": ["MLI",0.001,0.01],
	"Micro-Processor": ["MPC",0.001,0.001],
	"Medium STL Fuel Tank Kit": ["MSL",50,50],
	"MegaTube Coating": ["MTC",0.032,0.01],
	"Meat Tissue Patties": ["MTP",0.7,1],
	"Protein-Rich Mushrooms": ["MUS",0.8,1],
	"Medium Wafer": ["MWF",0.008,0.008],
	"Nitrogen": ["N",0.807,1],
	"Sodium": ["NA",0.97,1],
	"Sodium Borohydride": ["NAB",0.1,0.05],
	"Nano-Carbon Sheeting": ["NCS",0.028,0.01],
	"Neon": ["NE",0.9,1],
	"Networking Framework": ["NF",0.001,0.01],
	"Nano Fiber": ["NFI",0.032,0.01],
	"Nano-Coated Glass": ["NG",0.022,0.01],
	"Nylon Fabric": ["NL",1.13,1],
	"Neural Network": ["NN",0.001,0.01],
	"Basic Nozzle": ["NOZ",3,1.5],
	"Nano-Enhanced Resin": ["NR",0.05,0.05],
	"Nutrient Solution": ["NS",0.6,0.5],
	"NeuroStimulants": ["NST",0.05,0.05],
	"Triglyceride Nuts": ["NUT",0.9,1],
	"Navigation Module MK1": ["NV1",4.2,2],
	"Navigation Module MK2": ["NV2",6.7,3],
	"Oxygen": ["O",1.141,1],
	"Office Supplies": ["OFF",0.02,0.2],
	"Olfactory Substances": ["OLF",0.01,0.001],
	"Operating System": ["OS",0.001,0.01],
	"Basic Overalls": ["OVE",0.02,0.025],
	"Printed Circuit Board": ["PCB",0.05,0.05],
	"Personal Data Assistant": ["PDA",0.002,0.002],
	"Poly-Ethylene": ["PE",0.01,0.01],
	"Premium Fertilizer": ["PFE",0.9,1],
	"Polymer Granulate": ["PG",0.002,0.001],
	"Pineberries": ["PIB",0.3,1],
	"Painkillers": ["PK",0.001,0.001],
	"Power Cell": ["POW",0.05,0.1],
	"Protein Paste": ["PPA",2,1],
	"Pressure Shielding": ["PSH",4.2,0.8],
	"Polymer Sheet Type L": ["PSL",0.08,0.8],
	"Polymer Sheet Type M": ["PSM",0.04,0.4],
	"Polymer Sheet Type S": ["PSS",0.01,0.1],
	"Power Tools": ["PT",0.25,0.2],
	"Padded Work Overall": ["PWO",0.05,0.05],
	"Quick-charge FTL Reactor": ["QCR",14,10],
	"Radio Device": ["RAD",0.003,0.005],
	"Radioisotope Generator": ["RAG",5,3.4],
	"Memory Bank": ["RAM",0.001,0.001],
	"Basic Rations": ["RAT",0.21,0.1],
	"Reinforced Bulkhead": ["RBH",2.4,0.9],
	"Raw Cotton Fiber": ["RCO",0.95,1],
	"Reactor Control System": ["RCS",0.67,0.5],
	"Standard FTL Reactor": ["RCT",7,4],
	"Reinforced Deck Elements": ["RDE",1.4,1.5],
	"Large Ship-Repair Drone Operations Unit": ["RDL",150,30],
	"Small Ship-Repair Drone Operations Unit": ["RDS",50,10],
	"Chemical Reagents": ["REA",0.05,0.05],
	"Rescue Drone": ["RED",0.3,0.05],
	"Repair Kit": ["REP",0.006,0.002],
	"Reinforced Glass": ["RG",0.032,0.01],
	"Red Gold": ["RGO",19.32,1],
	"Reinforced Hull Plate": ["RHP",12,10],
	"Non-Volatile Memory": ["ROM",0.001,0.001],
	"Reinforced Structural Elements": ["RSE",1.9,0.7],
	"Radiation Shielding": ["RSH",3.7,0.8],
	"Raw Silk Strains": ["RSI",1.1,1],
	"Reinforced Transparent Aperture": ["RTA",1.5,0.5],
	"Sulfur": ["S",0.52,0.25],
	"Search Algorithm": ["SA",0.001,0.01],
	"Sorting Algorithm": ["SAL",0.001,0.01],
	"Sensor Array": ["SAR",1.7,2],
	"Stem Cell Treatment": ["SC",0.04,0.01],
	"Small Cargo Bay Kit": ["SCB",50,50],
	"Multi-Purpose Scanner": ["SCN",0.001,0.001],
	"Sulfur Crystals": ["SCR",2.05,1],
	"Surgical Drone": ["SDR",0.3,0.05],
	"Poly-Sulfite Sealant": ["SEA",0.15,0.07],
	"Sensor": ["SEN",0.001,0.001],
	"Surgical Equipment": ["SEQ",0.001,0.01],
	"STL Fuel": ["SF",0.06,0.06],
	"Small FTL Emitter": ["SFE",0.1,0.4],
	"Small Fastener Kit": ["SFK",0.04,0.02],
	"Small FTL Fuel Tank Kit": ["SFL",9,1.5],
	"Silicon": ["SI",2.329,1],
	"Silken Fabric": ["SIL",1.21,1],
	"Silicon Ore": ["SIO",1.79,1],
	"Spatial Navigation Map": ["SNM",0.001,0.01],
	"Artificial Soil": ["SOI",0.9,1],
	"Solar Cell": ["SOL",0.015,0.01],
	"Solar Panel": ["SP",0.15,0.1],
	"Ship-Repair Drone": ["SRD",0.3,0.05],
	"Specialized Anti-rad Plate": ["SRP",0.1,0.2],
	"Structural Spacecraft Component": ["SSC",1,1],
	"Small STL Fuel Tank Kit": ["SSL",20,20],
	"Steel": ["STL",7.85,1],
	"Medical Stretcher": ["STR",0.01,1],
	"Stability Support System": ["STS",0.1,0.1],
	"Surgery Unit": ["SU",6,5],
	"Surveillance Drone": ["SUD",0.3,0.05],
	"Safety Uniform": ["SUN",0.05,0.05],
	"Small Wafer": ["SWF",0.003,0.003],
	"Tantalum": ["TA",16.65,1],
	"Targeting Computer": ["TAC",0.15,1],
	"Tantalite Rock": ["TAI",7.94,1],
	"Technetium": ["TC",11.8,1],
	"Tiny Cargo Bay Kit": ["TCB",20,20],
	"TCL Acid": ["TCL",0.09,0.1],
	"Technetium Oxide": ["TCO",9.8,1],
	"Stabilized Technetium": ["TCS",3.4,1.2],
	"Trauma Care Unit": ["TCU",5,4],
	"ThermoFluid": ["THF",0.6,0.35],
	"Basic Thermal Protection Material": ["THP",2.2,1],
	"Titanium": ["TI",4.5,1],
	"Titanium Ore": ["TIO",1.58,1],
	"TechnoKevlar Fabric": ["TK",1.89,1],
	"Tensor Processing Unit": ["TPU",0.002,0.002],
	"Audio Transmitter": ["TRA",0.005,0.002],
	"Advanced Transistor": ["TRN",0.001,0.001],
	"Truss": ["TRU",0.1,1.5],
	"Tectosilisite": ["TS",2.4,1],
	"Thermal Shielding": ["TSH",2.4,1.5],
	"Test Tubes": ["TUB",0.002,0.002],
	"Universal Toolset": ["UTS",0.05,0.05],
	"High-volume Cargo Bay Kit": ["VCB",200,200],
	"Triglyceride Fruits": ["VEG",1.1,1],
	"VitaGel": ["VG",0.21,0.1],
	"Vita Essence": ["VIT",0.9,1],
	"Very Small Cargo Bay Kit": ["VSC",35,35],
	"Tungsten": ["W",7.519,1],
	"Weak Artificial Intelligence": ["WAI",0.001,0.01],
	"Alpha-Stabilized Tungsten": ["WAL",6.25,1],
	"High-load Cargo Bay Kit": ["WCB",200,200],
	"Smart Zinfandel": ["WIN",0.1,0.1],
	"Window Manager": ["WM",0.001,0.01],
	"Handcraft Workshop Unit": ["WOR",5,5],
	"Water Reclaimer": ["WR",6.4,5],
	"Scientific Work Station": ["WS",0.05,0.5],
	"Zircon Crystals": ["ZIR",4.85,1],
	"Zirconium": ["ZR",6.53,1],
}

class PMMGMobile {

    get_prices(prices)
    {
        const webappid = "AKfycbyeZcb0azMICGhAUY2-1clwMpySbTH-5xXklw__tSSvLakKDCxaNaA2t0vySuzM25GUZA";
        var xhr = new XMLHttpRequest();
        xhr.ontimeout = function(){console.log("Error! Timed Out!");};

        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == XMLHttpRequest.DONE)
            {
                console.log("Retreived Prices from Web App");
                try
                {
                    var priceData = JSON.parse(xhr.responseText);
                    const keys = Object.keys(priceData);
                    keys.forEach(key => {
                        prices[key] = priceData[key];
                    });
                }
                catch(SyntaxError)
                {
                    console.log("Bad Data from Web App");
                }
                return;
            }
        };
        xhr.timeout = 10000;
        xhr.open("GET", "https://script.google.com/macros/s/" + webappid + "/exec?mode=%22price%22", true);
        xhr.send(null);
        return;
    }

	loop(prices){
		this.nots_recolor();
        this.lm_post(prices);
		this.lm_ads();
		this.shipping_ads();
		this.production_scroll();
		this.fleet_etas();
		this.flight_etas();
		window.setTimeout(() => this.loop(prices), 1000);
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
		} catch(e)
		{}
		return;
	}

    lm_post(prices)
    {
        this.cleanup("pmmg-lm-post");
        const container = document.getElementById("container");
		try
		{
        	const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent.includes("Buffer / LMP ") || buffer.firstChild.firstChild.textContent.includes("Local Markets / LMP "))
			{
				const form = buffer.children[1].firstChild.firstChild.children[1].firstChild.firstChild.firstChild;
				const type = form.children[0].children[1].firstChild.textContent;
				const commodity = document.evaluate("div[label/span[text()='Commodity']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				const amount = document.evaluate("div[label/span[text()='Amount']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				const totalPrice = document.evaluate("div[label/span[text()='Total price']]//input", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				const currency = document.evaluate("div[label/span[text()='Currency']]//select", form, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				if(type === "BUYING" || type === "SELLING")
				{   // Buy/sell ads
					const unitPrice = parseFloat(totalPrice.value) / parseFloat(amount.value);
					var priceText = "";
					if(currency.value != "" && currency.value != null && currency.value != "--" && currency.value != undefined){priceText += CurrencySymbols[currency.value];}
					priceText += unitPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " ea";
					if(prices != undefined && commodity.value != undefined && prices[commodity.value] != undefined)
					{
						priceText += " | " + (prices[commodity.value] * parseFloat(amount.value)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + " Total Corp";
					}
					const displayElement = document.createElement("div");
					displayElement.textContent = priceText;
					displayElement.classList.add("pmmg-lm-post");
					const totalPriceDiv = form.children[4].children[1].firstChild.firstChild;
					totalPriceDiv.insertBefore(displayElement, totalPriceDiv.children[0]);

				}
				else
				{   // Shipping ads
					if(commodity.value != undefined && Materials[commodity.value] != undefined)
					{
						const weight = parseFloat(amount.value) * Materials[commodity.value][1];
						const volume = parseFloat(amount.value) * Materials[commodity.value][2];
						const displayedMeasure = weight >= volume ? weight : volume;
						const units = weight >= volume ? "t" : "m³";

						var displayText = displayedMeasure.toLocaleString(undefined, {maximumFractionDigits: 0}) + " " + units + " | ";
						if(currency.value != "" && currency.value != null && currency.value != "--" && currency.value != undefined){displayText += CurrencySymbols[currency.value];}
						displayText += (parseFloat(totalPrice.value) / displayedMeasure).toLocaleString(undefined, {maximumFractionDigits: 2}) + " / " + units;

						const displayElement = document.createElement("div");
						displayElement.textContent = priceText;
						displayElement.classList.add("pmmg-lm-post");
						const totalPriceDiv = form.children[4].children[1].firstChild.firstChild;
						totalPriceDiv.insertBefore(displayElement, totalPriceDiv.children[0]);
						}
				}
			}
		} catch(e){}
        return;
    }

	lm_ads()
	{
		this.cleanup("pmmg-lm-ads");
		const container = document.getElementById("container");
		try
		{
			const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent.includes("Buffer / LM ") || buffer.firstChild.firstChild.textContent.includes("Local Markets / LM "))
			{
				const board = buffer.children[1].firstChild.firstChild.children[4];
				Array.from(board.children).forEach(ad => {
					var text = ad.firstChild.children[1].textContent;
					const matches = text && text.match(/(BUYING|SELLING)\s(\d+)\s.*\s@\s([\d,.]+)\s[A-Z]+\sfor/);
					if(matches && matches.length > 3)
					{
						const count = parseInt(matches[2]);
						const totalCents = parseInt(matches[3].replace(/[,.]/g, ''));
						if(totalCents <= 1){return;}

						text = text.replace(/ \([a-zA-Z0-9.,]* ea\)/, "");
						ad.firstChild.children[1].textContent = text.replace(" for", " (" + (totalCents / (count * 100)).toLocaleString(undefined, {maximumFractionDigits: 2}) + " ea) for")
					}
				});
			}
		} catch(e){}
		return;
	}

	shipping_ads()
	{
		this.cleanup("pmmg-ship-ads");
		const container = document.getElementById("container");
		try
		{
			const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent.includes("Buffer / LM ") || buffer.firstChild.firstChild.textContent.includes("Local Markets / LM "))
			{
				const board = buffer.children[1].firstChild.firstChild.children[4];
				Array.from(board.children).forEach(ad => {
					var text = ad.firstChild.children[1].textContent;
					console.log(text);
					const matches = text && text.match(/(?:SHIPPING)\s([\d,.]+)t\s\/\s([\d,.]+)m³\s@\s([\d,.]+)\s[A-Z]+\sfrom/);
					if(matches && matches.length > 3)
					{
						const totalCents = parseInt(matches[3].replace(/[,.]/g, ''));
						const tonnage = parseFloat(matches[1].replace(/[,.]/g, '')) / 100;
						const size = parseFloat(matches[2].replace(/[,.]/g, '')) / 100;
						
						const unit = tonnage > size ? 't' : 'm³';
						const count = tonnage > size ? tonnage : size;
						const perItem = (totalCents / count / 100).toLocaleString(undefined, {maximumFractionDigits: 1});

						text = text.replace(/ \([a-zA-Z0-9.,]*\/(t|m³)\)/, "");
						ad.firstChild.children[1].textContent = text.replace(" from", " (" + perItem + "/" + unit + ") from");
					}
				});
			}
		} catch(e){}
		return;
	}

	production_scroll()
	{
		this.cleanup("pmmg-production-scroll");
		const container = document.getElementById("container");
		try
		{
			const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent.includes("Buffer / PROD "))
			{
				const prod = buffer.children[1].firstChild;
				const innerElem = prod.children[1].firstChild.firstChild;
				innerElem.style.overflowX = "hidden";
				innerElem.style.overflowY = "scroll";

				const count = innerElem.firstChild.children.length;
				prod.style.width = (count * 120) + "px";
			}
		} catch(e){}
	}

	fleet_etas()
	{
		this.cleanup("pmmg-fleet");
		const container = document.getElementById("container");
		try
		{
			const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent.includes(" / FLT"))
			{
				const fleet = buffer.children[1].firstChild.firstChild;
				Array.from(fleet.children).forEach(ship => {
					const timeLeftElem = ship.children[2].children[1];
					if(timeLeftElem == null || timeLeftElem.firstChild == null){return;}
					const duration = timeLeftElem.firstChild.textContent;
					if(duration == undefined || duration == ""){return;}
					const eta = this.convertDurationToETA(this.parseDuration(duration));
					const etaElem = document.createElement("span");
					etaElem.textContent = eta;
					etaElem.classList.add("pmmg-fleet");
					timeLeftElem.appendChild(etaElem);
					
				});
			}
		} catch(e){}
	}

	flight_etas()
	{
		this.cleanup("pmmg-flight");
		const container = document.getElementById("container");
		try
		{
			const buffer = container.firstChild.firstChild.children[1].children[1].firstChild.firstChild;
			if(buffer.firstChild.firstChild.textContent.includes(" / SFC "))
			{
				const table = buffer.children[1].firstChild.children[1].children[10];
				const totalDurationDiv = table.children[1].firstChild.children[3].firstChild;
				const eta = this.convertDurationToETA(this.parseDuration(totalDurationDiv.textContent));
				const etaElem = document.createElement("span");
				etaElem.textContent = eta;
				etaElem.classList.add("pmmg-flight");
				totalDurationDiv.parentNode.appendChild(etaElem);
			}
		}
		catch(e){console.log(e);}
	}

	convertDurationToETA(parsedSeconds){
		const eta = new Date();
		const now = new Date();
		eta.setSeconds(eta.getSeconds() + parsedSeconds);
		const diffTime = Math.abs(eta.getTime() - now.getTime());
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		
		let ret = eta.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
		if (diffDays > 0) {
			ret += ` +${diffDays}d`;
		}
		ret = " (" + ret + ")";
		return ret;
	}

	parseDuration(duration) {
		const days = duration.match(/(\d+)\s*d/);
		const hours = duration.match(/(\d+)\s*h/);
		const minutes = duration.match(/(\d+)\s*m/);
		const seconds = duration.match(/(\d+)\s*s/);
		
		let parsedSeconds = 0;
		if (days) {
			parsedSeconds += parseInt(days[1]) * 86400;
		}
		if (hours) {
			parsedSeconds += parseInt(hours[1]) * 3600;
		}
		if (minutes) {
			parsedSeconds += parseInt(minutes[1]) * 60;
		}
		if (seconds) {
			parsedSeconds += parseInt(seconds[1]);
		}
		return parsedSeconds;
	}
}

const runner = new PMMGMobile();
var prices = {};
runner.get_prices(prices);
runner.loop(prices);