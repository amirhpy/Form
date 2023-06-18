import * as Yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const registerSchema = Yup.object().shape({
    username: Yup.string().min(3).max(12).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).matches(passwordRules, { message: "Please create a stronger password" }).required()
})

export default registerSchema