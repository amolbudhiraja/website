package com.amolbudhiraja.backend.service;

import java.sql.*;
import java.util.*;

/** Web Service containing the endpoints for the blog. */
public class ArticleService extends DatabaseService {

    /** Overrides the DatabaseService table name to return the valid table name for this service: articles. */
    @Override
    protected String _getTableName() {
        return "articles";
    }

    /** Gets the articles of a specific category. Result maps articleID to articleTitle.*/
    public Map<String, String> getCategoryArticles(String categoryName) {
        Connection conn = _establishConnection();
        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "SELECT * FROM " + _getTableName() + " WHERE category = " + categoryName + ";";
            ResultSet rs = statement.executeQuery(sqlQuery);
            Map<String, String> result = new HashMap<>();
            String idVal = rs.getString("id");
            String titleVal = rs.getString("title");
            result.put(idVal, titleVal);
            conn.close();
            return result;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    /** Returns a sorted Map of the most recent three articles. */
    public Map<String, String> getRecentArticles() {
        Connection conn = _establishConnection();
        LinkedHashMap<String, String> recentArticles = new LinkedHashMap<>();

        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "SELECT id, title FROM " + _getTableName() + " ORDER BY date DESC LIMIT 3;";
            ResultSet rs = statement.executeQuery(sqlQuery);

            while (rs.next()) {
                String id = rs.getString("id");
                String title = rs.getString("title");
                recentArticles.put(id, title);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (conn != null && !conn.isClosed()) {
                    conn.close();
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
        return recentArticles;
    }

    /** Gets the categories and the articleIDs associated with them. */
    public Map<String, List<String>> getCategories() {
        Connection conn = _establishConnection();
        Map<String, List<String>> categoryMap = new HashMap<>();

        try {
            Statement statement = conn.createStatement();
            String sqlQuery = "SELECT category, id FROM " + _getTableName() + ";";
            ResultSet rs = statement.executeQuery(sqlQuery);

            while (rs.next()) {
                String category = rs.getString("category");
                String id = rs.getString("id");

                if (categoryMap.containsKey(category)) {
                    categoryMap.get(category).add(id);
                } else {
                    List<String> idList = new ArrayList<>();
                    idList.add(id);
                    categoryMap.put(category, idList);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (conn != null && !conn.isClosed()) {
                    conn.close();
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
        return categoryMap;
    }


    /** Insert a new row into the articles table with the provided values. */
    public void insertArticleRow(String title, String date, String author,
                                        String views, String category, String keywords,
                                        String body, String summary, String image, String url) {
        Connection conn = _establishConnection();
        try {
            int nextId = _getNextId();

            String sqlQuery = "INSERT INTO " + _getTableName() + " (id, title, date, author, views, category, keywords, " +
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
