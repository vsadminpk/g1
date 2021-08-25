// Copyright (c) 2021, Vesper Solutions  and contributors
// For license information, please see license.txt

frappe.ui.form.on('Reference Check', "validate", function(frm) {
  if (frm.doc.to <= frm.doc.from) {
            frappe.msgprint(__("From date can't be in future of To Date"));
            frappe.validated = false;
        }
        if (frm.doc.mobile_number){
        if (frm.doc.mobile_number.length < 10){
        frappe.msgprint(__("Enter a valid Mobile Number"));
        frappe.validated = false;
        }
      }
        if (frm.doc.date){
        if (frm.doc.date > frappe.datetime.get_today()){
        frappe.msgprint(__("Enter a valid Date"));
        frappe.validated = false;
        }
      }
});
