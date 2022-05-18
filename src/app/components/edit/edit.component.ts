import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../shared/crud.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  character: any;
  isBusy: boolean = false;

  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    public crudService: CrudService,
    public formBuilder: FormBuilder,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getCharacter();

    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      powers: ['', [Validators.required]]
    })
  }

  get getControl(){
    return this.userForm.controls;
  }

  getCharacter() {
    this.isBusy = true;
    return this.crudService.getCharacter(this.id).subscribe((res: {}) => {
      setTimeout(() =>{
        this.character = res;
        this.isBusy = false
      }, 5000);
    });
  }

  onSubmit() {
    this.isBusy = true;
    this.userForm.value['id'] = this.id;
    this.userForm.value.powers = this.userForm.value.powers.split(',');
    return this.crudService.updateCharacter(this.userForm.value).subscribe((res: {}) => {
      setTimeout(() =>{
        this.isBusy = false
        this.router.navigateByUrl('');
      }, 5000);
    });
  }

}
