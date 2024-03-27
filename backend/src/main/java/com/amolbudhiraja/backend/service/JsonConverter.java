package com.amolbudhiraja.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Map;

public class JsonConverter {

    /** Converts a nested map of strings to JSON.
     * Should be used in the Controllers to output a JSON response for the client.
     * */
    public static String mapToJsonNested(Map<String, Map<String, String>> map) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(map);
    }

    /** Converts a map of strings to JSON.
     * Should be used in the Controllers to output a JSON response for the client.
     * */
    public static String mapToJson(Map<String, String> map) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(map);
    }

    /** Converts a map of string lists to JSON.
     * Should be used in the Controllers to output a JSON response for the client.
     * */
    public static String mapToJsonList(Map<String, List<String>> map) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(map);
    }
}

