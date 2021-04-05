import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarEscolaModule } from './cadastrar/cadastrar-escola.module';
import { ListarEscolaModule } from './listar/listar-escola.module';

@NgModule({
  imports: [
    CommonModule,
    CadastrarEscolaModule,
    ListarEscolaModule
  ]
})
export class EscolaModule { }
