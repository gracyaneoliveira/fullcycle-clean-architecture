// Entidade focada em NEGÓCIO
// O ORM precisa de uma entidade focada em persistência

import Entity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import CustomerValidatorFactory from "../factory/customer.validator.factory";
import Address from "../value-object/address";

// # DOMAIN - Complexidade de Negóio
// - Entity
//-- customer.ts (Regra de Negócio)

// # INFRA - Mundo externo - Complexidade acidental
// - Entity / Model
//-- customer.ts (get, set)


export default class Customer extends Entity {
        
    private _name: string;
    private _address!: Address;
    private _active: boolean = true;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        super()
        this._id = id;
        this._name = name;
        this.validate();

        if(this.notification.hasErrors()) {
            throw new NotificationError(this.notification.getErrors());
        }
    }

    get name(): string {
        return this._name;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    validate() {
        CustomerValidatorFactory.create().validate(this); 
    }
    
    changeName(name: string): void {
        this._name = name;
        this.validate();

        if(this.notification.hasErrors()) {
            throw new NotificationError(this.notification.getErrors());
        }
    }

    changeAddress(address: Address) {
        this._address = address;
    }

    isActive(): boolean {
        return this._active;
    }

    activate() {
        if(this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    get address(): Address {
        return this._address;
    }
    
    set address(address: Address) {
        this._address = address;
    }    
}
