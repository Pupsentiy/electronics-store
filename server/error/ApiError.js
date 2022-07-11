class ApiErrror extends Error {
    constructor(status, message){
        super();
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new ApiErrror(404, message)
    }
    static internal(message){
        return new ApiErrror(500, message)
    }
    static forbidden(message){
        return new ApiErrror(403, message)
    }
}

module.exports = ApiErrror
    