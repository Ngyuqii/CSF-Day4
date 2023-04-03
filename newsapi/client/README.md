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

### API Call and Response
URL = http://localhost:8080/api/news/sg/general?pageSize=4

```
[
    {
        "author": "CNA",
        "title": "Singapore's Shanti Pereira wins 100m finals at Australian championships, breaks national record again - CNA",
        "url": "https://news.google.com/rss/articles/CBMikwFodHRwczovL3d3dy5jaGFubmVsbmV3c2FzaWEuY29tL3Nwb3J0L3NoYW50aS1wZXJlaXJhLWJyZWFrcy1uYXRpb25hbC1yZWNvcmQtc2luZ2Fwb3JlLXNwcmludGVyLTEwMG0tYXVzdHJhbGlhLXRyYWNrLWFuZC1maWVsZC1jaGFtcGlvbnNoaXBzLTMzOTAyODHSAQA?oc=5"
    },
    {
        "author": "The Straits Times",
        "title": "Woman tosses eggs at Toast Box employee for not serving them cracked open - The Straits Times",
        "url": "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnN0cmFpdHN0aW1lcy5jb20vc2luZ2Fwb3JlL3dvbWFuLWh1cmxzLWVnZ3MtYXQtdG9hc3QtYm94LWVtcGxveWVlLWZvci1ub3Qtc2VydmluZy10aGVtLWNyYWNrZWQtb3BlbtIBAA?oc=5"
    },
    {
        "author": "The Straits Times",
        "title": "S'pore's largest outdoor skate park opens at redeveloped Lakeside Garden - The Straits Times",
        "url": "https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnN0cmFpdHN0aW1lcy5jb20vc2luZ2Fwb3JlL3MtcG9yZS1zLWxhcmdlc3Qtb3V0ZG9vci1za2F0ZS1wYXJrLW9wZW5zLWF0LXJlZGV2ZWxvcGVkLWxha2VzaWRlLWdhcmRlbtIBAA?oc=5"
    },
    {
        "author": "CNA",
        "title": "Singapore, China conclude 'substantive talks' on FTA, to expand cooperation in 6 areas - CNA",
        "url": "https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LmNoYW5uZWxuZXdzYXNpYS5jb20vc2luZ2Fwb3JlL2NoaW5hLXNpbmdhcG9yZS1mcmVlLXRyYWRlLWFncmVlbWVudC1uZWdvdGlhdGlvbnMtcG0tbGVlLTMzODk5OTbSAQA?oc=5"
    }
]
```