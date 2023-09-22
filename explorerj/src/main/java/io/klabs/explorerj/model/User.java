package io.klabs.explorerj.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class User {
    private String id;
    private String firstName;
    private Integer age;
    private String companyId;
}
