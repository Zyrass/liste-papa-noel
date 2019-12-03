import { Component } from '@angular/core';

@Component({
  selector: 'app-oceane',
  templateUrl: './oceane.component.html',
  styleUrls: ['./oceane.component.css']
})

export class OceaneComponent {

  // PROPRIETES
  public listeJouetsOceane: any[] = [];
  public enfant: string = 'Océane';
  public nomJouet: string;
  public prixJouet: number;
  public prixParDefaut: number = parseFloat(0);

  // MAGASINS
  listeMagasins: string[] = [
    'Auchan',
    'Carrefour',
    'Pic Wic Toys',
    'Maxi-Toys'
  ];
  magasinParDefaut = this.listeMagasins[0];

  // METHODE POUR AJOUTER UN NOUVEAU JOUET
  addNewJouetOceane(nom: string, prix: number, magasin: string) {
    this.listeJouetsOceane.push( 
      { name: nom, shopName: magasin, price: prix}
    );
    this.nomJouet = '';
    this.prixJouet = 0;
    this.magasinParDefaut = this.listeMagasins[0];
  }

  // METHODE POUR SUPPRIMER UN ELEMENT DE LA LISTE
  SupprimerJouet(index: number) {
    this.listeJouetsOceane.splice(index, 1);
  }

  // METHODE POUR CALCULER LE PRIX TOTAL
  calculerTotal() {
    let somme: number = parseFloat(0);
    for (let i = 0; i < this.listeJouetsOceane.length; i++) {
      let priceJouet = parseFloat(this.listeJouetsOceane[i].price);
      somme += priceJouet;
    }
    return somme;
  }

  constructor() { }

}
