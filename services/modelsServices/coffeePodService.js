const coffeePodFilters = require('../../filters/coffeePodFilters');
const CoffeePodRepo = require('../../repositories/coffeePodRepo');

const coffeePodRepo = new CoffeePodRepo();

class CoffeePodService {

    constructor() {}

    async getCoffeePods() {
        let coffeeMachines = await coffeePodRepo.getCoffeePods();
        return coffeeMachines;
    }

    async filterCoffeePods(searchParams) {
        let coffeeMachines = await coffeePodRepo.filterCoffeePods(coffeePodFilters(searchParams));
        return coffeeMachines;
    }

    async addCoffeePod(sku, productType, coffeeFlavor, packSize) {
        let coffeeMachine = await coffeePodRepo.addCoffeePod(sku, productType, coffeeFlavor, packSize);
        return coffeeMachine;
    }
}

module.exports = CoffeePodService;