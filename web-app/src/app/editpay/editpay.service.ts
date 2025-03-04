import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { PaymentMethod } from '../classes/payment-method';
import { User } from '../admin/user';

@Injectable({
  providedIn: 'root'
})
export class EditpayService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  private currentURL: string;

  constructor(private http: Http) {
  }

  //     user/pay
  edit(id:string,method: PaymentMethod): Promise<PaymentMethod> {
    
    return this.http.put(this.taURL + "/user/" + id +"/methods/",JSON.stringify(method), {headers: this.headers})
      .toPromise()
      .then(res => {console.log("staus: " + res.status)
        if (res.status === 201) {return method;} else {return null;}
      })
      .catch(this.catch);
  }
  getuser(id:string): Promise<User> {
    return this.http.get(this.taURL + "/users/" + id)
             .toPromise()
             .then(res => res.json() as User)
             .catch(this.catch);
  }

  private catch(erro: any): Promise<any>{
    console.error('Oops, something went wrong',erro);
    return Promise.reject(erro.message || erro);
  }

}
