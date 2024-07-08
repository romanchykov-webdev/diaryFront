import * as yup from "yup";
import {AppErrors} from "../../common/errors";

// export const LoginSchema = yup.object().shape({
//     email: yup.string().email().required(),
//     password: yup.string().min(3).required(),
// })


export const LoginSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(3, AppErrors.minLengthPassword)
        .required(AppErrors.RequiredField),
        // .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{2,20}$/, AppErrors.InvalidPassword), //валидация Пароль должен содержать как минимум один спецсимвол, один заглавный символ, одну цифру.

});

// Схема валидации для регистрации
export const RegisterSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(3, AppErrors.minLengthPassword)
        .required(AppErrors.RequiredField),
        // .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{2,20}$/, AppErrors.InvalidPassword),//валидация Пароль должен содержать как минимум один спецсимвол, один заглавный символ, одну цифру.
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), undefined], AppErrors.PasswordDoNoMatch)
        .min(3, AppErrors.minLengthPassword)
        .required(AppErrors.RequiredField),
        // .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{2,20}$/, AppErrors.InvalidPassword),//валидация Пароль должен содержать как минимум один спецсимвол, один заглавный символ, одну цифру.
    userName: yup.string().required(AppErrors.RequiredField),
})
