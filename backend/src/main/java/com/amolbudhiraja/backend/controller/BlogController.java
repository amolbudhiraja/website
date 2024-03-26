package com.amolbudhiraja.backend.controller;

import com.amolbudhiraja.backend.service.DatabaseService;
import com.amolbudhiraja.backend.service.JsonConverter;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class BlogController {

    /** Returns a JSON string of the Articles. */
    @GetMapping("/articles")
    @ResponseBody
    String getArticles() throws JsonProcessingException {
        Map<String, Map<String, String>> articlesData = DatabaseService.getTableInfo("articles");
        return JsonConverter.mapToJson(articlesData);
    }

    /** Returns a JSON string of the Articles. */
    @GetMapping("/articles/delete")
    @ResponseBody
    String deleteArticle(@RequestParam String id) {
        DatabaseService.deleteTableRow("articles", id);
        return "Article with id " + id + "was successfully deleted.";
    }

    /** Increment the view count of article with id id. */
    @GetMapping("/articles/views/incr")
    @ResponseBody
    String incrViews(@RequestParam String id) {
        String currArticleViews = DatabaseService.getTableValue("articles", id, "views");
        int currViews = Integer.parseInt(currArticleViews);
        int newViews = currViews + 1;
        DatabaseService.updateTableValue("articles", "views", id, String.valueOf(newViews));
        return "Article with id " + id + " views successfully updated.";
    }


    /** Inserts a new article with the provided values. */
    @PostMapping("/articles/insert")
    public String insertArticle(@RequestParam String title,
                                @RequestParam String date,
                                @RequestParam String author,
                                @RequestParam String views,
                                @RequestParam String category,
                                @RequestParam String keywords,
                                @RequestParam String body,
                                @RequestParam String summary,
                                @RequestParam String image,
                                @RequestParam String url) {
        DatabaseService.insertArticleRow(title, date, author, views, category, keywords, body, summary, image, url);
        return "Article successfully inserted.";
    }

}
