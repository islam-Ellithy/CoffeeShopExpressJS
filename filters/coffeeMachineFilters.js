const coffeeMachineFilters = (query) => {
    let filterObject = {};
    if (query.productType) {
        filterObject.productType = {
            $regex: '.*' + query.productType + '.*'
        };
    }
    if (query.waterLineCompatible) {
        filterObject.waterLineCompatible = query.waterLineCompatible;
    }

    return filterObject;
}


module.exports = coffeeMachineFilters;