const responseMapper = (response, message, status = true) => {
    return {
        "status": status,
        "message": message,
        "data": response
    };
}


module.exports = {
    responseMapper
};