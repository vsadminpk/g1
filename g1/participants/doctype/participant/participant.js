// Copyright (c) 2021, Vesper Solutions  and contributors
// For license information, please see license.txt

frappe.ui.form.on('Participant', {
	refresh(frm) {
		if (frm.doc.ndis_no){
		if (frm.doc.ndis_no.length < 9){
            frappe.msgprint(__("Enter a valid NDIS Number"));
            frappe.validated = false;
        }
			}
			if (frm.doc.phone_number){
        if (frm.doc.phone_number.length < 10){
            frappe.msgprint(__("Enter a valid Phone Number"));
            frappe.validated = false;
        }
			}
			if (frm.doc.primary_contact_number){
				if (frm.doc.primary_contact_number.length < 10){
            frappe.msgprint(__("Enter a valid Phone Number"));
            frappe.validated = false;
        }
			}
			if (frm.doc.date_of_birth){
				if (frm.doc.date_of_birth > frappe.datetime.get_today()) {
			            frappe.msgprint(__("Enter a valid Date of Birth"));
			            frappe.validated = false;
			        }
						}
						if (frm.doc.postcode){
							if (frm.doc.postcode.length < 4){
			            frappe.msgprint(__("Enter a valid Post Code"));
			            frappe.validated = false;
			        }
						}
	}
});
