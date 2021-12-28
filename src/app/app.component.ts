import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basic-app';
  username = '';

  onUpdateUsername(event: Event){
    return this.username = (<HTMLInputElement>event.target).value;
  }

  onResetUsername(){
    return this.username = '';
  }
}
