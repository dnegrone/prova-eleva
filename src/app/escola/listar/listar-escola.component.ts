import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-escola',
  templateUrl: './listar-escola.component.html',
  styleUrls: ['./listar-escola.component.scss']
})
export class ListarEscolaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
  }

}
