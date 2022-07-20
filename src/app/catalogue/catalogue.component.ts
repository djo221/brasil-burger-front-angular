import { Component, OnInit } from '@angular/core';
import { Adresse } from '../models/adresse';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.sass']
})
export class CatalogueComponent implements OnInit {

  private _koni = 0;
  private _taille: number | null = 0
  private _nom: string = "lien"
  private _bool: boolean = true


  private _tab: Array<Number | string> = ["1", 2.0, 4.5]
  private _tab1: (Number | string)[] = ["1", 2.0, 4.5]
  private _tab2: [Number, String] = [1, "4.5"]

  private _myAny: any = "ghh";
  private _unkonw: unknown = true

  adresses: Adresse[] = [
    // {
    //   nbrVilla:123,

    // },
    // {
    //   nbrVilla:5346,
    //   quartier:"beneTally",
    //   ville:"Thies"

    // },
    // {
    //   nbrVilla:5346,
    //   quartier:"beneTally",
    //   ville:"dakar"

    // },

  ]
  private address = {
    myFisrt: "Lang",
    mySecond: 12,
  }

  constructor() { }

  ngOnInit(): void {
    this._myAny = "Bonjour"
    const cnt = this._myAny;
    let unk = this._unkonw;
    let an = this._myAny;

  }

  onInput(a: any) {
    const value = a.target.value
    if (value.length >= 4) {
      const input = this.adresses.filter(adresse => adresse.ville == value)
      if (input.length > 0) {
        this.adresses = input
      }
    }
  }

}
