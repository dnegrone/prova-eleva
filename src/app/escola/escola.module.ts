import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ListarEscolaComponent } from './listar/listar-escola.component';
import { CadastrarEscolaComponent } from './cadastrar/cadastrar-escola.component';
import { EditarEscolaComponent } from './editar/editar-escola.component';
import { DetalhesEscolaComponent } from './detalhes/detalhes-escola.component';

@NgModule({
   declarations: [
       ListarEscolaComponent,
       CadastrarEscolaComponent,
       EditarEscolaComponent,
       DetalhesEscolaComponent
   ],
   imports: [
       CommonModule,
       RouterModule,
       ReactiveFormsModule
    ],
    exports: [
        ListarEscolaComponent,
        CadastrarEscolaComponent,
        EditarEscolaComponent,
        DetalhesEscolaComponent
    ]
})
export class EscolaModule {}