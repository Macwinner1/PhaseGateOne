

import menstrualcycleapp

from unittest import TestCase

class TestMenstrualcycleapp(TestCase):

	def test_that_date_validation_works(self):
		response = menstrualcycleapp.date_validation("2026-13-32")
		self.assertEqual(response, "Invalid year")
		
	def test_that_month_is_valid(self):
		response = menstrualcycleapp.date_validation(13)
		self.assertEqual(response, "Invalid month")

	def test_that_calculate_bleeding_length(self):
		response = menstrualcycleapp.calculate_bleeding_length(8)
		self.assertEqual(response, "invalid input")
		
	def test_that_calculate_bleeding_length_works(self):
		response = menstrualcycleapp.calculate_bleeding_length(5)
		self.assertEqual(response, 5)

	def test_that_calculate_cycle_length_works(self):
		response = menstrualcycleapp.calculate_cycle_length(38)
		self.assertEqual(response, "invalid input")


	def test_that_first_day_function_works(self):
		response = menstrualcycleapp.first_day("2025, 5, 11")
		self.assertEqual(response, 2025-5-11)
			
	def test_that_calculate_cycle_length_works(self):
		response = menstrualcycleapp.calculate_cycle_length(28)
		self.assertEqual(response, 28)


