import requests
from bs4 import BeautifulSoup
from datetime import datetime

url = "http://www.daum.net/"
response = requests.get(url)
#print(response.text[:500])

soup = BeautifulSoup(response.text, 'html.parser')
rank = 1

#file = open("daum.html","w")
#file.write(response.text)
#file.close()

print(soup.title)
print(soup.title.string)
print(soup.span)
print(soup.findAll('span'))

results = soup.findAll("a","link_favorsch")

print(datetime.today().strftime("%Y년 %m월 %d일의 실시간 검색어 순위입니다.\n"))

for result in results:
    print(rank,"위 : ",result.get_text(),"\n")
    rank += 1   #rank = rank + 1