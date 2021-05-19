const coffeeMachineFilters = require('../../filters/coffeeMachineFilters');
const CoffeeMachineRepo = require('../../repositories/coffeeMachineRepo');

const coffeeMachineRepo = new CoffeeMachineRepo();

class CoffeeMachineService {

    constructor() {}

    async getCoffeeMachines() {
        let coffeeMachines = await coffeeMachineRepo.getCoffeeMachines();
        return coffeeMachines;
    }

    async filterCoffeeMachines(searchParams) {
        let coffeeMachines = await coffeeMachineRepo.filterCoffeeMachines(coffeeMachineFilters(searchParams));
        return coffeeMachines;
    }

    async addCoffeeMachine(sku, productType, waterLineCompatible, model) {

        let coffeeMachine = await coffeeMachineRepo.addCoffeeMachine(sku, productType, waterLineCompatible, model);
        return coffeeMachine;
    }
}

module.exports = CoffeeMachineService;