import { NgModule } from '@angular/core';
import { SimpleDialogService } from './simple-dialog.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [],
  imports: [
    OverlayModule
  ],
  exports: [
  ],
  providers: [
    SimpleDialogService
  ]
})
export class SimpleDialogModule { }
