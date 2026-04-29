import { LightningElement } from 'lwc';

export default class LifecycleDemo_v1 extends LightningElement {
    isVisible = false;

    handleToggle() {
        this.isVisible = !this.isVisible;
    }

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