// Copyright (c) 2021, Vesper Solutions  and contributors
// For license information, please see license.txt

frappe.ui.form.on('Declaration Form', "validate", function(frm) {
  if (frm.doc.datee){
  if (frm.doc.datee > frappe.datetime.get_today()) {
            frappe.msgprint(__("Enter a valid Date"));
            frappe.validated = false;
        }
      }
      if (frm.doc.dateer){
  if (frm.doc.dateer > frappe.datetime.get_today()) {
                  frappe.msgprint(__("Enter a valid Date"));
                  frappe.validated = false;
              }
            }
});

frappe.ui.form.on('Declaration Form',{
  refresh(frm){

    frm.add_custom_button(__(frm.doc.user), () => {
                frappe.set_route("Form", "user", frm.doc.user);
            });
  }

});
