import {Component, OnInit, ViewChild} from '@angular/core';
import {GnomeService} from "../../providers/gnome-service";
import {Gnome} from "../../models/gnome";
import {PassGnome} from "../../providers/pass-gnome";
import {Router} from "@angular/router";
import {IonInfiniteScroll} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  gnomes : Gnome[] = [];
  page : number = 0;

  constructor(private passGnome: PassGnome,
              private gnomeService: GnomeService,
              public router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  showGnome(gnome: Gnome) {
    this.passGnome.setGnome(gnome);
    this.router.navigate(['info-gnome']);
  }

  loadData(event) {
    this.page++;
    console.log('PAGE ', this.page);
    this.gnomeService.getGnome().subscribe(gnomes => {
        for(let i = 100 * (this.page-1); i < 100 * this.page ; i++) {
            this.gnomes.push(gnomes['Brastlewark'][i]);
            console.log(i);
        }
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (gnomes.length === this.gnomes.length) {
                event.target.disabled = true;
            }
        }, 500);
    });
  }

  toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
