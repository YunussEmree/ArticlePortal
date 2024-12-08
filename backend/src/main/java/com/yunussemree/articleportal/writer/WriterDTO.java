package com.yunussemree.articleportal.writer;

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
    @Size(max = 255)
    private String about;

    @NotNull
    @Size(max = 255)
    private String photoUrl;

    @NotNull
    private Double rating;

}
