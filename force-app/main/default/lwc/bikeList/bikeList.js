import { LightningElement } from 'lwc';

export default class BikeList extends LightningElement {
    bikes = [
        {
            id: 1,
            name: 'Mountain Bike X1',
            category: 'Mountain',
            price: 500,
            pictureUrl: 'https://via.placeholder.com/200'
        },
        {
            id: 2,
            name: 'Road Bike Pro',
            category: 'Road',
            price: 800,
            pictureUrl: 'https://via.placeholder.com/200'
        },
        {
            id: 3,
            name: 'City Bike Classic',
            category: 'City',
            price: 300,
            pictureUrl: 'https://via.placeholder.com/200'
        }
    ];
}