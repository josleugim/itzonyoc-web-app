import { Component, OnInit } from '@angular/core';
import {PersonService} from "../services/person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  person: any;
  personForm: FormGroup;
  personId: number = 0;

  constructor(
    private personService: PersonService,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
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
      avatar: [''],
      file: ['']
    })
  }

  ngOnInit(): void {
    this.personId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.personService.findOne(this.personId).subscribe((response) => {
      this.person = response;
      this.personForm.patchValue(this.person);
    });
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

    this.personService.update(this.personId, formData).subscribe((response) => {
      this.router.navigate(['/person']);
    })
  }

  onFileChange(event: any){
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
