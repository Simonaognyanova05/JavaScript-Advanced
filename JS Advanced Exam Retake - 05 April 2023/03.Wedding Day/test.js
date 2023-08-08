let expect = require('chai').expect;
let weddingDay = require('./weddingDay');


describe("Tests for weddingDay", function() {
    describe("pickVenue", function() {
        it("should return suitable venue message", function() {
            const result = weddingDay.pickVenue(160, 100, "Varna");
            expect(result).to.equal("This venue meets the requirements, with capacity of 160 guests and 100$ cover.");
        });

        it("should return unsuitable venue message", function() {
            const result = weddingDay.pickVenue(100, 150, "Sofia");
            expect(result).to.equal("This venue does not meet your requirements!");
        });

        it("should throw an error for invalid input", function() {
            expect(() => weddingDay.pickVenue(120, 80, "")).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue("capacity", 100, "Varna")).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(160, 100, "Plovdiv")).to.throw("The location of this venue is not in the correct area!");
        });
    });

    describe("otherSpendings", function() {
        it("should return spending message with discount", function() {
            const result = weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures"], true);
            expect(result).to.equal("You spend 1955$ for wedding decoration and photography with 15% discount!");
        });

        it("should return spending message without discount", function() {
            const result = weddingDay.otherSpendings(["flowers"], ["video"], false);
            expect(result).to.equal("You spend 1800$ for wedding decoration and photography!");
        });

        it("should throw an error for invalid input", function() {
            expect(() => weddingDay.otherSpendings("flowers", ["video"], true)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings(["flowers"], "pictures", false)).to.throw("Invalid Information!");
        });
    });

    describe("tableDistribution", function() {
        it("should return join tables message", function() {
            const result = weddingDay.tableDistribution(20, 4);
            expect(result).to.equal("There is only 5 people on every table, you can join some tables.");
        });

        it("should return tables and guests message", function() {
            const result = weddingDay.tableDistribution(60, 10);
            expect(result).to.equal("You have 10 tables with 6 guests on table.");
        });

        it("should throw an error for invalid input", function() {
            expect(() => weddingDay.tableDistribution(50, "tables")).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(-20, 5)).to.throw("Invalid Information!");
        });
    });
});