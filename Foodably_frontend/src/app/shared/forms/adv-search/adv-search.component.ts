import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SearchComponent } from 'src/app/search/search.component';

@Component({
  selector: 'app-adv-search',
  templateUrl: './adv-search.component.html',
  styleUrls: ['./adv-search.component.scss']
})
export class AdvSearchComponent implements OnInit {



  constructor(  public dialogRef: MatDialogRef<SearchComponent>) { 
  
  }

  ngOnInit() {
  }

  onClose() {
    
   this.dialogRef.close();
  }

  public showup: boolean = false;
  public showupA: boolean = false;
  public showupB: boolean = false;
  public showupC: boolean = false;
  public showupD: boolean = false;

  onFilter() {
    this.showup = !this.showup;
    this.showupA = false;
    this.showupB = false;
    this.showupC = false;
    this.showupD = false;
  }

  onFilterA() {
    this.showup = false;
    this.showupA = !this.showupA;
    this.showupB = false;
    this.showupC = false;
    this.showupD = false;
  }

  onFilterB() {
    this.showup = false;
    this.showupA = false;
    this.showupB = !this.showupB;
    this.showupC = false;
    this.showupD = false;
  }

  onFilterC() {
    this.showup = false;
    this.showupA = false;
    this.showupB = false;
    this.showupC = !this.showupC;
    this.showupD = false;
  }

  onFilterD() {
    this.showup = false;
    this.showupA = false;
    this.showupB = false;
    this.showupC = false;
    this.showupD = !this.showupD;
  }


}
