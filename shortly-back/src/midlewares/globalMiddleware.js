import newUrlMiddleware from "./newUrlValidationMiddleware.js";
import signInValidationMiddleware from "./signInValidationMiddleware.js";
import signUpValidationMiddleware from "./signUpValidationMiddleware.js";
import tokenValidateMiddleware from "./tokenValidationMidleware.js";

export async function globalMiddleware(req, res, next){
    const reqUrl = req.url
    const reqMethod = req.method

    switch(reqMethod){
        case 'DELETE':
            return tokenValidateMiddleware(req, res, next);
            break;
    }
    switch(reqUrl){
        case '/signin': 
            return signInValidationMiddleware(req,res,next);
            break;
        case '/signup':
            return signUpValidationMiddleware(req,res,next);
            break;
        case '/urls/shorten':
            return newUrlMiddleware(req,res,next);
            break;
        case '/users/me':
            return tokenValidateMiddleware(req,res,next);
            break;
    }
}