import { LightningElement, api } from 'lwc';

export default class BikeCard_v1 extends LightningElement {
    @api bike;

    handleViewDetails() {
        this.dispatchEvent(
            new CustomEvent('viewdetails', {
                detail: this.bike.id
            })
        );
    }
}