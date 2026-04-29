import { LightningElement } from 'lwc';

export default class LifecycleDemo_v1 extends LightningElement {

    connectedCallback() {
        console.log('Component connected');
    }

    renderedCallback() {
        console.log('Component rendered');
    }

    disconnectedCallback() {
        console.log('Component disconnected');
    }
}