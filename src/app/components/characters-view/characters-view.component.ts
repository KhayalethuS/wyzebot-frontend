import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BasicComponent } from '../../components/modal/basic/basic.component';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.css']
})
export class CharactersViewComponent implements OnInit {

  characters: any;
  isBusy = false;

  constructor(public crudService: CrudService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.isBusy = true;
    return this.crudService.getCharacters().subscribe((res: {}) => {
      setTimeout(() =>{
        this.characters = res;
        this.isBusy = false
      }, 5000);
    });
  }

  openModal() {
    const modalRef = this.modalService.open(BasicComponent, {
      size: 'xl',
      centered: true,
      windowClass: 'dark-modal'
    });
    modalRef.componentInstance.emitData.subscribe(($e: any) => {
      this.doneSaving($e);
    })
  }

  doneSaving(data:any) {
    this.modalService.dismissAll();
    this.getCharacters();
  }

}
