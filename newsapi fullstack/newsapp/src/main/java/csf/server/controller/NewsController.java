package csf.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import csf.server.model.Article;
import csf.server.service.NewsService;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class NewsController {

    @Autowired
    private NewsService newsSvc;

    @GetMapping(path="/news/{country}/{category}")
    @ResponseBody
    public ResponseEntity<String> callAPI(@PathVariable String country, @PathVariable String category, 
            @RequestParam(defaultValue="10") int pageSize) {

        //Check variable passed from client side
        System.out.printf(">>>> Country: %s, Category: %s, PageSize: %s", country, category, pageSize);
        
        //Call on external API and return a list of Article objects
        List<Article> articlesRetrieved = newsSvc.getNews(country, category, pageSize);

        JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        articlesRetrieved.stream()
                .map(v -> v.toJsonObj())
                .forEach(v -> {
                    arrBuilder.add(v);
                });

        return ResponseEntity.ok(arrBuilder.build().toString());
    }
   
}
