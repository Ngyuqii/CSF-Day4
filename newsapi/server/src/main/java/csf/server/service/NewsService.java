package csf.server.service;

import java.io.StringReader;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import csf.server.model.Article;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;

@Service
public class NewsService {

    //URL = https://newsapi.org/v2/top-headlines?country=sg&category=general&pageSize=1&apiKey={API_Key}
    public static final String NEWS_API = "https://newsapi.org/v2/top-headlines";
    
    @Value("${newsapi.key}")
    private String newsKey;

    //Method to call on external API and return a list of Article objects
    public List<Article> getNews(String country, String category, int pageSize) {

        String apiUrl = UriComponentsBuilder.fromUriString(NEWS_API)
                .queryParam("country", country)
                .queryParam("category", category)
                .queryParam("pageSize", pageSize)
                .queryParam("apiKey", newsKey)
                .toUriString();

        RestTemplate template = new RestTemplate();
        
        RequestEntity<Void> request = RequestEntity.get(apiUrl)
                .accept(MediaType.APPLICATION_JSON)
                .build();

        ResponseEntity<String> response = null;
        try {
            response = template.exchange(request, String.class);
        }
        catch (RestClientException ex) {
            ex.printStackTrace();
            return Collections.emptyList();
        }

        String payload = response.getBody();
        
        JsonReader reader = Json.createReader(new StringReader(payload));
        JsonObject newsResponse = reader.readObject();
        JsonArray jsonArr = newsResponse.getJsonArray("articles");
        return jsonArr.stream()
            .map(v -> (JsonObject)v)
            .map(v -> Article.createArticle(v))
            .toList();
    }

}