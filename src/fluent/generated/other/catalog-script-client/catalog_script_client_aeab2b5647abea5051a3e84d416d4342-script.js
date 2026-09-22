function onLoad() {
   if (g_service_catalog.parent.getValue("location")) {
        g_form.setValue("access_location", g_service_catalog.parent.getValue("location"));
    }
}