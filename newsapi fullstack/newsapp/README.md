### Server
- Calls on external API https://newsapi.org/ which returns the news for an indicated country.
- Write a restcontroller with country and category as path variables to get path "http:localhost:8080/api/news/{country}/{category}".
- The path varaiable are to be passed as queryParam to NewsService to build url in RequestEntity.get(url). Retrieve the response entity as payload and extract required information to be posted to Client.
- Required information is the list of articles
    1. Author
    2. Title
    3. URL

### Client
- Create a landing page that allows user to search for news articles.
    1. Inputs country and category are indicated in dropdown selection
    2. When country selection is changed, onChange triggers a comment
    3. PageSize is an user input number
- Calls on server which returns the news for an indicated country, category and pageSize. 
- Display the list of articles with the following:
    1. Title
    2. Author
    3. Clickable URL
- Build the angular project and add into server side

### API Call and Response
URL = https://newsapi.org/v2/top-headlines?country=sg&category=general&pageSize=1&apiKey={API_Key}

```
{
  "status": "ok",
  "totalResults": 38,
  "articles": [
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "CNA",
      "title": "Singapore, China conclude 'substantive talks' on FTA, to expand cooperation in 6 areas - CNA",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LmNoYW5uZWxuZXdzYXNpYS5jb20vc2luZ2Fwb3JlL2NoaW5hLXNpbmdhcG9yZS1mcmVlLXRyYWRlLWFncmVlbWVudC1uZWdvdGlhdGlvbnMtcG0tbGVlLTMzODk5OTbSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-01T06:58:00Z",
      "content": null
    }
  ]
}
```