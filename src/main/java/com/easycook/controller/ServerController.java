package com.easycook.controller;

import com.easycook.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ServerController{
    @Autowired
    private ServerService serverService;

    @GetMapping(value = "/")
    public String index() {
        return "index";
    }

    @GetMapping(value = "/recipes/{recipefile}")
    public String getRecipe(@PathVariable("recipefile") String recipefile) {
        return "recipes/" + recipefile;
    }

    @GetMapping(value = "/css/{cssfile}")
    public String getCssFile(@PathVariable("cssfile") String cssfile)
    {
        return "css/" + cssfile;
    }

    @GetMapping(value = "/js/{jsfile}")
    public String getJsFile(@PathVariable("jsfile") String jsfile)
    {
        return "js/" + jsfile;
    }
}
