import csv

# open contratos2024.csv file

with open('contratos2024.csv', 'r') as file:
    #for each entry, if precoContratual has a comma, change it to a dot
    #and write it to a new file
    with open('contratos2024_treated.csv', 'w') as newfile:
        reader = csv.reader(file)
        writer = csv.writer(newfile)
        for row in reader:
            if ',' in row[6]:
                row[6] = row[6].replace(',', '.')
            writer.writerow(row)