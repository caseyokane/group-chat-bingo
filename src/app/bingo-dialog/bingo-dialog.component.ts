import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-bingo-dialog',
  templateUrl: './bingo-dialog.component.html',
  styleUrls: ['./bingo-dialog.component.css']
})
export class BingoDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BingoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close();
   }
  ngOnInit() {
  }

}
