package com.easycook.controller;

import com.easycook.dao.Order;
import com.easycook.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ServerController{
    @Autowired
    private ServerService serverService;

    @GetMapping(value = "/")
    public String index() {
        return "index";
    }

    @GetMapping(value = "/order")
    public String order() {
        return "order";
    }

    @GetMapping(value = "/getallorders")
    public ResponseEntity<String> getAllOrders() {
        String ordersJSON = serverService.getAllOrdersJSON();
        return ResponseEntity.ok(ordersJSON);
    }

    @RequestMapping(value = "/saveorder", method = RequestMethod.POST)
    public ResponseEntity<Object> checkPassword(@RequestBody String json) {
        serverService.addNewOrder(json);
        return ResponseEntity.ok("Your order is saved!");
    }

    @GetMapping(value = "/thanks")
    public String thanks() {
        return "thanks";
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

    @GetMapping(value = "/desserts")
    public String desserts() {return "desserts";}

    @GetMapping(value = "/pizza")
    public String pizza() {return "pizza";}

    @GetMapping(value = "/fish")
    public String fish() {return "fish";}

    @GetMapping(value = "/meat")
    public String meat() {return "meat";}

    @GetMapping(value = "/salads")
    public String salads() {return "salads";}

    @GetMapping(value = "/login")
    public String login() {return "login";}

    @GetMapping(value = "/admin")
    public String admin() {return "admin";}
}
