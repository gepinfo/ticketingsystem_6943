import { Component, OnInit } from '@angular/core';
import { CreateticketsService } from './createtickets.service';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {
    servicetypesitemArray: any = [];
    SeverityitemArray: any = [];
    assigneesitemArray: any = [];
    public tickets = {
        name: '',
        description: '',
        types: '',
        severity: '',
        assignee: '',
    }

    constructor (
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
    }
    servicetypesGpGetAllValues() {
        this.createticketsService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    SeverityGpGetAllValues() {
        this.createticketsService.SeverityGpGetAllValues().subscribe(data => {
            this.SeverityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    assigneesGpGetAllValues() {
        this.createticketsService.assigneesGpGetAllValues().subscribe(data => {
            this.assigneesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketsService.GpCreate(this.tickets).subscribe(data => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
 	 	this.tickets.assignee = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}