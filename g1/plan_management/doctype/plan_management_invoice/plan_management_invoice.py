# -*- coding: utf-8 -*-
# Copyright (c) 2021, Vesper Solutions  and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class PlanManagementInvoice(Document):
	def on_update(self):
		for service in self.services:
			exists = frappe.db.exists(
				"NDIS Claims",
				{
					"participant": self.participant,
					"ndisnumber": self.ndis_number,
					"supportnumber": service.support_item_number,
					"supportsdeliveredfrom": service.delivered_from,
					"supportsdeliveredto": service.delivered_to,
					"quan": service.quantity,
					"abn_of_support_provider": 27623455283,
					"registrationnumber": 4050030269,
					"unitprice": service.rate,
					"gst_code": service.gst_code,
					"cancellationreason": service.type,
					"abn_of_support_provider" : self.abn,

					},
					)
			if not exists:
				todo = frappe.get_doc({"doctype":"NDIS Claims","abn_of_support_provider" : self.abn,"cancellationreason": service.type,"gst_code": service.gst_code,"unitprice": service.rate,"registrationnumber": 4050030269,"abn_of_support_provider": 27623455283,"quan": service.quantity,"supportsdeliveredto": service.delivered_to,"supportsdeliveredfrom": service.delivered_from,"participant": self.participant,"ndisnumber": self.ndis_number,"supportnumber": service.support_item_number,})
				todo.insert()
