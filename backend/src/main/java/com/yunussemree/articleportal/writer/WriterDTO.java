package com.yunussemree.articleportal.writer;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class WriterDTO {

    private Long id;

    @NotNull
    @Size(max = 255)
    private String username;

    @NotNull
    @Size(max = 2555)
    private String bio;

    @NotNull
    @Size(max = 255)
    private String about;

    @NotNull
    @Size(max = 255)
    private String photo;

    @NotNull
    private Double rating;

    @Size(max = 255)
    private String articles;

    @Size(max = 255)
    private String projects;

    @Size(max = 255)
    private String awards;

}
