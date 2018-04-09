package com.easycook.service;

import com.easycook.dao.OrdersDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServerService{
    @Autowired
    private OrdersDAO ordersDAO;
}
