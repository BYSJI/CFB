import { Component } from '@angular/core';
import { NavController, Events, App, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  isActive = 0;
  isClick(i) {
    this.isActive = i;
  }
  
  constructor(
    public navCtrl: NavController, 
    public http: HttpClient,
    public events: Events,
    public app: App)
  { }

}
