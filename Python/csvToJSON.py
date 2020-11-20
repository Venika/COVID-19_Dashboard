import csv
import json

csvfile = open('covid_data.csv', 'r') # we want to open the csv for read access
jsonfile = open('json_covid_data.json', 'w') # we will be writing to this outfile in json

columns = ("FIPS","Admin2","Province_State","Country_Region", "Last_Update", "Lat", "Long_", "Confirmed", "Deaths", "Recovered", "Active", "Combined_Key") # these are the columns in the data source

reader = csv.DictReader(csvfile, columns) # a built in function for reading csv data

for row in reader: # now we go row by row, writing each csv row in JSON format to our output file
  json.dump(row, jsonfile)
  jsonfile.write('\n')