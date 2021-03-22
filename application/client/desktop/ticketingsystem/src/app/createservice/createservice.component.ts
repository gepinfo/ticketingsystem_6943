import { Component, OnInit } from '@angular/core';
import { CreateserviceService } from './createservice.service';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrls: ['./createservice.component.scss'],
})

export class CreateserviceComponent implements OnInit {
    public servicetypes = {
        name: '',
        description: '',
    }

    constructor (
        private createserviceService: CreateserviceService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createserviceService.GpCreate(this.servicetypes).subscribe(data => {
            this.servicetypes.name = ''
 	 	this.servicetypes.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}