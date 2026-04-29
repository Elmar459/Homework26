import { LightningElement } from 'lwc';

export default class BikeList_v2 extends LightningElement {
    selectedBikeName = '';

    bikes = [
        {
            id: 1,
            name: 'Electra X4',
            category: 'Mountain',
            price: 500,
            pictureUrl: 'https://via.placeholder.com/200'
        },
        {
            id: 2,
            name: 'Speedster Pro',
            category: 'Road',
            price: 800,
            pictureUrl: 'https://via.placeholder.com/200'
        },
        {
            id: 3,
            name: 'City Rider',
            category: 'City',
            price: 300,
            pictureUrl: 'https://via.placeholder.com/200'
        }
    ];

    handleBikeSelect(event) {
        this.selectedBikeName = event.detail;
    }
}