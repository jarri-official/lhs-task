import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private readonly title: Title) {
  }

  public setTitle(title: string | undefined): void {
    const siteTitle: string = environment.siteTitle;

    if (title) {
      this.title.setTitle(`${title} - ${siteTitle}`);
    } else {
      this.title.setTitle(`${siteTitle}`);
    }
  }
}
