import { Component, OnInit } from '@angular/core';
import {PassGnome} from "../../providers/pass-gnome";
import {Gnome} from "../../models/gnome";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-info-gnome',
  templateUrl: './info-gnome.page.html',
  styleUrls: ['./info-gnome.page.scss'],
})
export class InfoGnomePage implements OnInit {

  gnome: Gnome = new Gnome();

  constructor(private passGnome: PassGnome,
              public navCtrl: NavController) {
    if(!this.gnome.id) {
        this.navCtrl.navigateRoot('/');
    }
  }

  ngOnInit() {
    this.gnome = this.passGnome.getGnome();
  }

}
