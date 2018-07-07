import { LatLng } from "../classes/LatLng";

export class Pharmacie {
  nom: string;
  adress: string;
  telephone: number;
  latLng: LatLng;

  constructor(nom: string) {
    this.nom = nom;
  }
}
