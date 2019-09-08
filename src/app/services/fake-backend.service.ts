import {InMemoryDbService} from "angular-in-memory-web-api";
import {Injectable} from "@angular/core";
import {IOperator} from "../interfaces/operator.interface";


@Injectable({
    providedIn: "root"
})
export class FakeBackendService implements InMemoryDbService{
    constructor() {}

    createDb() {
        const operators: IOperator[] = [
            {
                id: 1,
                name: 'MTC',
                logo: 'mts.svg'
            },
            {
                id: 2,
                name: 'Beeline',
                logo: 'beeline.svg'
            },
            {
                id: 3,
                name: 'Megafon',
                logo: 'megafon.svg'
            },
            {
                id: 4,
                name: 'Tele2',
                logo: 'tele2.svg'
            }
        ];

        return {
            operators: operators
        }
    }
}
