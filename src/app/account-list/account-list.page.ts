import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from './account';
import { AccountServiceService } from '../services/account-service.service';



@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
})
export class AccountListPage implements OnInit {


  select:string="SELECT ALL";
  checked:boolean;
  accounts:Account[];
  total:number=0;


  page=0;
  maximumPage=4;

  constructor(private Accountser:AccountServiceService) { }

  ngOnInit() {
    this.getAllAccounts();
  }



//get All Accounts from service
  getAllAccounts(nfinitescroll?){
    this.Accountser.getAllAccounts().subscribe(
      a=>{console.log(a); this.accounts=a;},
      err=>console.log(err)
    )
  }

  //select checkbox
  onSelected(res,checked){

    if(checked){
    this.checked=checked;
    this.select="UNSELECT ALL"
    this.total += res;
    console.log(this.total, checked,this.checked);
    }
    else if(checked==false){
      this.total -= res;
     
    }
     if(this.total==0){
      
      this.checked=false;
      this.select="SELECT ALL"
    }
  }//select checkbox

 
//search by key
  AccountChanged(e){

    console.log("changed",e.target.value);

    if(e.target.value == ""){
     this.getAllAccounts();
    }

    else{
    this.accounts = this.accounts.filter(
      (data) =>  JSON.stringify(data).toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
      document.getElementById("search-text").style.color = "red";
    }
}//search by key


//select button
onSelectAll(){

  if(this.select=="SELECT ALL"){
    for (var i = 0; i < this.accounts.length; i++) {
      this.accounts[i].ischecked =true;
    }
    console.log(this.checked)
    
  }

  else{
    for (var i = 0; i < this.accounts.length; i++) {
      this.accounts[i].ischecked =false;
    }

  }
  }//select button

//paganation & loadmore
  loadMore(infinitescroll){
    this.page++;
    this.getAllAccounts(infinitescroll);

    if(this.page==this.maximumPage){
      infinitescroll.enable("false");
    }
  }
  

}
 


