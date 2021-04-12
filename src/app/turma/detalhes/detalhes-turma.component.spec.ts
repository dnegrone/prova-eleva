import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTurmaComponent } from './detalhes-turma.component';

describe('DetalhesTurmaComponent', () => {
  let component: DetalhesTurmaComponent;
  let fixture: ComponentFixture<DetalhesTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
