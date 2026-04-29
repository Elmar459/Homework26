import { LightningElement, api } from 'lwc';

export default class BikeCard_v2 extends LightningElement {
    @api bike;

    handleSelect() {
        this.dispatchEvent(
            new CustomEvent('bikeselect', {
                detail: this.bike.name
            })
        );
    }
}