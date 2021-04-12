import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EscolaService } from '../../escola/escola.service';
import { ITurmaSalvarModel } from '../turma.model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-cadastrar-turma',
  templateUrl: './cadastrar-turma.component.html',
  styleUrls: ['./cadastrar-turma.component.scss']
})
export class CadastrarTurmaComponent implements OnInit {

  listaEscolas: string[] = [];
  cadastrarTurmaForm!: FormGroup;
  enviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private escolaService: EscolaService,
    private turmaService: TurmaService,
    
  ) { }

  ngOnInit(): void {
    this.listaEscolas = this.escolaService.comboListarEscolas();

    this.cadastrarTurmaForm = this.formBuilder.group({
      nomeEscola: ['', Validators.required],
      turma: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.cadastrarTurmaForm.controls; }
  get formValues() { return this.cadastrarTurmaForm.value as ITurmaSalvarModel;}

  onSubmit() {
    this.enviado = true;
    // Formulário inválido não será enviado
    if(this.cadastrarTurmaForm.invalid) {
      return;
    }
    this.turmaService.salvar(this.formValues);
    this.router.navigateByUrl('/turma');
  }

}
