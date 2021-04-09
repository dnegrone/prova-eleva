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
    this.escolas = this.escolaService.listar();
    this.listaEscolas = this.escolaService.listarEscolas();
  }

  cadastrar() {
    this.router.navigate(['escola','cadastrar']);
  }
  editar() {
    return alert('Editar')
  }

  detalhes() {
    return alert('Entrando em detalhes da escola')
  }

  excluir() {
    return alert('A escola será excluída.')
    this.router.navigateByUrl('/escolas')
  }

}
