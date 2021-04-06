import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTurmaComponent } from './listar/listar-turma.component';
import { CadastrarTurmaComponent } from './cadastrar/cadastrar-turma.component';

@NgModule({
    declarations: [
        ListarTurmaComponent,
        CadastrarTurmaComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TurmaModule { }
