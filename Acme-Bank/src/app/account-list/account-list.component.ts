import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountItem } from './account-type.interface';
import { Observable } from 'rxjs';
import { ACCOUNT_TYPE } from './account.type.enum';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accountUrl: string = 'http://localhost:8080/api/accounts/';
  //accountList:AccountItem[];
  accountList:AccountItem[] = [];
  totalBalance:number = 0;

  constructor(private httpClient: HttpClient) { }

  fetchAccounts(): Observable<AccountItem[]> {
    return this.httpClient.get<AccountItem[]>(this.accountUrl);
  }

  getBalance(account:AccountItem):string {

      if ((account.account_type === ACCOUNT_TYPE.SAVINGS) && +account.balance <= 0) {
        return 'btn-white disabled'
      }
      else if ((account.account_type === ACCOUNT_TYPE.SAVINGS) && +account.balance > 0) {
        return 'btn-primary'
      }
      else if ((account.account_type === ACCOUNT_TYPE.CHEQUE) && +account.balance < -500) {
        return 'btn-white disabled'
      }
      else if ((account.account_type === ACCOUNT_TYPE.CHEQUE) && +account.balance > -500) {
        return 'btn-primary'
      }
       else if (account.account_type == ACCOUNT_TYPE.CHEQUE) {
         return 'btn-primary';
      }
  }

  withDrawFromaccount(account: AccountItem):void {
    window.alert(`Success you have withdrawn from account ${account.account_number}`);
  }

  ngOnInit() {
    this.fetchAccounts().subscribe(accounts => {
      for (let account of accounts) {
        this.accountList.push(account);
        this.totalBalance += +account.balance;
      }
    });
  }
}
