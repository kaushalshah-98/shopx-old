import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputComponent {
  @Input() placeholder: string;
  @Input() value = '';
  @Input() disabled = false;
  @Input() height = 120;
  @Input() radius = 10;

  hasFocus = false;
}
