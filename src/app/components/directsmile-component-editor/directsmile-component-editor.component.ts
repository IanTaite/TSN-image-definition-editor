import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { IComponent, IImageLayer } from '../../image-definitions';

@Component({
  selector: 'app-directsmile-component-editor',
  standalone: true,
  imports: [ButtonModule, InputTextModule, TooltipModule],
  templateUrl: './directsmile-component-editor.component.html',
  styleUrl: './directsmile-component-editor.component.scss',
})
export class DirectSmileComponentEditorComponent {
  @Input({ required: true }) layerModel!: IImageLayer;
  @Input({ required: true }) componentModel!: IComponent;
  @Input({ required: true }) canMoveEarlier!: boolean;
  @Input({ required: true }) canMoveLater!: boolean;
  @Output() moveEarlier = new EventEmitter<IComponent>();
  @Output() moveLater = new EventEmitter<IComponent>();
  @Output() deleteComponent = new EventEmitter<IComponent>();

  moveComponentEarlierButton_Click() {
    this.moveEarlier.emit(this.componentModel);
  }

  moveComponentLaterButton_Click() {
    this.moveLater.emit(this.componentModel);
  }

  deleteComponentButton_Click() {
    this.deleteComponent.emit(this.componentModel);
  }
}
