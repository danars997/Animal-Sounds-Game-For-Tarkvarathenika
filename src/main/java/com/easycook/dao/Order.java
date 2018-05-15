package com.easycook.dao;

import org.json.JSONObject;

public class Order {
    public String dish;
    public int numberOfServings;
    public String contactName;
    public String city;
    public String region;
    public String address;
    public String comments;
    public String contactNumber;

    public Order(String json) {
        JSONObject orderObject = new JSONObject(json);
        dish = orderObject.getString("dish");
        numberOfServings = orderObject.getInt("numberOfServings");
        contactName = orderObject.getString("contactName");
        city = orderObject.getString("city");
        region = orderObject.getString("region");
        address = orderObject.getString("address");
        comments = orderObject.getString("comments");
        contactNumber = orderObject.getString("contactNumber");
    }
}