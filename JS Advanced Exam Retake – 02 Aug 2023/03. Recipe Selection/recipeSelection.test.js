const { expect } = require("chai");
const recipeSelection = require("./recipeSelection"); // Make sure to provide the correct path to the recipeSelection file

describe("Tests for recipeSelection", function() {
    describe("isTypeSuitable", function() {
        it("should return 'This recipe is not suitable for vegetarians'", function() {
            const result = recipeSelection.isTypeSuitable("Meat", "Vegetarian");
            expect(result).to.equal("This recipe is not suitable for vegetarians");
        });

        it("should return 'This recipe is not suitable for vegans'", function() {
            const result = recipeSelection.isTypeSuitable("Dairy", "Vegan");
            expect(result).to.equal("This recipe is not suitable for vegans");
        });

        it("should return 'This recipe is suitable for your dietary restriction'", function() {
            const result = recipeSelection.isTypeSuitable("Grains", "Pescatarian");
            expect(result).to.equal("This recipe is suitable for your dietary restriction");
        });

        it("should throw an error for invalid input", function() {
            expect(() => recipeSelection.isTypeSuitable(123, "Vegan")).to.throw("Invalid input");
        });
    });

    describe("isItAffordable", function() {
        it("should return 'Recipe ingredients bought. You have 20$ left'", function() {
            const result = recipeSelection.isItAffordable(80, 100);
            expect(result).to.equal("Recipe ingredients bought. You have 20$ left");
        });

        it("should return 'You don't have enough budget to afford this recipe'", function() {
            const result = recipeSelection.isItAffordable(150, 100);
            expect(result).to.equal("You don't have enough budget to afford this recipe");
        });

        it("should throw an error for invalid input", function() {
            expect(() => recipeSelection.isItAffordable("price", 100)).to.throw("Invalid input");
        });
    });

    describe("getRecipesByCategory", function() {
        const recipes = [
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Pasta Primavera", category: "Italian" },
            { title: "Black Bean Burger", category: "American" }
        ];

        it("should return an array of recipe titles in the desired category", function() {
            const result = recipeSelection.getRecipesByCategory(recipes, "Italian");
            expect(result).to.deep.equal(["Pasta Primavera"]);
        });

        it("should return an empty array if no recipes match the category", function() {
            const result = recipeSelection.getRecipesByCategory(recipes, "Mexican");
            expect(result).to.deep.equal([]);
        });

        it("should throw an error for invalid input", function() {
            expect(() => recipeSelection.getRecipesByCategory("recipes", "Italian")).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory(recipes, 123)).to.throw("Invalid input");
        });
    });
});
