import { Component, OnInit } from '@angular/core';
import {PersonService} from "../services/person.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IPerson} from "../interfaces/iperson";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  persons: Array<IPerson> = [];
  filterForm: FormGroup;
  searchText: string = '';

  constructor(
    private personService: PersonService,
    private formBuilder: FormBuilder
  )
  {
    this.filterForm = this.formBuilder.group({
      searchText: ['']
    })
  }

  ngOnInit(): void {
    this.findAllPersons();
  }

  findAllPersons() {
    this.personService.findAll().subscribe((response) => {
      this.persons = response;
    })
  }

  deleteById(id: string) {
    this.personService.removeById(Number(id))
      .subscribe((response) => {
        this.findAllPersons();
      })
  }

  filterPersonsByName(event: any) {
    this.searchText = event.target.value;
  }
}
