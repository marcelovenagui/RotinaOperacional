package com.marcelo.rotinaoperacional.model;

import jakarta.persistence.*;

@Entity
@Table(name = "atividade")
public class Atividade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    private String status;

    private String observacao;

}
