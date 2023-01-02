import csv


def process_data():
  jsonArray = []
  with open('backend/config/netflix_titles.csv', encoding='utf-8') as csvf:
    csvReader = csv.DictReader(csvf)
    for row in csvReader:
      jsonArray.append(row)
  return jsonArray

def process_pie_data():
  list = process_data()
  directorList = {}
  for media in list:
    print('test')
    directors = media['director'].split(',')
    for director in directors:

      directorStripped = director.strip()
    if directorStripped != '':
      if directorStripped not in directorList:
        directorList[directorStripped] = 1
      else:
        directorList[directorStripped] = directorList[directorStripped] + 1

  topDirectors = sorted(directorList.items(), key=lambda x: x[1], reverse=True)
  print("test")
  topTenDirectors = []
  for x in range(10):
    directorInfo = topDirectors[x]
    topTenDirectors.append({'name': directorInfo[0], 'y': directorInfo[1]})
  return topTenDirectors
