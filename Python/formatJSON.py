import json
from pprint import pprint

# 

def convert_coordinates(input_file, output_file):
    data = [json.loads(line) for line in open(input_file, 'r')]
    for d in data:
        if d['Lat']:
            lat = float(d['Lat'])
            long = float(d['Long_'])
            d['coordinates'] = [lat, long]

    with open(output_file, 'w') as file:
        json.dump(data, file, indent=2)

infile = 'json_covid_data.json'
newfile = 'coviddata.json'
convert_coordinates(infile, newfile)


