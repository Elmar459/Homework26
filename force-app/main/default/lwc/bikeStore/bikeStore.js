import { LightningElement } from 'lwc';

export default class BikeStore_v1 extends LightningElement {

    selectedBike = null;

    bikes = [
        {
            id: 1,
            name: 'Electra X4',
            category: 'Mountain',
            price: 500,
            pictureUrl: 'https://via.placeholder.com/200',
            description: 'Strong mountain bike'
        },
        {
            id: 2,
            name: 'Speedster Pro',
            category: 'Road',
            price: 800,
            pictureUrl: 'https://via.placeholder.com/200',
            description: 'Fast road bike'
        },
        {
            id: 3,
            name: 'City Rider',
            category: 'City',
            price: 300,
            pictureUrl: 'https://via.placeholder.com/200',
            description: 'Comfort city bike'
        },
        {
            id: 4,
            name: 'Extreme MTB',
            category: 'Mountain',
            price: 1000,
            pictureUrl: 'https://via.placeholder.com/200',
            description: 'Professional MTB'
        }
    ];

    handleViewDetails(event) {
        const id = event.detail;
        this.selectedBike = this.bikes.find(b => b.id === id);
    }

    handleBack() {
        this.selectedBike = null;
    }
}