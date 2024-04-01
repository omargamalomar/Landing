import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(public _translateService: TranslateService){
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      this._translateService.use(selectedLanguage);
    }
  }
  translate(event: any) {
    this._translateService.use(event.target.value);
    const selectedLanguage = event.target.value;
    this._translateService.use(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }
  
}
