/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/NavigationJourneyPhone",
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/NotFoundJourneyPhone",
		"com/getronics/hr/Z_FIORI_OVERTIME/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});