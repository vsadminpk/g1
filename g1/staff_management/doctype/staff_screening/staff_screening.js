// Copyright (c) 2021, Vesper Solutions  and contributors
// For license information, please see license.txt

frappe.ui.form.on("Staff Screening", {
	refresh(frm) {
	var zer = "";
	var a = frm.doc.score3 + frm.doc.score2 + frm.doc.score1;
    		frm.set_value("score4", a);
    		frm.refresh_field("score4");
    if(!frm.doc.upload_vevo_check){
        zer = "0";
        frm.set_value ("vevocheckuploaded",zer);
        frm.refresh_field("vevocheckuploaded");
    }
    else{
         zer = "1";
        frm.set_value ("vevocheckuploaded",zer);
        frm.refresh_field("vevocheckuploaded");
    }

	    frm.add_custom_button(__(frm.doc.user), () => {
	    frappe.set_route("Form", "user", frm.doc.user);
	    });
	  }


});
frappe.ui.form.on("Staff Screening", "validate", function(frm) {
	if (frm.doc.expiry_date){
	if (frm.doc.expiry_date < frappe.datetime.get_today()) {
	            frappe.msgprint(__("Enter a valid Expiry Date"));
	            frappe.validated = false;
	        }
				}
				if (frm.doc.exp0){
if (frm.doc.exp0 < frappe.datetime.get_today()) {
frappe.msgprint(__("Enter a valid Expiry Date"));
frappe.validated = false;
}
}
if (frm.doc.expiry1){
if (frm.doc.expiry1 < frappe.datetime.get_today()) {
frappe.msgprint(__("Enter a valid Expiry Date"));
frappe.validated = false;
}
}
if (frm.doc.exp1){
if (frm.doc.exp1 < frappe.datetime.get_today()) {
frappe.msgprint(__("Enter a valid Expiry Date"));
frappe.validated = false;
}
}
if (frm.doc.expp1){
if (frm.doc.expp1 < frappe.datetime.get_today()) {
frappe.msgprint(__("Enter a valid Expiry Date"));
frappe.validated = false;
}
}

});
