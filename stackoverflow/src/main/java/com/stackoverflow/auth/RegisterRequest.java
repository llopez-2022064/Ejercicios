package com.stackoverflow.auth;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    Integer id;
    String name;
    String surname;
    String email;
    String username;
    String password;
    Integer age;
    Integer dpi;
    boolean status;
    Date created;
}
