package io.klabs.explorerj.controller;

import io.klabs.explorerj.model.Company;
import io.klabs.explorerj.model.User;
import io.klabs.explorerj.service.CompanyService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @SchemaMapping(typeName="Query", field="company")
    public Company getCompany(@Argument String id) {
        return companyService.getCompanyById(id);
    }

    @SchemaMapping(typeName = "Company", field = "users")
    public List<User> getUsers(Company company) {
        return companyService.getUsersByCompanyId(company.getId());
    }
}
