import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../core/storage/storage.service';
import { IEscolaSalvarModel } from '../escola.model';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-cadastrar-escola',
  templateUrl: './cadastrar-escola.component.html',
  styleUrls: ['./cadastrar-escola.component.scss']
})
export class CadastrarEscolaComponent implements OnInit {

  cadastrarEscolaForm!: FormGroup;
  enviado = false;
  KEY: string = 'escola';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private escolaService: EscolaService
  ) {}

  ngOnInit(): void {
    this.cadastrarEscolaForm = this.formBuilder.group({
      nomeEscola: ['', Validators.required],
      nomeResponsavelEscola: ['', Validators.required],
      cnpj: ['', Validators.required],
      qtdAlunos: ['', Validators.required]
    });

    // this.getSessionStorage();
  }

  // convenience getter for easy access to form fields
  get f() { return this.cadastrarEscolaForm.controls; }
  get formValues() { return this.cadastrarEscolaForm.value as IEscolaSalvarModel;}

  onSubmit() {
    this.enviado = true;

    // Formulário inválido não será enviado
    if(this.cadastrarEscolaForm.invalid) {
      return;
    }

    // Mostrando os valores salvos no sessionStorage alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.cadastrarEscolaForm.value, null, 4));
    // this.storageService.setSessionStorage(this.KEY, this.formValues);
    this.escolaService.salvar(this.formValues);
    this.router.navigateByUrl('/escola');
  }

  onReset() {
    this.enviado = false;
    this.cadastrarEscolaForm.reset();
  }

  // getSessionStorage() {
  //   if (this.storageService.hasSessionStorage('modificar')) {
      
  //     const dadosEscola = this.storageService.getSessionStorage('escola');

  //     this.cadastrarEscolaForm = this.formBuilder.group({
  //       nomeEscola: [dadosEscola.nomeEscola, Validators.required],
  //       nomeResponsavelEscola: [dadosEscola.nomeResponsavelEscola, Validators.required],
  //       cnpj: [dadosEscola.cnpj, Validators.required],
  //       qtdAlunos: [dadosEscola.qtdAlunos, Validators.required]
  //     });
  //   }
  // }

}
