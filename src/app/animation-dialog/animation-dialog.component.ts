import { Component, OnInit, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA} from '@angular-mdc/web';

@Component({
  selector: 'app-animation-dialog',
  templateUrl: './animation-dialog.component.html',
  styleUrls: ['./animation-dialog.component.scss']
})
export class AnimationDialogComponent implements OnInit {

  constructor(public dialogRef: MdcDialogRef<AnimationDialogComponent>,
    @Inject(MDC_DIALOG_DATA) data: any) {
      // data could be used to pass in what flower/bee to use
    
    }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
