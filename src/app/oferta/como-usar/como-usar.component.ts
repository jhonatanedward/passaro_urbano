import { OfertasService } from './../../ofertas.services';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[
    OfertasService
  ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar : string = ''

  constructor(
    private router: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertaService.getComoUsarOfertaPorId(this.router.parent.snapshot.params['id'])
    .then((descricao: string) =>{
      this.comoUsar = descricao;
    });
  }

}
