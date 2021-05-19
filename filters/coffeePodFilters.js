 const coffeePodFilters = (query) => {
     let filterObject = {};
     if (query.productType) {
         filterObject.productType = {
             $regex: '.*' + query.productType + '.*'
         };
     }
     if (query.coffeeFlavor) {
         filterObject.coffeeFlavor = {
             $regex: '.*' + query.coffeeFlavor + '.*'
         };
     }
     if (query.packSize) {
         filterObject.packSize = query.packSize;
     }


     return filterObject;
 }


 module.exports = coffeePodFilters;