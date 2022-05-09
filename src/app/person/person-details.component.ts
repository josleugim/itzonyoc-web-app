import { Component, OnInit } from '@angular/core';
import {PersonService} from "../services/person.service";
import {ActivatedRoute} from "@angular/router";
import {IPerson} from "../interfaces/iperson";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  person: IPerson | undefined;

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const personId = this.activatedRoute.snapshot.paramMap.get('id');
    this.personService.findOne(Number(personId)).subscribe((response) => {
      this.person = response;
    })
  }

}
