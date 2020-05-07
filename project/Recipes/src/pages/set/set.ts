import { Component ,NgZone, ViewChild} from '@angular/core';
import { NavController, Events, App, IonicPage } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  className;

  constructor(public navCtrl: NavController, public http: HttpClient, 
public events:Events,
public zone: NgZone,
    public app: App ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
    this.http.get("/api/set").subscribe(data=>{
      this.className = data;
    })
  }

}
