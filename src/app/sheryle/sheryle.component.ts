import { Component } from '@angular/core';

@Component({
  selector: 'app-sheryle',
  templateUrl: './sheryle.component.html',
  styleUrls: ['./sheryle.component.css']
})

export class SheryleComponent {

  // PROPRIETES
  public listeJouetsSheryle: any[] = [];
  public enfant: string = 'Sheryle';
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
  addNewJouetSheryle(nom: string, prix: number, magasin: string) {
    this.listeJouetsSheryle.push( 
      { name: nom, shopName: magasin, price: prix}
    );
    this.nomJouet = '';
    this.prixJouet = 0;
    this.magasinParDefaut = this.listeMagasins[0];
  }

  // METHODE POUR SUPPRIMER UN ELEMENT DE LA LISTE
  SupprimerJouet(index: number) {
    this.listeJouetsSheryle.splice(index, 1);
  }

  // METHODE POUR CALCULER LE PRIX TOTAL
  calculerTotal() {
    let somme: number = parseFloat(0);
    for (let i = 0; i < this.listeJouetsSheryle.length; i++) {
      let priceJouet = parseFloat(this.listeJouetsSheryle[i].price);
      somme += priceJouet;
    }
    return somme;
  }

  constructor() { }

}
