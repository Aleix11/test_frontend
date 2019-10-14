import { Injectable } from '@angular/core';
import {Gnome} from "../models/gnome";

@Injectable()
export class PassGnome {

    gnome: Gnome = new Gnome();

    constructor() { }

    public setGnome(data: Gnome){
        this.gnome = data;
    }

    public getGnome(){
        return this.gnome;
    }
}