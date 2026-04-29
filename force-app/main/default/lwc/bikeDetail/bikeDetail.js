import { LightningElement, api } from 'lwc';

export default class BikeDetail_v1 extends LightningElement {
    @api bike;

    handleBack() {
        this.dispatchEvent(new CustomEvent('back'));
    }
}