import { OfertasService } from './../ofertas.services';
import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [
    OfertasService
  ]
})
export class DiversaoComponent implements OnInit {

  constructor(public ofertService: OfertasService){

  }
  public ofertas: Oferta[]

  ngOnInit(): void {
    this.ofertService.getOfertasPorCategoria("diversao").then((oferta) => {this.ofertas = oferta; });
  }

}