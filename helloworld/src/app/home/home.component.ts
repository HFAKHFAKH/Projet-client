import { AffichehelloService } from './../affichehello.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result: string;

  constructor(private affichehelloService: AffichehelloService) {

  }

  ngOnInit() {
    this.afficheResult();

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
