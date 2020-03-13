import { HorasExtraService } from './../../services/horas-extra.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HorasExtra } from './../../models/horas-extra';

declare var M: any;

@Component({
  selector: 'app-horas-extras',
  templateUrl: './horas-extras.component.html',
  styleUrls: ['./horas-extras.component.css'],
  providers: [HorasExtraService]
})
export class HorasExtrasComponent implements OnInit {

  public users;

  constructor(public horasExtraService: HorasExtraService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getHorasExtra();
    this.getUsers();
  }

  addHoraExtra(form?: NgForm) {
    this.horasExtraService.postHorasExtras(form.value)
    .subscribe(res => {
      this.resetForm(form);
      this.getHorasExtra();
      M.toast({html: 'Horas extras saved successfully.'});
    });
  }

  getHorasExtra() {
    this.horasExtraService.getHorasExtras()
      .subscribe(res => {
        this.horasExtraService.horas_extras = res as HorasExtra[];
      });
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.horasExtraService.selectedHoraExtra = new HorasExtra();
    }
  }

  getUsers() {
    this.horasExtraService.getUsers()
      .subscribe(res => {
        this.users = res;
      });
  }

}
