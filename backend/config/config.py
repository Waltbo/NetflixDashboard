import csv


def process_data():
  jsonArray = []
  with open('backend/config/netflix_titles.csv', encoding='utf-8') as csvf:
    csvReader = csv.DictReader(csvf)
    for row in csvReader:
      jsonArray.append(row)
  return jsonArray


def getTopCategory(category, amount):
  list = process_data()
  toplist = {}
  for media in list:

    formattedList = media[category].split(',')
    for categories in formattedList:
      categories_stripped = categories.strip()
    if categories_stripped != '':
      if categories_stripped not in toplist:
        toplist[categories_stripped] = 1
      else:
        toplist[categories_stripped] = toplist[categories_stripped] + 1

  top_category = sorted(toplist.items(), key=lambda x: x[1], reverse=True)

  top_x_category = []
  for x in range(amount):
    category_info = top_category[x]
    if category == 'director':
      top_x_category.append({'name': category_info[0], 'y': category_info[1]})
    if category == 'listed_in':
      top_x_category.append([category_info[0], category_info[1]])
  return top_x_category

