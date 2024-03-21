import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  imgPath: string = 'assets/img/shared/modal/';

  modalState: string = '';
  private stateSubscription!: Subscription;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.stateSubscription = this.modalService.state$.subscribe((newState) => {
      this.modalState = newState;
    });
  }

  updateData(): void {
    this.modalService.updateState(this.modalState);
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }
}
