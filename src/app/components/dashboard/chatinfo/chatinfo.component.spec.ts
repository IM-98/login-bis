import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatinfoComponent } from './chatinfo.component';

describe('ChatinfoComponent', () => {
  let component: ChatinfoComponent;
  let fixture: ComponentFixture<ChatinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
