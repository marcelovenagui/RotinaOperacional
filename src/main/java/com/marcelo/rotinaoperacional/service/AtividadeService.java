package com.marcelo.rotinaoperacional.service;

import com.marcelo.rotinaoperacional.model.Atividade;
import com.marcelo.rotinaoperacional.repository.AtividadeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtividadeService {

    private final AtividadeRepository repository;

    public AtividadeService(AtividadeRepository repository) {
        this.repository = repository;
    }

    public List<Atividade> listarTodas() {
        return repository.findAll();
    }
}
