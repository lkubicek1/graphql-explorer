package io.klabs.explorerj.controller;

import io.klabs.explorerj.model.User;
import io.klabs.explorerj.service.UserService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

@Controller
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @SchemaMapping(typeName = "Query", field = "user")
    public User getUser(@Argument String id) {
        return userService.getUserById(id);
    }

    @SchemaMapping(typeName = "Mutation", field = "addUser")
    public User addUser(
            @Argument String firstName,
            @Argument Integer age,
            @Argument String companyId) {
        return userService.addUser(firstName, age, companyId);
    }

    @SchemaMapping(typeName = "Mutation", field = "editUser")
    public User editUser(
            @Argument String id,
            @Argument String firstName,
            @Argument Integer age,
            @Argument String companyId) {
        return userService.editUser(id, firstName, age, companyId);
    }

    @SchemaMapping(typeName = "Mutation", field = "deleteUser")
    public User deleteUser(@Argument String id) {
        return userService.deleteUser(id);
    }
}
