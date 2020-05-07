import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items;
  title;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public events: Events) {
  }

  // ionViewWillEnter() {
  //   this.http.get("/api/contact").subscribe(data => {
  //     this.title = data;
  //     // console.log(data);
  //     if (this.title != undefined) {
  //       this.title.forEach(e => {
  //         this.http.get('/api/imgs/download',{params:{name:e.imgs}}).subscribe(data=>{
  //            e.imgs ='data:image/jpeg;base64,'+data['name'];
  //         })
  //       });
  //     }
  //   });
  // }

}
