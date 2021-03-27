import { AfterContentInit, Component, ContentChild, Input, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { removeSubscriptions } from '../../helpers';
import {
  InputGroupAddonLeftDirective,
  InputGroupAddonRightDirective,
  InputGroupContentDirective,
  InputGroupLabelDirective
} from './input-group.directive';
import { InputTextDirective } from '../input-text/input-text.directive';


@Component({
  selector: 'mk-input-group',
  templateUrl: './input-group.component.html'
})
export class InputGroupComponent implements AfterContentInit, OnDestroy {
  @Input() addonLeft?: string;
  @Input() addonRight?: string;
  @Input() inputColor = 'default';
  @Input() inputFontColor?: string;
  @Input() inputErrorColor = 'danger';
  @Input() inputErrorFontColor?: string;
  @Input() inputValidColor = 'success';
  @Input() inputValidFontColor?: string;
  @Input() label?: string;
  @Input() wrapperClasses = 'form-group';

  @ContentChild(InputGroupLabelDirective) public inputGroupLabelDirective?: InputGroupLabelDirective;
  @ContentChild(InputGroupAddonLeftDirective) public inputGroupAddonLeftDirective?: InputGroupAddonLeftDirective;
  @ContentChild(InputGroupAddonRightDirective) public inputGroupAddonRightDirective?: InputGroupAddonRightDirective;
  @ContentChild(InputGroupContentDirective) public inputGroupContentDirective?: InputGroupContentDirective;
  @ContentChild(InputTextDirective) public inputTextDirective?: InputTextDirective;

  private subscriptions: Subscription[] = [];

  public currentColor?: string;
  public currentFontColor?: string;

  ngAfterContentInit(): void {
    if (this.inputTextDirective) {
      this.subscriptions.push(this.inputTextDirective.onKeyup.subscribe((value: NgControl) => {
        if (value.invalid) {
          this.currentColor = this.inputErrorColor;
          this.currentFontColor = this.inputErrorFontColor;
        } else if (!value.invalid) {
          this.currentColor = this.inputValidColor;
          this.currentFontColor = this.inputValidFontColor;
        } else {
          this.currentColor = this.inputColor;
          this.currentFontColor = this.inputFontColor;
        }
      }));
    }
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }
}