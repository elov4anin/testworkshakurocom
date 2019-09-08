import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {PayPhoneModalComponent} from "./pay-phone-modal/pay-phone-modal.component";
import {NgxMaskIonicModule} from "ngx-mask-ionic";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        ReactiveFormsModule,
        NgxMaskIonicModule
    ],
  declarations: [HomePage, PayPhoneModalComponent],
  entryComponents: [PayPhoneModalComponent]
})
export class HomePageModule {}
