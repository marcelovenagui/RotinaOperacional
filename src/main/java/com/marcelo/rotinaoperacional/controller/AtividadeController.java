package com.marcelo.rotinaoperacional.controller;

import com.marcelo.rotinaoperacional.model.Atividade;
import com.marcelo.rotinaoperacional.service.AtividadeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    @PostMapping("/atividades")
    public Atividade salvar(@RequestBody Atividade atividade) {

        System.out.println("================================");
        System.out.println("Descricao: " + atividade.getDescricao());
        System.out.println("Status: " + atividade.getStatus());
        System.out.println("Observacao: " + atividade.getObservacao());
        System.out.println("================================");

        return service.salvar(atividade);
    }
}
