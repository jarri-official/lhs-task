import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TitleService } from '../services/title.service';

@Injectable({
  providedIn: 'root'
})
export class AppTitleStrategy extends TitleStrategy {

  constructor(private titleService: TitleService) {
    super();
  }

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle: string | undefined = this.buildTitle(snapshot);
    this.titleService.setTitle(pageTitle);
  }
}
