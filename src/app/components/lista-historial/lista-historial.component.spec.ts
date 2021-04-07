import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHistorialComponent } from './lista-historial.component';

describe('ListaHistorialComponent', () => {
  let component: ListaHistorialComponent;
  let fixture: ComponentFixture<ListaHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
