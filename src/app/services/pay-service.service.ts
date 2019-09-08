import { Injectable } from '@angular/core';
import {IPay} from "../interfaces/pay.interface";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IOperator} from "../interfaces/operator.interface";
import {ResponseInterface} from "../interfaces/response.interface";

@Injectable({
  providedIn: 'root'
})
export class PayService {
  base_url: string = "http://mybackend.com/api/";
  tasks_endpoint = "operators";
  constructor(private http: HttpClient) { }

  getOperators(): Observable<IOperator[]> {
    return this.http
        .get<IOperator[]>(this.base_url + this.tasks_endpoint)
  }

  createPay(pay: IPay): Observable<ResponseInterface> {
      const responses: ResponseInterface[] = [
        {
          status: 201,
          message: 'success'
        },
        {
          status: 500,
          message: 'error'
        }
      ];
    const i =  Math.floor(0 + Math.random() * (2));
    return of(responses[i]);
  }
}
