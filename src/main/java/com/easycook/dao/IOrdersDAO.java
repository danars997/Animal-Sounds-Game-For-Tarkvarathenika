package com.easycook.dao;

import java.util.ArrayList;

public interface IOrdersDAO{
    String getAllOrdersJSON();
    void addNewOrder(Order order);
}