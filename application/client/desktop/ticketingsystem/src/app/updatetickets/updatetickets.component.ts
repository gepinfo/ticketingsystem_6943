import { Component, OnInit } from '@angular/core';
import { UpdateticketsService } from './updatetickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatetickets',
  templateUrl: './updatetickets.component.html',
  styleUrls: ['./updatetickets.component.scss'],
})

export class UpdateticketsComponent implements OnInit {
    queryId: any;
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
        private updateticketsService: UpdateticketsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    servicetypesGpGetAllValues() {
        this.updateticketsService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    SeverityGpGetAllValues() {
        this.updateticketsService.SeverityGpGetAllValues().subscribe(data => {
            this.SeverityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    assigneesGpGetAllValues() {
        this.updateticketsService.assigneesGpGetAllValues().subscribe(data => {
            this.assigneesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketsService.GpUpdate(this.tickets).subscribe(data => {
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
    GpGetNounById() {
        this.updateticketsService.GpGetNounById(this.queryId).subscribe(data => {
            this.tickets = data
        },
        error => {
            console.log('Error', error);
        });
    }
}