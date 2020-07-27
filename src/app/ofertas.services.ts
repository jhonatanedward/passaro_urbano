import { HttpClient } from '@angular/common/http'
import { Oferta} from './shared/Oferta.model'
import { Injectable } from '@angular/core';

import { URL_API } from './app_api';

@Injectable()
export class OfertasService{
    
    constructor(public httpClient: HttpClient){

    }

    private ofertas: Oferta[] = 
    [
       
    ]

    public getOfertas():Promise<Oferta[]>{

        // Efetuar requisição HTTP e retornar uma promessa
        return this.httpClient.get(`${URL_API}/ofertas??destaque=true`)
            .toPromise()
            .then((resposta: Promise<Oferta[]>)=>
                resposta
            )
    }

    public getOfertasPorCategoria(categoria: string):Promise<Oferta[]>{
        return this.httpClient.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise().then((resposta: any) => resposta)
    }

    public getOfertaPorId(idOferta: Number): Promise<Oferta>{
        return this.httpClient.get(`${URL_API}/ofertas?id=${idOferta}`)
        .toPromise()
        .then((oferta: any) => {
            return oferta.shift();
        });
    }

    public getComoUsarOfertaPorId(id: Number): Promise<string>{
        return this.httpClient.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
            return resposta[0].descricao;
        })
    }

    public getOndeFicaOfertaPorId(id: Number):Promise<string>{
        return this.httpClient.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
            return resposta[0].descricao
        });
    }
    // public getOfertas2():Promise<Oferta[]>{
        
    //     return new Promise((resolve, reject)=>{
    //         // Algum tipo de processamento, que ao finalizar, chama a função resolve ou a função reject
    //         // console.log('Será que passou por aqui');

    //         let deu_certo = true

    //         if(deu_certo){
                
    //             setTimeout(()=>{resolve(this.ofertas)}, 3000)

    //         }else{
                
    //             reject({codigo: 404, mensagem_erro: 'Not found'})

    //         }
            
    //     })
    //     .then((ofertas: Oferta[])=>{
    //         console.log('Primeiro then !')
    //         return new Promise((resolver, rejecter)=>{
    //             setTimeout(()=>{return resolver(ofertas)}, 3000)
    //         })
    //     })
    //     .then((ofertas: Oferta[])=>{
    //         console.log('Terceiro then executado após tres segundos pois estava aguardando a promesi ser resolvida')
    //         return ofertas
    //     });
    // }
}