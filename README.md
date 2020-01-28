# Simple Dialog

A very simple dialog service, made using Angular's CDK.

## Installation

    npm install --save ngx-simple-dialog

Then import the module in `app.module.ts`:

    imports: [
        ...
        SimpleDialogModule
    ]

Then use it in a component:

    import { SimpleDialogService } from 'simple-dialog';

In the template:

    <button type="button" (click)="openDialog()">Open Dialog</button>
    
In the component class:

      async openDialog() {
        const result = await this.dialog.open(ExampleDialogComponent, {
          data: {
            message: 'Hello world!'
          },
          closeOnBackdropClick: true
        });
        console.log({ result });
      }

You can pass arbitrary data into the dialog. Access this data by using 
constructor injection:

    import { Component, Inject } from '@angular/core';
    import { DIALOG_DATA, DialogRef } from 'simple-dialog';
    
    @Component({
      selector: 'app-load-form',
      template: `
          <div class="bg-white p-4 rounded shadow">
              <p class="mb-2">This is the load form dialog!</p>
              <div class="flex justify-end mt-4">
                  <button class="btn mr-2" type="button" (click)="dialog.close()">Cancel</button>
                  <button class="btn" type="button" (click)="dialog.close('ok')">OK</button>
              </div>
          </div>
      `
    })
    export class ExampleDialogComponent {
    
        constructor(
            public readonly dialog: DialogRef,
            @Inject(DIALOG_DATA) data: any
        ) {
        }
    }
