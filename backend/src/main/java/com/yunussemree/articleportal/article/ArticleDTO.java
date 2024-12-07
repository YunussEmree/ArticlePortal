package com.yunussemree.articleportal.article;

import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ArticleDTO {

    private Long id;

    @Size(max = 255)
    private String title;

    @Size(max = 255)
    private String description;

    @Size(max = 255)
    private String content;

    @Size(max = 255)
    private String ownerId;

}
