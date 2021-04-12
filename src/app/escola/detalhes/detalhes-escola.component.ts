import { Component, OnInit, Output } from '@angular/core';

import { IEscolaSalvarModel } from '../escola.model';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-detalhes-escola',
  templateUrl: './detalhes-escola.component.html',
  styleUrls: ['./detalhes-escola.component.scss']
})
export class DetalhesEscolaComponent implements OnInit {

  @Output() escola: IEscolaSalvarModel[] = [];

  @Output() nomeEscola: string = '';
  @Output() nomeResponsavelEscola: string = '';
  @Output() cnpj: number = 0;
  @Output() telefone: number = 0;

  constructor(
    private escolaService: EscolaService
  ) { }

  ngOnInit(): void {
    this.escola = this.escolaService.listarEscolaParaEditar();
    this.escola.map(escola => {
      this.nomeEscola = escola.nomeEscola;
      this.nomeResponsavelEscola = escola.nomeResponsavelEscola;
      this.cnpj = escola.cnpj;
      this.telefone = escola.telefone;
    });    
  }

}
