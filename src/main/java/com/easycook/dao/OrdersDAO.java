package com.easycook.dao;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Repository;

import java.sql.*;

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

    public String getAllOrdersJSON(){
        String query = "SELECT * FROM Orders;";
        JSONArray jsonArrayResult = new JSONArray();
        try (Connection conn = this.connect();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            int columnCount = rs.getMetaData().getColumnCount();
            while (rs.next()) {
                JSONObject jsonObjectResult = new JSONObject();
                for (int i = 0; i < columnCount; i++) {
                    jsonObjectResult.put(
                            rs.getMetaData().getColumnName(i + 1),
                            rs.getString(i + 1)); // sqlite starts counting from 1
                }
                jsonArrayResult.put(jsonObjectResult);
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        if (jsonArrayResult.length() == 1) {
            return jsonArrayResult.getJSONObject(0).toString();
        } else {
            return jsonArrayResult.toString();
        }
    }

    public void addNewOrder(Order order){
        String query = "INSERT INTO Orders (dish, numberOfServings, contactName, city, region, address, comments, contactNumber) VALUES(?,?,?,?,?,?,?,?)";
        try (Connection connection = this.connect();
            PreparedStatement preparedStatement = connection.prepareStatement(query))
        {
            preparedStatement.setString(1, order.dish);
            preparedStatement.setInt(2, order.numberOfServings);
            preparedStatement.setString(3, order.contactName);
            preparedStatement.setString(4, order.city);
            preparedStatement.setString(5, order.region);
            preparedStatement.setString(6, order.address);
            preparedStatement.setString(7, order.comments);
            preparedStatement.setString(8, order.contactNumber);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void updateOrder(Order order){

    }

    public void deleteOrder(Order order){

    }
}