package com.amolbudhiraja.backend.controller;

import com.amolbudhiraja.backend.service.ArticleService;
import com.amolbudhiraja.backend.service.DatabaseService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GeneralController {

    /** Default API Route. */
    @GetMapping("/")
    @ResponseBody
    String index() {
        ArticleService articleService = new ArticleService();
        System.out.println(articleService.getColumnNames());
        return "Welcome to the Web Service for amol.budhiraja.com.";
    }
}
