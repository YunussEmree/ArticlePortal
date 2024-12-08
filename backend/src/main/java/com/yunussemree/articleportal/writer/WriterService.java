package com.yunussemree.articleportal.writer;

import java.util.List;

import com.yunussemree.articleportal.util.exceptions.NotFoundException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


@Service
public class WriterService {

    private final WriterRepository writerRepository;

    public WriterService(final WriterRepository writerRepository) {
        this.writerRepository = writerRepository;
    }

    public List<WriterDTO> findAll() {
        final List<Writer> writers = writerRepository.findAll(Sort.by("id"));
        return writers.stream()
                .map(writer -> mapToDTO(writer, new WriterDTO()))
                .toList();
    }

    public WriterDTO get(final Long id) {
        return writerRepository.findById(id)
                .map(writer -> mapToDTO(writer, new WriterDTO()))
                .orElseThrow(NotFoundException::new);
    }

    public Long create(final WriterDTO writerDTO) {
        final Writer writer = new Writer();
        mapToEntity(writerDTO, writer);
        return writerRepository.save(writer).getId();
    }

    public void update(final Long id, final WriterDTO writerDTO) {
        final Writer writer = writerRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        mapToEntity(writerDTO, writer);
        writerRepository.save(writer);
    }

    public void delete(final Long id) {
        writerRepository.deleteById(id);
    }

    private WriterDTO mapToDTO(final Writer writer, final WriterDTO writerDTO) {
        writerDTO.setId(writer.getId());
        writerDTO.setUsername(writer.getUsername());
        writerDTO.setAbout(writer.getAbout());
        writerDTO.setPhoto(writer.getPhoto());
        writerDTO.setRating(writer.getRating());
        return writerDTO;
    }

    private Writer mapToEntity(final WriterDTO writerDTO, final Writer writer) {
        writer.setUsername(writerDTO.getUsername());
        writer.setAbout(writerDTO.getAbout());
        writer.setPhoto(writerDTO.getPhoto());
        writer.setRating(writerDTO.getRating());
        return writer;
    }

}
