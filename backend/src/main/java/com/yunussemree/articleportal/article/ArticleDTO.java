package com.yunussemree.articleportal.article;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ArticleDTO {

    private Long id;

    @NotNull
    @Size(max = 255)
    private String title;

    @NotNull
    private String content;

    @NotNull
    @Size(max = 255)
    private String author;

    @NotNull
    private String thumbnail;

    @NotNull
    private Integer readTime;

}
