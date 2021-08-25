// Copyright (c) 2021, Frappe Technologies and contributors
// For license information, please see license.txt


  frappe.ui.form.on("Plan", "total_remaining", function(frm){
    //  frappe.model.set_value(frm.doctype, frm.docname, 'total_remaining', frm.total_allocation - frm.total_delivered);
  });
	// }


frappe.ui.form.on("Funding", {
   budget_allocation:function(frm, cdt, cdn){
   var b = locals[cdt][cdn];
   var totala = 0;
   frm.doc.funding.forEach(function(b) { totala += b.budget_allocation; });
   frm.set_value("total_allocation", totala);
   refresh_field("total_allocation");
 },
 budget_allocation_remove:function(frm, cdt, cdn){
 var b = locals[cdt][cdn];
 var totala = 0;
 frm.doc.funding.forEach(function(b) { totala += b.budget_allocation; });
 frm.set_value("total_allocation", totala);
 refresh_field("total_allocation");
},
budget_delivered:function(frm, cdt, cdn){
var a = locals[cdt][cdn];
var total = 0;
frm.doc.funding.forEach(function(b) { total += a.budget_delivered; });
frm.set_value("total_delivered", total);
refresh_field("total_delivered");
},
budget_delivered_remove:function(frm, cdt, cdn){
var a = locals[cdt][cdn];
var total = 0;
frm.doc.funding.forEach(function(b) { total += a.budget_delivered; });
frm.set_value("total_delivered", total);
refresh_field("total_delivered");
}
});
