import { Component } from '@angular/core';
import { ToastyService } from 'ng-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clockify';
  showHeader = false;
  constructor(private toast: ToastyService) { 


    const sessionToken: any = localStorage.getItem('sessionToken');
    if (sessionToken != null) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }

}
