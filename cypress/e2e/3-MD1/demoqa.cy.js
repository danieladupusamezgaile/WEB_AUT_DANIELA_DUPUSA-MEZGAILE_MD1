import { Selectable } from "../../pageObjects/selectable.page";

describe("Demoqa", () => {
    context("Grid", () => {
        beforeEach(() => {
            Selectable.visit();
        });
        it.only("Click grid values", () => {
            // Click “Grid”
            Selectable.gridButton.click();
            // Click - “Two”, “Four”, “Six”, “Eight”
            Selectable.listItem.contains('Two').click();
            Selectable.listItem.contains('Four').click();
            Selectable.listItem.contains('Six').click();
            Selectable.listItem.contains('Eight').click();
            // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
            Selectable.listItemActive.contains('Two');
            Selectable.listItemActive.contains('Four');
            Selectable.listItemActive.contains('Six');
            Selectable.listItemActive.contains('Eight');
            // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
            Selectable.listItem.not('.active').contains('One');
            Selectable.listItem.not('.active').contains('Three');
            Selectable.listItem.not('.active').contains('Five');
            Selectable.listItem.not('.active').contains('Seven');
            Selectable.listItem.not('.active').contains('Nine');
        });
    });
});