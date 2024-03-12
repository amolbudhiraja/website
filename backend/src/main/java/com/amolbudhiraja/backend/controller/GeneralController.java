package com.amolbudhiraja.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class GeneralController {

    /** Default API Route. */
    @GetMapping("/")
    @ResponseBody
    String index() {
        return "Welcome to the Web Service for amol.budhiraja.com.";
    }
}
