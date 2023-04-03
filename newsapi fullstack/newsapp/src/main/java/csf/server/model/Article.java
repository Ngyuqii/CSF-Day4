package csf.server.model;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Article {

    private String author;
    private String title;
    private String url;
    
    //Constructor
    public Article() {
    }

    //Getters
    public String getAuthor() {
        return author;
    }
    public String getTitle() {
        return title;
    }
    public String getUrl() {
        return url;
    }
    
    //Setters
    public void setAuthor(String author) {
        this.author = author;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setUrl(String url) {
        this.url = url;
    }

    //Method to convert JsonObj to Article Object
    public static Article createArticle(JsonObject json) {
        Article article = new Article();
        article.setAuthor(getValue(json, "author"));
        article.setTitle(json.getString("title"));
        article.setUrl(getValue(json, "url"));
        return article;
    }

    //Method to get value of key in json object if not null
    //Else return N.A
    private static String getValue(JsonObject json, String k) {
        if (json.containsKey(k) && !json.isNull(k)) {
            return json.getString(k);
        }
        else {
            return "N.A";
        }      
    }

    //Method to build json object
    public JsonObject toJsonObj() {
        return Json.createObjectBuilder()
            .add("author", getAuthor())
            .add("title", getTitle())
            .add("url", getUrl())
            .build();
    }
    
}
