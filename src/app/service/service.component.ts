import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  userName:string = "KvakSebastian"
  response:any;
  constructor(private http: HttpClient){

  }
  search(){
    this.http.get('https://api.github.com/users/'+ this.userName)
    .subscribe((response)=>{
      this.response = response;
    })
  }
  ngOnInit(): void {
  }

}
