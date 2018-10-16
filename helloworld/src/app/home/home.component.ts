import { AffichehelloService } from './../affichehello.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private affichehelloService: AffichehelloService) {

   }

  ngOnInit() {
    this.affichehelloService.getAfficheHello().subscribe(
      data => console.log(data)
    );

  }

}
