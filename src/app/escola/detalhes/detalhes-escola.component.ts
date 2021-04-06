import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-escola',
  templateUrl: './detalhes-escola.component.html',
  styleUrls: ['./detalhes-escola.component.scss']
})
export class DetalhesEscolaComponent implements OnInit {

  dadosEscola = JSON.parse(sessionStorage.escola);

  @Output() nomeEscola: string = '';
  @Output() nomeResponsavelEscola: string = '';
  @Output() cnpj: number = 0;
  @Output() qtdAlunos: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.nomeEscola = this.dadosEscola.nomeEscola;
    this.nomeResponsavelEscola = this.dadosEscola.nomeResponsavelEscola;
    this.cnpj = this.dadosEscola.cnpj;
    this.qtdAlunos = this.dadosEscola.qtdAlunos;
  }

  modificarCadastroEscola() {
    sessionStorage.setItem('modificar', 'true');
    this.router.navigateByUrl('/escola/cadastrar')
  }

  confirmaCadastroEscola(){
    alert('Escola cadastrada com sucesso!');
    sessionStorage.removeItem('escola');
    this.router.navigateByUrl('/escola');
  }

}
