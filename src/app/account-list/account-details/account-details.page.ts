import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account-service.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {

  Account:Account=new Account(2,8555,588,555,false);
  constructor( private route: ActivatedRoute,private AccountSer:AccountServiceService) { }

  ngOnInit() {
  }

  getAccountByID(){
    this.route.params.subscribe(
      a=>{
        this.AccountSer.getAccbyId(a['id']).subscribe(
          d=>this.Account=d
        )
      }

    )}
    }


