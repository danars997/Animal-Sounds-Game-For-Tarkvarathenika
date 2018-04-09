package com.easycook.dao;

import java.util.ArrayList;

public interface IOrdersDAO{
    ArrayList<Order> getAllOrdersList();
    void addNewOrder(Order order);
    void updateOrder(Order order);
    void deleteOrder(Order order);
}