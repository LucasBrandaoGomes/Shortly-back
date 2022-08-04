import Joi from "joi";

const signupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    passwordConfirmation: Joi.any().valid(Joi.ref('password'))
});

const signinSchema = Joi.object(
    {
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });

export { signupSchema, signinSchema };