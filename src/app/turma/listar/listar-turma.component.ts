import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ITurmaSalvarModel } from '../turma.model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-listar-turma',
  templateUrl: './listar-turma.component.html',
  styleUrls: ['./listar-turma.component.scss']
})
export class ListarTurmaComponent implements OnInit {

  @Output() turmas: ITurmaSalvarModel[] = [];

  constructor(
    private router: Router,
    private turmaService: TurmaService,
  ) { }

  ngOnInit(): void {
    this.turmas = this.turmaService.listarTurmas();
  }

  editar(id: number) {
    this.turmaService.editarTurma(id);
    this.turmaService.excluirTurma(id);
    this.router.navigate(['turma','editar'])
  }

  detalhes(id: number) {
    this.turmaService.editarTurma(id);
    this.router.navigate(['turma','detalhes'])
  }

  excluir(id: number) {
    this.turmaService.excluirTurma(id);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/turma']);
    return ;
  }

}
