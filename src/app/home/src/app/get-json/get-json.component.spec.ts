import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJsonComponent } from './get-json.component';

describe('GetJsonComponent', () => {
  let component: GetJsonComponent;
  let fixture: ComponentFixture<GetJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
