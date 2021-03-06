import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisitosService } from 'app/service/requisitos.service';
import { ConsumirService } from 'app/service/consumir.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-estancia',
  templateUrl: './estancia.component.html',
  styleUrls: ['./estancia.component.scss']
  
})

export class EstanciaComponent implements OnInit {
  
  requisito: any;
  id: any;
  products: any = [];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private router: Router, private requisitosService: RequisitosService, public rest: ConsumirService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getrequisito();
    // this.getProducts(1718552381);
    //////////////////////////////////////////
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getProducts(id: number) {
    this.products = [];
    this.rest.getProducts(id).subscribe((data: {}) => {
      console.log(data);
      this.products = data;
      this.products = Array.of(this.products);

    });
  }


  getrequisito() {
    // console.log('entre')
    this.requisitosService.getrequisito().subscribe(data => {
      if (data) {
        console.log('requisito,data')
        this.requisito = data;
      }
    });


  }
  checkLogin() {
    this.router.navigate(['maps'])

  }
}
