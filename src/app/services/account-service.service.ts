import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../account-list/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  acc:Account;
  account:Account[];
  purl="http://localhost:8080/accounts/";

  constructor(private http :HttpClient) { }

  getAllAccounts(){
    return this.http.get<Account[]>(this.purl+"list");

  }

  getAccbyId(id){
    return this.http.get<Account>(this.purl+"details/"+id);

  }


}
