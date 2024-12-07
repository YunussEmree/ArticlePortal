package com.yunussemree.articleportal.article;

import com.yunussemree.articleportal.util.exceptions.NotFoundException;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleService(final ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<ArticleDTO> findAll() {
        final List<Article> articles = articleRepository.findAll(Sort.by("id"));
        return articles.stream()
                .map(article -> mapToDTO(article, new ArticleDTO()))
                .toList();
    }

    public ArticleDTO get(final Long id) {
        return articleRepository.findById(id)
                .map(article -> mapToDTO(article, new ArticleDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final ArticleDTO articleDTO) {
        final Article article = new Article();
        mapToEntity(articleDTO, article);
        return articleRepository.save(article).getId();
    }

    public void update(final Long id, final ArticleDTO articleDTO) {
        final Article article = articleRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(articleDTO, article);
        articleRepository.save(article);
    }

    public void delete(final Long id) {
        articleRepository.deleteById(id);
    }

    private ArticleDTO mapToDTO(final Article article, final ArticleDTO articleDTO) {
        articleDTO.setId(article.getId());
        articleDTO.setTitle(article.getTitle());
        articleDTO.setDescription(article.getDescription());
        articleDTO.setContent(article.getContent());
        articleDTO.setOwnerId(article.getOwnerId());
        return articleDTO;
    }

    private Article mapToEntity(final ArticleDTO articleDTO, final Article article) {
        article.setTitle(articleDTO.getTitle());
        article.setDescription(articleDTO.getDescription());
        article.setContent(articleDTO.getContent());
        article.setOwnerId(articleDTO.getOwnerId());
        return article;
    }

}
