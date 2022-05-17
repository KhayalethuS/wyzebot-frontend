import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { CrudService } from '../../../shared/crud.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  userForm: FormGroup;
  @Output() emitData = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public router: Router,
    public crudService: CrudService,
    ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      powers: ['', [Validators.required]]
    })
  }

  get getControl(){
    return this.userForm.controls;
  }

  onSubmit(){

    return this.crudService.addCharacter(this.userForm.value).subscribe((res: {}) => {
      this.emitData.next('Done saving');
    });
  }

}
