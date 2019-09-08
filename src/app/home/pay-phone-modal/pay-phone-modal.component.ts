import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams, ToastController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PayService} from "../../services/pay-service.service";
import {IOperator} from "../../interfaces/operator.interface";

@Component({
    selector: 'app-pay-phone-modal',
    templateUrl: './pay-phone-modal.component.html',
    styleUrls: ['./pay-phone-modal.component.scss'],
})
export class PayPhoneModalComponent implements OnInit {
    public operator: IOperator;
    public message: string;
    public form: FormGroup = new FormGroup({
        "phone": new FormControl('', [Validators.required, Validators.minLength(18)]),
        "sum": new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]),
    });



    constructor(
        navParams: NavParams,
        private payService: PayService,
        private modalController: ModalController
    ) {
        this.operator = navParams.get('selectedOperator')
    }

    ngOnInit() {
    }

    processForm(event: any) {
        event.preventDefault();
        this.payService.createPay(this.form.value).subscribe(res => {
            if (res.status === 201) {
                setTimeout(() => {
                    this.modalController.dismiss();
                }, 2000);
            }
            this.message = res.message;

        })
    }
}
