import { OfertasService } from './../ofertas.services';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
  
})
export class OfertaComponent implements OnInit {

  constructor(
    public route: ActivatedRoute, 
    public ofetasService: OfertasService
    ) {

   }

  public oferta: Oferta

  ngOnInit(): void {
    this.ofetasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta;
    });
  }

}
