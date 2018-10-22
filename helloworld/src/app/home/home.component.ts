import { AffichehelloService } from './../affichehello.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: string;
  items: MenuItem[];
  constructor(private affichehelloService: AffichehelloService) {  }

  ngOnInit() {
  /*  this.afficheResult();
    this.items = [{
     // label: 'Société',
      items: [
          {label: 'Société', icon: 'pi pi-fw pi-home'}
              ]
  },
  {
    //  label: 'Salarié',
      items: [
          {label: 'Salarié', icon: 'pi pi-fw pi-user'}
            ]
  }];*/
}

  afficheResult() {
    this.affichehelloService.getAfficheHello().subscribe(
      data => {
        console.log(data);
        this.result = data;
      }
    );
  }

}
