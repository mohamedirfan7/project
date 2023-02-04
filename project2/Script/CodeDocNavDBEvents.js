"use strict";
// CodeDocNavDBEvents.js

class CNavDataEvents
{
	// Initializes an object instance with the provided values.
	constructor(contentFrame)
	{
		this.ContentFrame = contentFrame;
		this.PrevNavItem = null;
		this.NavItems = new CodeDocNavItems();
		this.CreateNavItems();
	}

	// Adds the HTML event handlers.
	AddEvents()
	{
		// Document Event Handlers.
		document.addEventListener("click", this.DocumentClick.bind(this));
	}

	// Document "click" handler method.
	// event - The Target event.
	DocumentClick(event)
	{
		let srcElement = event.target;
		if ("navGroup" == srcElement.className
			|| "navItem" == srcElement.className)
		{
			let navItem = this.NavItems.SearchName(srcElement.id);
			if (navItem != null)
			{
				if (this.ContentFrame != null)
				{
					this.ContentFrame.src = navItem.URL;
				}
			}

			if (this.PrevNavItem != null)
			{
				this.PrevNavItem.style.backgroundColor = "";
			}
			this.PrevNavItem = srcElement;
			srcElement.style.backgroundColor = "#d4dfff";
		}
	}

	// Creates the NavItem entries.
	CreateNavItems()
	{
		// * Database Diagrams
		this.NavItems.Add("Diagrams", "DBDiagrams.html");

		// - App Manager
		this.NavItems.Add("App", "HTML/AppManager/AppManagerTables.html");

		// - CVR
		this.NavItems.Add("Shared", "HTML/CVRManager/Facility.html");
		this.NavItems.Add("Visit", "HTML/CVRManager/CVVisit.html");

		// - DataDetail
		this.NavItems.Add("DataDetail", "HTML/DataDetail/DataDetailTables.html");

		// - DataTransform
		this.NavItems.Add("Process", "HTML/DataTransform/ProcessTables.html");
		this.NavItems.Add("TaskSource", "HTML/DataTransform/TaskSourceTables.html");
		this.NavItems.Add("SourceLayout", "HTML/DataTransform/SourceLayoutTables.html");
		this.NavItems.Add("Transform", "HTML/DataTransform/TransformTables.html");

		// - DocApp
		this.NavItems.Add("DocApp", "HTML/DocApp/DocAppTables.html");

		// - Facility
		this.NavItems.Add("Facility", "HTML/FacilityManager/FacilityTables.html");
		this.NavItems.Add("Business", "HTML/FacilityManager/BusinessTables.html");
		this.NavItems.Add("Person", "HTML/FacilityManager/PersonTables.html");

		// - Genealogy
		this.NavItems.Add("Genealogy", "HTML/Genealogy/GenealogyTables.html");

		// - MetaData
		this.NavItems.Add("MetaData", "HTML/DBMetaData/MetaDataTables.html");

		// - Region
		this.NavItems.Add("Region", "HTML/RegionManager/RegionTables.html");

		// - Sales
		this.NavItems.Add("Order", "HTML/Sales/OrderTables.html");
		this.NavItems.Add("Product", "HTML/Sales/ProductTables.html");

		// - View
		this.NavItems.Add("Main", "HTML/View/ViewDataTables.html");
		this.NavItems.Add("Join", "HTML/View/ViewJoin.html");
		this.NavItems.Add("Grid", "HTML/View/ViewGridTables.html");
	}
}