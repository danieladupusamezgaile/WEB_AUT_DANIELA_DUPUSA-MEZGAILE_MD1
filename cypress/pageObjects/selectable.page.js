import { BasePage } from "./base.page";

export class Selectable extends BasePage {
    static get url() {
        return "/selectable";
    }
    static get gridButton(){
        return cy.get('[id="demo-tab-grid"]');
    }
    static get listItem(){
        return cy.get('[class="list-group-item list-group-item-action"]');
    }
    static get listItemActive(){
        return cy.get('[class="list-group-item active list-group-item-action"]');
    }
    
}