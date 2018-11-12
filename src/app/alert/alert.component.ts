import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent {
  @Input() public type = 'success';

  @Output() public alertClosed: EventEmitter<void> = new EventEmitter<void>();

  public closeAlert(): void {
    this.alertClosed.emit();
  }
}
