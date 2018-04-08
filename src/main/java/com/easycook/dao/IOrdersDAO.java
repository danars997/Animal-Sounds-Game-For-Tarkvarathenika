package com.easycook.dao;

public interface IOrdersDAO {
    String getAllOrdersJSON();
    ArrayList<Order> getAllOrdersList();
    void addNewOrder(Order order);
    void updateOrder(Order order);
    void deleteOrder(Order order);
}
