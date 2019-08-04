import { Component, OnInit} from '@angular/core';
import { NavController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private getName='';
  private getUpwd='';
  constructor(
    private nav:NavController,
    private http:HttpClient
  ) { }
  
  ngOnInit() {
  }
  login(){
    let url=`http://www.codeboy.com/data/user/login.php?uname=${this.getName}&upwd=${this.getUpwd}`;
    // console.log(this.getName,this.getUpwd)
    this.http.get(url).subscribe((res)=>{
      console.log(res)
    })




  }
  goBack(){
    this.nav.back();
  }
}
