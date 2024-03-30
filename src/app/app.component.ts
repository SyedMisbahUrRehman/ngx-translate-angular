import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  // importing service


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set the default language
  }

  changeLanguage(lang: string) {
    this.translate.use(lang); // Change the active language
  }
}