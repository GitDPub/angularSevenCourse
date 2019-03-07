import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWelcomeComponent } from './page-welcome.component';

describe('PageWelcomeComponent', () => {
  let component: PageWelcomeComponent;
  let fixture: ComponentFixture<PageWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
