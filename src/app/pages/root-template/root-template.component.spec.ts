import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootTemplateComponent } from './root-template.component';

describe('RootTemplateComponent', () => {
  let component: RootTemplateComponent;
  let fixture: ComponentFixture<RootTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
