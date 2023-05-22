import requests

url = ('https://newsapi.org/v2/everything?'
       'q=Apple&'
       'from=2023-05-15&'
       'sortBy=popularity&'
       'apiKey=c86f8a41ad0143c3a4dff849ead3b860')

response = requests.get(url)

print(response.json())