package com.easycook.controller;

import com.easycook.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ServerController{
    @Autowired
    private ServerService serverService;

    @GetMapping(value = "/")
    public String index() {
        return "index";
    }
}
