import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarEscolaComponent } from './escola/listar/listar-escola.component';
import { CadastrarEscolaComponent } from './escola/cadastrar/cadastrar-escola.component';
import { ListarTurmaComponent } from './turma/listar/listar-turma.component';
import { CadastrarTurmaComponent } from './turma/cadastrar/cadastrar-turma.component';

const routes: Routes = [
  {
    path: 'escola',
    component: ListarEscolaComponent
  },
  {
    path: 'escola/cadastrar',
    component: CadastrarEscolaComponent
  },
  {
    path: 'turma',
    component: ListarTurmaComponent
  },
  {
    path: 'turma/cadastrar',
    component: CadastrarTurmaComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
