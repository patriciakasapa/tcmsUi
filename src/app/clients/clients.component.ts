import { Component, OnInit } from '@angular/core';
import { cServiceService } from '../cService.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients; 
  constructor(private service: cServiceService) { }

  ngOnInit() {
    this.service.getClients().subscribe(
      result => {
        console.log('hhgh');  
        this.clients = result;
        console.log(result);
      },
      error => {console.log(error);}
      
    );
  }

}
