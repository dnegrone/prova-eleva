import { Component, OnInit, Output } from '@angular/core';
import { ITurmaSalvarModel } from '../turma.model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-detalhes-turma',
  templateUrl: './detalhes-turma.component.html',
  styleUrls: ['./detalhes-turma.component.scss']
})
export class DetalhesTurmaComponent implements OnInit {

  @Output() turma: ITurmaSalvarModel[] = [];
  nomeEscola: string = '';
  nomeTurma: string = '';
  
  constructor(private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.turma = this.turmaService.listarTurmaParaEditar();
    this.turma.map(turma => {
      this.nomeEscola = turma.nomeEscola;
      this.nomeTurma = turma.turma;
    })
  }

}
