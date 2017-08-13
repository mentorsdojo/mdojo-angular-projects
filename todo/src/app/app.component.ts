import { Component } from '@angular/core';
import { NotificationService } from 'ng2-notify-popup';
import {CompService} from './comp.service';
// import web-animations-js
import 'web-animations-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotificationService, CompService]

})

export class AppComponent {
  title = 'Todo Apps';

  constructor(private notify: NotificationService, private cmpService: CompService) {
    this.cmpService.setParent(this);
  }

  show(text: string, type: string): void {
    this.notify.show(text, { position:'top', duration:'2000', type: 'success' });
  }

   // set append for any componentother
  showModular(text: string, type: string): void {
    // set notify show
    this.notify.show(text, { position:'top', duration:'2000', type: 'success', location: '#modular' });
  }
}
