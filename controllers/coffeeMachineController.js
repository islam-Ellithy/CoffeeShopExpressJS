 const CoffeeMachineServices = require('../services/modelsServices/coffeeMachineService');
 const coffeeMachineService = new CoffeeMachineServices();
 const mapper = require('../dataMapping/responseMapper');

 const getCoffeeMachines = async (req, res, next) => {
   try {
     const coffeeMachines = await coffeeMachineService.getCoffeeMachines();
     return res.send(mapper.responseMapper(coffeeMachines, ""));
   } catch (e) {
     next(e);
     return res.send(mapper.responseMapper(null, ""));
   }
 };

 const filterCoffeeMachines = async (req, res, next) => {
   try {
     const coffeeMachines = await coffeeMachineService.filterCoffeeMachines(req.body);
     return res.send(mapper.responseMapper(coffeeMachines, "", true));
   } catch (e) {
     next(e);
   }
 }

 const addCoffeeMachine = async (req, res, next) => {
   try {
     const {
       productType,
       waterLineCompatible,
       sku,
       model
     } = req.body;


     const coffeeMachine = await coffeeMachineService.addCoffeeMachine(sku, productType, waterLineCompatible, model);
     return res.send(mapper.responseMapper(coffeeMachine, ""));
   } catch (e) {
     console.log(e.toString());
     res.status(500).json(
       mapper.responseMapper({}, e.toString(), false));
     next(e);
   }
 };

 module.exports = {
   getCoffeeMachines,
   addCoffeeMachine,
   filterCoffeeMachines
 }