import { OverlayRef } from '@angular/cdk/overlay';

export class DialogRef {

  constructor(
    private overlayRef: OverlayRef,
    private callback: (_: any) => void
  ) {
  }

  close(data?: any): void {
    this.overlayRef.dispose();
    this.callback(data);
  }
}
