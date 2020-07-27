import { ActivatedRoute } from '@angular/router';
import { OfertasService } from './../../ofertas.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[
    OfertasService
  ]
})
export class OndeFicaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  public ondeFica: string;

  ngOnInit(): void {
    this.ofertaService.getOndeFicaOfertaPorId(this.route.snapshot.parent.params['id'])
    .then((resposta: string)=>{
      this.ondeFica = resposta;
    });
  }

}
