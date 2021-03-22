import { Component, OnInit } from '@angular/core';
import { CreateassigneesService } from './createassignees.service';

@Component({
  selector: 'app-createassignees',
  templateUrl: './createassignees.component.html',
  styleUrls: ['./createassignees.component.scss'],
})

export class CreateassigneesComponent implements OnInit {
    public assignees = {
        name: '',
        email: '',
    }

    constructor (
        private createassigneesService: CreateassigneesService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createassigneesService.GpCreate(this.assignees).subscribe(data => {
            this.assignees.name = ''
 	 	this.assignees.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}