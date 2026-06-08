package com.marcelo.rotinaoperacional.controller;

import com.marcelo.rotinaoperacional.model.Atividade;
import com.marcelo.rotinaoperacional.service.AtividadeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AtividadeController {

    private final AtividadeService service;

    public AtividadeController(AtividadeService service) {
        this.service = service;
    }

    @GetMapping("/atividades")
    public List<Atividade> listarTodas() {
        return service.listarTodas();
    }
}
