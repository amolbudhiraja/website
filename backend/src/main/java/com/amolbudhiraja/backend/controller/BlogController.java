package com.amolbudhiraja.backend.controller;

import com.amolbudhiraja.backend.service.ArticleService;
import com.amolbudhiraja.backend.service.JsonConverter;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class BlogController {

    /** Returns a JSON string of the Articles. */
    @GetMapping("/articles")
    @ResponseBody
    String getArticles() throws JsonProcessingException {
        ArticleService articleService = new ArticleService();
        Map<String, Map<String, String>> articlesData = articleService.getTableInfo();
        return JsonConverter.mapToJsonNested(articlesData);
    }

    /** Returns a JSON string of the Articles. */
    @GetMapping("/articles/category")
    @ResponseBody
    String getCategory(@RequestParam String category) throws JsonProcessingException {
        ArticleService articleService = new ArticleService();
        Map<String, String> articles = articleService.getCategoryArticles(category);
        return JsonConverter.mapToJson(articles);
    }

    /** Returns a JSON string of the categories. */
    @GetMapping("/articles/category/list")
    @ResponseBody
    String getCategoryList() throws JsonProcessingException {
        ArticleService articleService = new ArticleService();
        Map<String, List<String>> articles = articleService.getCategories();
        return JsonConverter.mapToJsonList(articles);
    }

    /** Returns a JSON string of the favorite articles. */
    @GetMapping("/articles/favorites")
    @ResponseBody
    String getFavorites() throws JsonProcessingException {
        ArticleService articleService = new ArticleService();
        Map<String, String> articles = articleService.getRecentArticles();
        return JsonConverter.mapToJson(articles);
    }

    /** Returns a JSON string of the information for the article with id id. */
    @GetMapping("/articles/article")
    @ResponseBody
    String getArticles(@RequestParam String id) throws JsonProcessingException {
        ArticleService articleService = new ArticleService();
        Map<String, String> articleData = articleService.getRowInfo(id);
        return JsonConverter.mapToJson(articleData);
    }

    /** Returns a JSON string of the Articles. */
    @GetMapping("/articles/delete")
    @ResponseBody
    String deleteArticle(@RequestParam String id) {
        ArticleService articleService = new ArticleService();
        articleService.deleteTableRow(id);
        return "Article with id " + id + "was successfully deleted.";
    }

    /** Increment the view count of article with id id. */
    @GetMapping("/articles/views/incr")
    @ResponseBody
    String incrViews(@RequestParam String id) {
        ArticleService articleService = new ArticleService();
        String currArticleViews = articleService.getTableValue(id, "views");
        int currViews = Integer.parseInt(currArticleViews);
        int newViews = currViews + 1;
        articleService.updateTableValue("views", id, String.valueOf(newViews));
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
        ArticleService articleService = new ArticleService();
        articleService.insertArticleRow(title, date, author, views, category, keywords, body, summary, image, url);
        return "Article successfully inserted.";
    }

}
