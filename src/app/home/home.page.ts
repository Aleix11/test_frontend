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
  searchText : string = '';

  constructor(private passGnome: PassGnome,
              private gnomeService: GnomeService,
              public router: Router) {}

  ngOnInit() {
    this.loadData(null, '');
  }

  showGnome(gnome: Gnome) {
    console.log(gnome);
    this.passGnome.setGnome(gnome);
    this.router.navigate(['info-gnome']);
  }

  loadData(event, search) {
    this.page++;
    console.log('PAGE ', this.page, search);
    this.gnomeService.getGnome().subscribe(gnomes => {
      gnomes['Brastlewark'] = gnomes['Brastlewark'].filter(item => {
          return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      for (let i = 100 * (this.page - 1); i < 100 * this.page; i++) {
        if(gnomes['Brastlewark'][i]) {
          this.gnomes.push(gnomes['Brastlewark'][i]);
          console.log(i);
        }
      }
      setTimeout(() => {
        console.log('Done');
        if(event)
          event.target.complete();

        if (gnomes.length === this.gnomes.length) {
            event.target.disabled = true;
        }
      }, 500);
    });
  }

  search(event) {
    this.page = 0;
    this.gnomes = [];
    this.searchText = event.detail.value;
    console.log(event.detail.value);
    this.loadData(null, event.detail.value)
  }

  toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
