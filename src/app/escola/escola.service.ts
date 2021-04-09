import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage/storage.service';
import { IEscolaSalvarModel } from './escola.model';

@Injectable({ providedIn: 'root'})

export class EscolaService {
    private readonly escolaKey: string = 'escola'; // lint vai reclamar (tipagem redundante)

    constructor(private storageService: StorageService) {}

    salvar(escola: IEscolaSalvarModel) {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        if(escolas) {            
            escolas.push(escola);
            this.storageService.setSessionStorage(this.escolaKey, escolas);
            return ;    
        }
        this.storageService.setSessionStorage(this.escolaKey, [escola]);
    }

    listar(): IEscolaSalvarModel[] {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        return escolas || [];
    }

    listarEscolas(): string[] {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        return escolas.map((escola: IEscolaSalvarModel) => escola.nomeEscola)
    }
}