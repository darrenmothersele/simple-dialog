import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { DialogOptions } from './dialog-options.interface';
import { DIALOG_DATA } from './token';
import { DialogRef } from './dialog-ref';

@Injectable()
export class SimpleDialogService {

  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector,
  ) { }

  open(component, options: DialogOptions) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    return new Promise(resolve => {
      const dialogRef = new DialogRef(overlayRef, resolve);
      const portalInjector = this.createInjector(dialogRef, options.data || null);
      const loadFormPortal = new ComponentPortal(component, null, portalInjector);
      overlayRef.attach(loadFormPortal);
      if (options.closeOnBackdropClick) {
        overlayRef.backdropClick().subscribe(_ => dialogRef.close());
      }
    });

  }

  private createInjector(dialogRef, data) {
    const injectionTokens = new WeakMap();
    injectionTokens.set(DialogRef, dialogRef);
    injectionTokens.set(DIALOG_DATA, data);
    return new PortalInjector(this.injector, injectionTokens);
  }
}
