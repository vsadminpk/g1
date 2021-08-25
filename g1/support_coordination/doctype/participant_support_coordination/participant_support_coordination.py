from __future__ import unicode_literals
import frappe
from frappe.utils import flt, today
from frappe import msgprint, _
from frappe.model.document import Document

class ParticipantSupportCoordination(Document):
	def on_update(self):
		for case_note in self.case_notes:
			exists = frappe.db.exists(
				"COS Claims",
				{
					"participant": case_note.participant,
					"ndisnumber": case_note.ndis_number,
					"supportnumber": "07_002_0106_8_3",
					"supportsdeliveredfrom": case_note.delivered_date,
					"supportsdeliveredto": case_note.delivered_date,
					"hours": case_note.time,
					"abn_of_support_provider": 27623455283,
					"registrationnumber": 4050030269,
					"unitprice": 100.14,
					"gstcode": "P2",

					},
					)
			if not exists:
				todo = frappe.get_doc({"doctype":"COS Claims","supportnumber": "07_002_0106_8_3","gstcode": "P2","supportsdeliveredto": case_note.delivered_date, "unitprice": 100.14,"participant": self.participant, "hours": case_note.time, "supportsdeliveredfrom": case_note.delivered_date, "ndisnumber": case_note.ndis_number, "registrationnumber": 4050030269, "abn_of_support_provider": 27623455283,})
				todo.insert()
