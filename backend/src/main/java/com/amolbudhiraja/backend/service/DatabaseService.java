package com.amolbudhiraja.backend.service;

import java.sql.*;
import java.util.*;

/** Database Service Interaction class. Should never be used directly. Meant to be extended by and used by children.*/
public class DatabaseService {

    protected String _getTableName() {
        return "OVERRIDEME";
    }

    /** Created the Connection object for the Remote SQL Database. */
    Connection _establishConnection() {
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
    public List<String> getColumnNames() {
        try {
            Connection conn = _establishConnection();
            DatabaseMetaData meta = conn.getMetaData();
            ResultSet rs = meta.getColumns(null, null, _getTableName(), null);
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
    public Map<String, Map<String, String>> getTableInfo() {
        List<String> tableColumnNames = getColumnNames();
        assert tableColumnNames != null;
        try {
            Connection conn = _establishConnection();
            Statement statement = conn.createStatement();
            ResultSet rs = statement.executeQuery("SELECT * FROM " + _getTableName());
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
    public String getTableValue(String id, String colName) {
        Map<String, Map<String, String>> tableInfo = getTableInfo();
        assert tableInfo != null && !tableInfo.isEmpty();
        Map<String, String> rowInfo = tableInfo.get(id);
        assert !rowInfo.isEmpty();
        return rowInfo.get(colName);
    }

    /** Updates the given value valName in column colName at id idVal in table with tableName. */
    public void updateTableValue(String colName, String idVal, String valName ) {
        Connection conn = _establishConnection();
        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "UPDATE " + _getTableName() +
                    " SET " + colName + " = " + valName +
                    " WHERE id = " + idVal + ";";
            statement.executeUpdate(sqlQuery);
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /** Delete the row with id idVal in the table with tableName. */
    public void deleteTableRow(String idVal) {
        Connection conn = _establishConnection();
        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "DELETE FROM " + _getTableName() + " WHERE id = " + idVal + ";";
            statement.executeUpdate(sqlQuery);
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /** Retrieves the next available id for the current table. */
    int _getNextId() {
        Connection conn = _establishConnection();
        int nextId = 1; // Starting id
        try {
            String getMaxIdQuery = "SELECT MAX(id) FROM " + _getTableName() + ";";
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

    /**
     * Get the row Information for a given row with id idVal.
     */
    public Map<String, String> getRowInfo(String idVal) {
        ///FIXME: Handle the case with the result set is empty.
        Connection conn = _establishConnection();
        List<String> tableColumnNames = getColumnNames();
        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "SELECT * FROM " + _getTableName() + " WHERE id = " + idVal + ";";
            ResultSet rs = statement.executeQuery(sqlQuery);
            Map<String, String> result = new HashMap<>();
            assert tableColumnNames != null;
            rs.next();
            for (String colName : tableColumnNames) {
                String colValue = rs.getString(colName);
                if (Objects.equals(colValue, "id")) {
                    continue;
                }
                result.put(colName, colValue);
            }
            conn.close();
            return result;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

}
