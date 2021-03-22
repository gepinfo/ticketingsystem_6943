import { Component, OnInit } from '@angular/core';
import { CreateseverityService } from './createseverity.service';

@Component({
  selector: 'app-createseverity',
  templateUrl: './createseverity.component.html',
  styleUrls: ['./createseverity.component.scss'],
})

export class CreateseverityComponent implements OnInit {
    public Severity = {
        name: '',
        description: '',
    }

    constructor (
        private createseverityService: CreateseverityService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createseverityService.GpCreate(this.Severity).subscribe(data => {
            this.Severity.name = ''
 	 	this.Severity.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}