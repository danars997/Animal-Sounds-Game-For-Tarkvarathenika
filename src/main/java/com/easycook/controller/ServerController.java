package com.easycook.controller;

import com.easycook.dao.Order;
import com.easycook.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import org.json.JSONObject;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

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
    public String login(@CookieValue(required = false) String admin) {
        if (admin == null){
            return "login";
        }

        return "redirect:/admin";
    }

    @GetMapping(value = "/admin")
    public String admin(@CookieValue(required = false) String admin) {
        if (admin != null){
            return "admin";
        }

        return "redirect:/";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Object> checkLogin(@RequestBody String json, HttpServletResponse response) {
        JSONObject jsonObject = new JSONObject(json);

        String jsonUsername = jsonObject.getString("username");
        String jsonPassword = jsonObject.getString("password");


        if (jsonUsername.equals("Admin") && jsonPassword.equals("admin")) {
            response.addCookie(new Cookie("admin", "Iamadmin"));
            return ResponseEntity.ok("Welcome home, Admin");
        } else {
            return ResponseEntity.status(403).body(null);
        }

    }
}
