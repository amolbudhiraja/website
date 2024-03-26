package com.amolbudhiraja.backend.service;

import java.sql.*;
import java.sql.Date;
import java.util.*;

public class DatabaseService {

    /** Created the Connection object for the Remote SQL Database. */
    private static Connection _establishConnection() {
        String dbURL = System.getenv("DB_URL");
        String dbUsername = System.getenv("DB_USERNAME");
        String dbPassword = System.getenv("DB_PASSWORD");
        Connection dbConnection = null;
        try {
            dbConnection = DriverManager.getConnection(dbURL, dbUsername, dbPassword);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dbConnection;
    }

    /** Returns the column names for the given table with tableName. */
    public static List<String> getColumnNames(String tableName) {
        try {
            Connection conn = _establishConnection();
            DatabaseMetaData meta = conn.getMetaData();
            ResultSet rs = meta.getColumns(null, null, tableName, null);
            List<String> result = new ArrayList<>();
            while (rs.next()) {
                String columnName = rs.getString("COLUMN_NAME");
                result.add(columnName);
            }
            conn.close();
            return result;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    /** Aggregates the table information for the given table with tableName. */
    public static Map<String, Map<String, String>> getTableInfo(String tableName) {
        List<String> tableColumnNames = getColumnNames(tableName);
        assert tableColumnNames != null;
        try {
            Connection conn = _establishConnection();
            Statement statement = conn.createStatement();
            ResultSet rs = statement.executeQuery("SELECT * FROM " + tableName);
            Map<String, Map<String, String>> result = new HashMap<>();
            while (rs.next()) {
                Map<String, String> currRowInfo = new HashMap<>();
                String id = rs.getString("id");
                for (String colName: tableColumnNames) {
                    String colValue = rs.getString(colName);
                    if (Objects.equals(colValue, "id")) { continue; }
                    currRowInfo.put(colName, colValue);
                }
                result.put(id, currRowInfo);
            }
            conn.close();
            return result;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    /** Return the value of column colName in row with id id from table tableName.*/
    public static String getTableValue(String tableName, String id, String colName) {
        Map<String, Map<String, String>> tableInfo = getTableInfo(tableName);
        assert tableInfo != null && !tableInfo.isEmpty();
        Map<String, String> rowInfo = tableInfo.get(id);
        assert !rowInfo.isEmpty();
        return rowInfo.get(colName);
    }

    /** Updates the given value valName in column colName at id idVal in table with tableName. */
    public static void updateTableValue(String tableName, String colName, String idVal, String valName ) {
        Connection conn = _establishConnection();
        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "UPDATE " + tableName +
                    " SET " + colName + " = " + valName +
                    " WHERE id = " + idVal + ";";
            statement.executeUpdate(sqlQuery);
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /** Delete the row with id idVal in the table with tableName. */
    public static void deleteTableRow(String tableName, String idVal) {
        Connection conn = _establishConnection();
        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "DELETE FROM " + tableName + " WHERE id = " + idVal + ";";
            statement.executeUpdate(sqlQuery);
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /** Retrieves the next available id for the articles table. */
    private static int _getNextId() {
        Connection conn = _establishConnection();
        int nextId = 1; // Starting id
        try {
            String getMaxIdQuery = "SELECT MAX(id) FROM articles";
            Statement statement = conn.createStatement();
            ResultSet resultSet = statement.executeQuery(getMaxIdQuery);
            if (resultSet.next()) {
                nextId = resultSet.getInt(1) + 1;
            }
            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return nextId;
    }

    /** Insert a new row into the articles table with the provided values. */
    public static void insertArticleRow(String title, String date, String author,
                                        String views, String category, String keywords,
                                        String body, String summary, String image, String url) {
        Connection conn = _establishConnection();
        try {
            int nextId = _getNextId();

            String sqlQuery = "INSERT INTO articles (id, title, date, author, views, category, keywords, " +
                    "body, summary, image, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            PreparedStatement statement = conn.prepareStatement(sqlQuery);

            statement.setInt(1, nextId);
            statement.setString(2, title);
            statement.setString(3, date);
            statement.setString(4, author);
            statement.setString(5, views);
            statement.setString(6, category);
            statement.setString(7, keywords);
            statement.setString(8, body);
            statement.setString(9, summary);
            statement.setString(10, image);
            statement.setString(11, url);

            statement.executeUpdate();
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
