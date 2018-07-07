import { Pharmacie } from './Pharmacie';


export class Produit {
  nom: string;
  prix: number;
  pharmacie: Pharmacie;


  constructor(nom: string, prix: number, nomPharmacie: string) {
    this.nom = nom;
    this.prix = prix;
    this.pharmacie = new Pharmacie(nomPharmacie);
  }
}
