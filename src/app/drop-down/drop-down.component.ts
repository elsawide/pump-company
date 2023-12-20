import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input() options!: Array<string>;
  @Input() selectedOption: string = '';
  @Input() placeHolder!: string;
  @Input() noOption: string = '';
  @Output() selectOption = new EventEmitter();
  isOpen: boolean = false;


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onSelectOption(option: string = '') {
    this.selectedOption = option;
    this.selectOption.emit(option);
  }
}
