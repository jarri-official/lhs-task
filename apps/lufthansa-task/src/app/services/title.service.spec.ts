import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { MockProvider } from 'ng-mocks';

import { TitleService } from './title.service';
import { environment } from '../../environments/environment';

describe('TitleService', () => {
  let service: TitleService;
  let titleClass: Title

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(Title)]
    });
    service = TestBed.inject(TitleService);
    titleClass = TestBed.inject(Title);
  });

  it('should set title if provided', () => {
    // given
    const siteTitle: string = environment.siteTitle;
    const title = 'Test';
    jest.spyOn(titleClass, 'setTitle');

    // when
    service.setTitle(title);

    //then
    expect(titleClass.setTitle).toHaveBeenCalledWith(`${title} - ${siteTitle}`);
  });

  it('should set default title if title is not provided', () => {
    // given
    const siteTitle: string = environment.siteTitle;
    jest.spyOn(titleClass, 'setTitle');

    // when
    service.setTitle(undefined);

    //then
    expect(titleClass.setTitle).toHaveBeenCalledWith(`${siteTitle}`);
  });
});
