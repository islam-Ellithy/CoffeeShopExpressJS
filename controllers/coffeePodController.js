 const CoffeePodServices = require('../services/modelsServices/coffeePodService');
 const coffeePodService = new CoffeePodServices();
 const mapper = require('../dataMapping/responseMapper');


 const getCoffeePods = async (req, res, next) => {
   try {
     const coffeePods = await coffeePodService.getCoffeePods();
     return res.send(mapper.responseMapper(coffeePods, ""));
   } catch (e) {
     next(e);
     return res.send(mapper.responseMapper(null, ""));
   }
 };

 const filterCoffeePods = async (req, res, next) => {
   try {
     const coffeePods = await coffeePodService.filterCoffeePods(req.body);
     return res.send(mapper.responseMapper(coffeePods, "", true));
   } catch (e) {
     next(e);
   }
 }

 const addCoffeePod = async (req, res, next) => {
   try {
     const {
       productType,
       sku,
       coffeeFlavor,
       packSize
     } = req.body;


     const coffeePod = await coffeePodService.addCoffeePod(sku, productType, coffeeFlavor, packSize);
     return res.send(mapper.responseMapper(coffeePod, ""));
   } catch (e) {
     console.log(e.toString());
     res.status(500).json(
       mapper.responseMapper({}, e.toString(), false));
     next(e);
   }
 };



 module.exports = {
   getCoffeePods,
   addCoffeePod,
   filterCoffeePods
 }