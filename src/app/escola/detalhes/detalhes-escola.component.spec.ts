import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEscolaComponent } from './detalhes-escola.component';

describe('DetalhesEscolaComponent', () => {
  let component: DetalhesEscolaComponent;
  let fixture: ComponentFixture<DetalhesEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEscolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
