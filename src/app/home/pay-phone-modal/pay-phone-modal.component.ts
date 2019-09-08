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
    form: FormGroup = new FormGroup({
        "phone": new FormControl('', [Validators.required, Validators.minLength(18)]),
        "sum": new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]),
    });


    constructor(
        navParams: NavParams,
        private payService: PayService,
        private modalController: ModalController,
        private toastController: ToastController
    ) {
        this.operator = navParams.get('selectedOperator')
    }

    ngOnInit() {
    }

    processForm(event: any) {
        event.preventDefault();
        console.log('this.form', this.form);
        this.payService.createPay(this.form.value).subscribe(res => {
            if (res.status === 201) {
                this.modalController.dismiss();
            }
            this.presentToast(res.message)
        })
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
}
