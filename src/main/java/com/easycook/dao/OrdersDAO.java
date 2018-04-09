package com.easycook.dao;

import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

@Repository
public class OrdersDAO implements IOrdersDAO{
    private final String DB_NAME = "easycook.db";

    /**
     * Creates connection to SQLite database file, if it does not exist - creates one
     * @return Connection object or null if something went wrong
     */
    private Connection connect(){
        String url = "jdbc:sqlite:" + DB_NAME;
        Connection connection = null;
        try
        {
            connection = DriverManager.getConnection(url);
        }
        catch (SQLException exception)
        {
            System.out.println(exception.getMessage());
        }

        return connection;
    }

    public ArrayList<Order> getAllOrdersList(){
        return new ArrayList<Order>();
    }

    public void addNewOrder(Order order){

    }

    public void updateOrder(Order order){

    }

    public void deleteOrder(Order order){

    }
}