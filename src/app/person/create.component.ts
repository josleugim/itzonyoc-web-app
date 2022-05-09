import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../services/person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  personForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private router: Router
  )
  {
    this.personForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      rfc: ['', [Validators.required, Validators.minLength(10)]],
      curp: ['', [Validators.required, Validators.minLength(10)]],
      birthday: [''],
      genderId: [null],
      typeId: [null],
      file: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const { birthday } = this.personForm.value;
    const formData = new FormData();
    formData.append('file', this.personForm.get('file')?.value);
    formData.append('name', this.personForm.get('name')?.value);
    formData.append('firstName', this.personForm.get('firstName')?.value);
    formData.append('lastName', this.personForm.get('lastName')?.value);
    formData.append('rfc', this.personForm.get('rfc')?.value);
    formData.append('curp', this.personForm.get('curp')?.value);
    if (birthday) {
      formData.append('birthday', this.personForm.get('birthday')?.value);
    }
    formData.append('genderId', this.personForm.get('genderId')?.value);
    formData.append('typeId', this.personForm.get('typeId')?.value);
    console.log(formData);
    this.personService.create(formData)
      .subscribe(response => {
        this.personForm.reset();
        this.router.navigate(['/person'])
      }, err => console.error(err));
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        this.personForm.get('file')?.setValue(file);

        this.personForm.patchValue({
          file: file
        });
      }
    }
  }
}
