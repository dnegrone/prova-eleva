import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IEscolaSalvarModel } from '../escola.model';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-listar-escola',
  templateUrl: './listar-escola.component.html',
  styleUrls: ['./listar-escola.component.scss']
})
export class ListarEscolaComponent implements OnInit {

  @Output() escolas: IEscolaSalvarModel[] = [];
  listaEscolas: string[] = [];

  constructor(
    private router: Router,
    private escolaService: EscolaService
  ) { }

  ngOnInit(): void {
    this.escolas = this.escolaService.listarEscolas();
    this.listaEscolas = this.escolaService.comboListarEscolas();
  }

  cadastrar() {
    this.router.navigate(['escola','cadastrar']);
  }

  editar(id: number) {
    this.escolaService.editarEscola(id);
    this.escolaService.excluirEscola(id);
    this.router.navigate(['escola','editar'])
  }

  detalhes(id: number) {
    this.escolaService.editarEscola(id);
    this.router.navigate(['escola','detalhes'])
  }

  excluir(id: number) {
    this.escolaService.excluirEscola(id);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/escola']);
    return ;
  }

}
