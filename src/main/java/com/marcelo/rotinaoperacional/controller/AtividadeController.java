package com.marcelo.rotinaoperacional.controller;

import com.marcelo.rotinaoperacional.model.Atividade;
import com.marcelo.rotinaoperacional.service.AtividadeService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/atividades")
public class AtividadeController {

    private final AtividadeService service;

    public AtividadeController(AtividadeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Atividade> listarTodas() {
        return service.listarTodas();
    }

    @PostMapping
    public Atividade salvar(@RequestBody Atividade atividade) {
        return service.salvar(atividade);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        service.excluir(id);
    }

    @PutMapping("/{id}")
    public Atividade atualizar(
            @PathVariable Long id,
            @RequestBody Atividade atividade) {

        return service.atualizar(id, atividade);
    }
}
