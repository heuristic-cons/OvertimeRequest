/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 OT_requestSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/pages/App",
	"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/pages/Browser",
	"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/pages/Master",
	"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/pages/Detail",
	"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.getronics.hr.Z_FIORI_OVERTIME.view."
	});

	sap.ui.require([
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/MasterJourney",
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/NavigationJourney",
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/NotFoundJourney",
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/BusyJourney",
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});