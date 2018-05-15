package com.easycook.service;

import com.easycook.dao.Order;
import com.easycook.dao.OrdersDAO;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServerService{
    @Autowired
    private OrdersDAO ordersDAO;

    public void addNewOrder(String json)
    {
        Order order = new Order(json);
        ordersDAO.addNewOrder(order);
    }

    public String getAllOrdersJSON()
    {
        return ordersDAO.getAllOrdersJSON();
    }
}
