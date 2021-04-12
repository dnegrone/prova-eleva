import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../core/storage/storage.service';
import { IEscolaSalvarModel } from '../escola.model';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-editar-escola',
  templateUrl: './editar-escola.component.html',
  styleUrls: ['./editar-escola.component.scss']
})
export class EditarEscolaComponent implements OnInit {

  @Output() escola: IEscolaSalvarModel[] = [];
  
  EditarEscolaForm!: FormGroup;
  enviado = false;
  KEY: string = 'escola';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private escolaService: EscolaService
  ) {}

  ngOnInit(): void {
    this.escola = this.escolaService.listarEscolaParaEditar();

    this.EditarEscolaForm = this.formBuilder.group({
      nomeEscola: ['', Validators.required],
      nomeResponsavelEscola: ['', Validators.required],
      telefone: ['', Validators.required],
      cnpj: ['', Validators.required]
    });

    this.escola.map(escola => {
      this.EditarEscolaForm.setValue({
        nomeEscola: escola.nomeEscola,
        nomeResponsavelEscola: escola.nomeResponsavelEscola,
        telefone: escola.telefone,
        cnpj: escola.cnpj
      })
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.EditarEscolaForm.controls; }
  get formValues() { return this.EditarEscolaForm.value as IEscolaSalvarModel;}

  onSubmit() {
    this.enviado = true;

    // Formulário inválido não será enviado
    if(this.EditarEscolaForm.invalid) {
      return;
    }

    this.escolaService.salvar(this.formValues);
    this.router.navigateByUrl('/escola');
  }

  onReset() {
    this.enviado = false;
    this.EditarEscolaForm.reset();
  }

}
