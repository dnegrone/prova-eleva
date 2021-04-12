import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EscolaService } from '../../escola/escola.service';
import { ITurmaSalvarModel } from '../turma.model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrls: ['./editar-turma.component.scss']
})
export class EditarTurmaComponent implements OnInit {

  @Output() turma: ITurmaSalvarModel[] = [];

  listaEscolas: string[] = [];
  EditarTurmaForm: FormGroup = new FormGroup({
    
  });
  enviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private escolaService: EscolaService,
    private turmaService: TurmaService,
  ) { }

  ngOnInit(): void {
    this.listaEscolas = this.escolaService.comboListarEscolas();    
    this.turma = this.turmaService.listarTurmaParaEditar();

    this.EditarTurmaForm = this.formBuilder.group({
      nomeEscola: ['', [Validators.required]],
      turma: ['', Validators.required]
    });

    this.turma.map(turma => {
      this.EditarTurmaForm.setValue({
        nomeEscola: turma.nomeEscola,
        turma: turma.turma
      })
      // this.EditarTurmaForm.controls['turma'].setValue(turma.turma, {onlySelf: true})
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.EditarTurmaForm.controls; }
  get formValues() { return this.EditarTurmaForm.value as ITurmaSalvarModel;}

  onSubmit() {
    this.enviado = true;
    if(this.EditarTurmaForm.invalid) {
      return;
    }
    this.turmaService.salvar(this.formValues);
    this.router.navigateByUrl('/turma');
  }

  onReset() {
    this.enviado = false;
    this.EditarTurmaForm.reset();
  }

}
