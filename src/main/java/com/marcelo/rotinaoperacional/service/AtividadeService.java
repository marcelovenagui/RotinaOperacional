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

    public Atividade salvar(Atividade atividade) {
        return repository.save(atividade);
    }

    public void excluir(Long id) {
        repository.deleteById(id);
    }

    public Atividade atualizar(Long id, Atividade atividadeAtualizada) {

        Atividade atividade = repository.findById(id)
                .orElseThrow();

        atividade.setDescricao(atividadeAtualizada.getDescricao());
        atividade.setStatus(atividadeAtualizada.getStatus());
        atividade.setObservacao(atividadeAtualizada.getObservacao());

        return repository.save(atividade);
    }

}
