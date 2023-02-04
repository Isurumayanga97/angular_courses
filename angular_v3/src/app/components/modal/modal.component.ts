import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbDatepickerModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult = '';
  progressbarValue: any;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  save() {
    new Observable(item => {
      setTimeout(() => {
        item.next(25)
      }, 1000);
      setTimeout(() => {
        item.next(50)
      }, 2000);
      setTimeout(() => {
        item.next(75)
      }, 3000);
      setTimeout(() => {
        item.next(100)
      }, 4000);
    }).subscribe(result => {
      this.progressbarValue = result;
    })
  }


}
