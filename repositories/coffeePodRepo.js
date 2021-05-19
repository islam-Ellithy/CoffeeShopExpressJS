const {
    coffeePodModel
} = require('../models/index');

class CoffeePodRepo {
    constructor() {}

    async getCoffeePods() {
        let coffeePods = await coffeePodModel.find();
        return coffeePods;
    }

    async filterCoffeePods(searchParams) {
        let coffeePods = coffeePodModel.find(searchParams);
        return coffeePods;
    }


    async addCoffeePod(sku, productType, coffeeFlavor, packSize) {
        let coffeePod = await coffeePodModel.create({
            productType: productType,
            coffeeFlavor: coffeeFlavor,
            sku: sku,
            packSize: packSize
        });
        return coffeePod;
    }
}


module.exports = CoffeePodRepo;