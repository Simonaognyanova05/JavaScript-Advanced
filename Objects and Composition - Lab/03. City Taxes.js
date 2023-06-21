function cityTaxes(name, population, treasury){
    let object = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function(){
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function(percentage){
            return this.population += (percentage/100) * this.population;
        },
        applyRecession: function(percentage){
            return this.treasury -= (percentage/100) * this.treasury;
        }
    };
    return object;
}
const city = 
 cityTaxes('Tortuga',
 7000,
 15000);
console.log(city);