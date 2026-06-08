package com.marcelo.rotinaoperacional.repository;

import com.marcelo.rotinaoperacional.model.Atividade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtividadeRepository
        extends JpaRepository<Atividade, Long> {

}