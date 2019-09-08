import {Component} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {PayPhoneModalComponent} from "./pay-phone-modal/pay-phone-modal.component";
import {IOperator} from "../interfaces/operator.interface";
import {PayService} from "../services/pay-service.service";
import {Observable, operators} from "rxjs/internal/Rx";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    selectedOperator: IOperator;
    operators$: Observable<IOperator[]>;

    constructor(public modalController: ModalController, private payService: PayService) {
        this.operators$ = this.payService.getOperators()
    }

    async selectOperator(o: IOperator): Promise<void> {
        const modal = await this.modalController.create({
            component: PayPhoneModalComponent,
            componentProps: {
                selectedOperator: o
            }
        });
        return await modal.present();
    }
}
