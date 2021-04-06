import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ListarEscolaComponent } from './listar/listar-escola.component';
import { CadastrarEscolaComponent } from './cadastrar/cadastrar-escola.component';
import { DetalhesEscolaComponent } from './detalhes/detalhes-escola.component';

@NgModule({
   declarations: [
       ListarEscolaComponent,
       CadastrarEscolaComponent,
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
        DetalhesEscolaComponent
    ]
})
export class EscolaModule {}