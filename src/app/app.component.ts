import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.online {color: white}`]
})
export class AppComponent {
  title = 'angular-basic-app';
  username = '';
  userIsLogin = false;
  status = '';

  getStatus(){
    return this.username === '' ? 'offline' : 'online';
  }

  getColor(){
    return this.status == 'offline' ? 'red' : 'green';
  }
  
  onUpdateUsername(event: Event){
    this.userIsLogin = true;
    this.username = (<HTMLInputElement>event.target).value;
  }

  onResetUsername(){
    this.username = '';
    this.status = 'offline';
  }

  getCurrentUser(){
    return this.username;
  }
}
