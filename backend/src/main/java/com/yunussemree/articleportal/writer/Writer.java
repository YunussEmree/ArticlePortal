package com.yunussemree.articleportal.writer;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import java.time.OffsetDateTime;

import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


@Entity
@Table(name = "Writers")
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
public class Writer {

    @Id
    @Column(nullable = false, updatable = false)
    @SequenceGenerator(
            name = "writer_sequence",
            sequenceName = "writer_sequence",
            allocationSize = 1,
            initialValue = 10000
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "writer_sequence"
    )
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String about;

    @Column(nullable = false)
    @Size(max = 50000)
    private String bio;

    @Column(nullable = false)
    private String photo;

    @Column(nullable = false)
    private Double rating;

    @Column(nullable = false)
    private String articles;

    @Column(nullable = false)
    private String projects;

    @Column(nullable = false)
    private String awards;


}
