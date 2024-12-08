package com.yunussemree.articleportal.writer;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/writers", produces = MediaType.APPLICATION_JSON_VALUE)
public class WriterController {

    private final WriterService writerService;

    public WriterController(final WriterService writerService) {
        this.writerService = writerService;
    }

    @GetMapping
    public ResponseEntity<List<WriterDTO>> getAllWriters() {
        return ResponseEntity.ok(writerService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WriterDTO> getWriter(@PathVariable(name = "id") final Long id) {
        return ResponseEntity.ok(writerService.get(id));
    }

    @PostMapping
    @ApiResponse(responseCode = "201")
    public ResponseEntity<Long> createWriter(@RequestBody @Valid final WriterDTO writerDTO) {
        final Long createdId = writerService.create(writerDTO);
        return new ResponseEntity<>(createdId, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateWriter(@PathVariable(name = "id") final Long id,
            @RequestBody @Valid final WriterDTO writerDTO) {
        writerService.update(id, writerDTO);
        return ResponseEntity.ok(id);
    }

    @DeleteMapping("/{id}")
    @ApiResponse(responseCode = "204")
    public ResponseEntity<Void> deleteWriter(@PathVariable(name = "id") final Long id) {
        writerService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
