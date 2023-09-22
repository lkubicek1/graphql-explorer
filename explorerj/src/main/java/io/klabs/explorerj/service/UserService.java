package io.klabs.explorerj.service;

import io.klabs.explorerj.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    //TODO: Externalize this config
    private final RestTemplate restTemplate;

    @Autowired
    public UserService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public User getUserById(String id) {
        String url = "http://localhost:3001/users/" + id;
        return restTemplate.getForObject(url, User.class);
    }

    public User addUser(String firstName, Integer age, String companyId) {
        String url = "http://localhost:3001/users";
        Map<String, Object> params = new HashMap<>();
        params.put("firstName", firstName);
        params.put("age", age);
        params.put("companyId", companyId);
        return restTemplate.postForObject(url, params, User.class);
    }

    public User editUser(String id, String firstName, Integer age, String companyId) {
        String url = "http://localhost:3001/users/" + id;
        Map<String, Object> params = new HashMap<>();
        if (firstName != null) params.put("firstName", firstName);
        if (age != null) params.put("age", age);
        if (companyId != null) params.put("companyId", companyId);
        restTemplate.patchForObject(url, params, Void.class);
        return getUserById(id);
    }

    public User deleteUser(String id) {
        String url = "http://localhost:3001/users/" + id;
        User user = getUserById(id); // Get the user before deletion
        restTemplate.delete(url);
        return user; // Return the deleted user
    }
}
