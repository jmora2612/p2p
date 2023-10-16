export interface ILogin{
    email: string, 
    password: string
}

export interface IFormValidations{
    registerName?: string | null,
    registerEmail?: string | null,
    registerPassword?: string | null,
    registerPassword2?: string | null,
}

export interface IFormCheckedValues {
    registerNameValid?: string | null;
    registerEmailValid: string | null;
    registerPasswordValid: string | null;
    registerPassword2Valid: string | null;
}