import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioComponent} from "../persona/formulario/formulario.component";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public create(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";

    this.dialog.open(FormularioComponent, dialogConfig)


  }

}
