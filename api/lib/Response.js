const Enum = require("../config/Enum");

class Response {
    constructor(){}

    static SuccessResponse(data, code = 200){
            return {
                code,
                data
            }
        }
    static errorResponse(error){
        console.error(error);
        if(error instanceof CustomError){
            return {
                code : error.code,
                error: {
                    message: error.message,
                    description: error.description
                }
            }

        }
        return {
            code : Enum.HTTP_CODES.INT_SERVER_ERROR,
            error: {
                message: "Unknown error",
                description: error.description
            }
        }
        
    }
}

module.exports = new Response();