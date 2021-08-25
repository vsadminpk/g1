// Copyright (c) 2021, Vesper Solutions  and contributors
// For license information, please see license.txt

frappe.ui.form.on('Policies and Procedures', {
  refresh(frm){
    frm.add_custom_button(__(frm.doc.user), () => {
    frappe.set_route("Form", "user", frm.doc.user);
    });
  }
  });
