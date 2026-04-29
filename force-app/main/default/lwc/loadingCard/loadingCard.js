import { LightningElement } from 'lwc';

export default class LoadingCard_v1 extends LightningElement {
    productName = 'Mountain Bike';
    description = 'A bike suitable for mountain trails';
    price = 499;
    category = 'Sports';
    imageUrl = 'https://via.placeholder.com/200';

    ready = false;

    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
        }, 2000);
    }
}