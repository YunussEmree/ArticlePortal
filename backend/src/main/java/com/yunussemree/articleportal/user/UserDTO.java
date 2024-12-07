package com.yunussemree.articleportal.user;

import com.ademm.nobetcitakip.role.Role;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;


@Getter
@Setter
public class UserDTO {

    private Long id;

    @Size(max = 255)
    private String name;

    @Size(max = 255)
    private String surname;

    private String email;

    @Size(max = 255)
    private String password;

    @Size(max = 255)
    private Collection<Role> roles;

    private String status;

}
