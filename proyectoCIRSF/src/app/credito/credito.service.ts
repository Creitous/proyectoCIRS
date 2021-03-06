import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 

import {Creditos} from './credito';
import { TipoCreditos } from './tipocredito';

@Injectable({
  providedIn: 'root'
})

export class CreditoService {

  private url: string = 'http://localhost:8030/api/creditos'; 
 
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
 
  constructor(private http: HttpClient) { }

  getCredito(): Observable <Creditos[]> {
    return this.http.get<Creditos[]>(this.url);  // se hace un cast de USUARIO
  }

 searchCreditoValor(valor:number): Observable<Creditos[]>{
    return this.http.get<Creditos[]>(`${this.url}/valor/${valor}`);
  }
  
  searchCreditoTipo(nombre:string): Observable <Creditos>{
    return this.http.get<Creditos>(`${this.url}/tipo/${nombre}`);
  }
  
  create (creditos: Creditos, ciUsuario:string ) : Observable <Creditos>{
    return this.http.post<any>( `${this.url}/${ciUsuario}`, creditos, {headers: this.httpHeaders}); 
  }

  getTipoCredito(): Observable<TipoCreditos[]>{
    return this.http.get<TipoCreditos[]>(this.url + '/tipos'); 
  }

  getCreditoUser(id): Observable<Creditos[]>{
    return this.http.get<Creditos[]>(`${this.url}/usuario/${id}`); 
  } 

  getCreditoId(id): Observable <Creditos>{
    return this.http.get<Creditos>(`${this.url}/${id}`); 
  } 

  updateCredito(credito: Creditos): Observable <Creditos>{
    return this.http.post<Creditos>(`${this.url}/${credito.idCredito}`, credito); 
  } 

}
