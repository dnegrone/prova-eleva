import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarEscolaComponent } from './escola/listar/listar-escola.component';
import { CadastrarEscolaComponent } from './escola/cadastrar/cadastrar-escola.component';
import { EditarEscolaComponent } from './escola/editar/editar-escola.component';
import { DetalhesEscolaComponent } from './escola/detalhes/detalhes-escola.component';
import { CadastrarTurmaComponent } from './turma/cadastrar/cadastrar-turma.component';
import { DetalhesTurmaComponent } from './turma/detalhes/detalhes-turma.component';
import { EditarTurmaComponent } from './turma/editar/editar-turma.component';
import { ListarTurmaComponent } from './turma/listar/listar-turma.component';

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
    path: 'escola/editar',
    component: EditarEscolaComponent
  },
  {
    path: 'escola/detalhes',
    component: DetalhesEscolaComponent
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
    path: 'turma/editar',
    component: EditarTurmaComponent
  },
  {
    path: 'turma/detalhes',
    component: DetalhesTurmaComponent
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
  imports: [RouterModule.forRoot(routes)], //, { onSameUrlNavigation: 'reload'}
  exports: [RouterModule]
})
export class AppRoutingModule { }
