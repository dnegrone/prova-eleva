import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarTurmaModule } from './cadastrar/cadastrar-turma.module';
import { ListarTurmaModule } from './listar/listar-turma.module';

@NgModule({
    imports: [
        CommonModule,
        CadastrarTurmaModule,
        ListarTurmaModule
    ]
})
export class TurmaModule { }
