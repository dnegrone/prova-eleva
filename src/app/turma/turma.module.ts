import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastrarTurmaComponent } from './cadastrar/cadastrar-turma.component';
import { DetalhesTurmaComponent } from './detalhes/detalhes-turma.component';
import { EditarTurmaComponent } from './editar/editar-turma.component';
import { ListarTurmaComponent } from './listar/listar-turma.component';

@NgModule({
   declarations: [
       ListarTurmaComponent,
       CadastrarTurmaComponent,
       EditarTurmaComponent,
       DetalhesTurmaComponent
   ],
   imports: [
       CommonModule,
       RouterModule,
       ReactiveFormsModule
    ],
    exports: [
        ListarTurmaComponent,
        CadastrarTurmaComponent,
        EditarTurmaComponent,
        DetalhesTurmaComponent
    ]
})
export class TurmaModule {}