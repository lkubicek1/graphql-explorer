package io.klabs.explorerj.service;

import io.klabs.explorerj.model.Company;
import io.klabs.explorerj.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;

@Service
public class CompanyService {

    //TODO: Externalize this config
    private final String BASE_URL = "http://localhost:3001/companies";

    private final RestTemplate restTemplate;

    @Autowired
    public CompanyService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public Company getCompanyById(String id) {
        return restTemplate.getForObject(BASE_URL + "/" + id, Company.class);
    }

    public List<User> getUsersByCompanyId(String companyId) {
        String url = "http://localhost:3001/companies/" + companyId + "/users";
        return List.of(Objects.requireNonNull(restTemplate.getForObject(url, User[].class)));
    }
}
