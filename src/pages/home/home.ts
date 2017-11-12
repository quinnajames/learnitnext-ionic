import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController) {

  }
  
  submitForm() {
    this.nav.setRoot(ListPage)
  }

}
