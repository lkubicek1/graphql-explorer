package io.klabs.explorerj.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Company {
    private String id;
    private String name;
    private String description;
    private List<User> users;
}
