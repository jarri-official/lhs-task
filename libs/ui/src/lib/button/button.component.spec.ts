import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('click on button should emit event', () => {
    // given
    jest.spyOn(component.clicked, 'emit')
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    // when
    button.dispatchEvent(new Event('click'));

    // then
    expect(component.clicked.emit).toHaveBeenCalled();
  });
});
