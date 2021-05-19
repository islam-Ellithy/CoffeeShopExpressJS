const {
    coffeeMachineModel
} = require('../models/index');

class CoffeeMachineRepo {
    constructor() {}

    async getCoffeeMachines() {
        let coffeeMachines = await coffeeMachineModel.find();
        return coffeeMachines;
    }

    async filterCoffeeMachines(searchParams) {
        let coffeeMachines = coffeeMachineModel.find(searchParams);
        return coffeeMachines;
    }


    async addCoffeeMachine(sku, productType, waterLineCompatible, model) {
        let coffeeMachine = await coffeeMachineModel.create({
            productType: productType,
            waterLineCompatible: waterLineCompatible,
            sku: sku,
            model: model,
        });
        return coffeeMachine;
    }
}


module.exports = CoffeeMachineRepo;