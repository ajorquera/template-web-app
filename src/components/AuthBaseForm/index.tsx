import withProps from "../../utils/withProps";
import { validationPatterns } from "../Form";
import AuthBaseForm, {Props} from "./AuthBaseForm";

export default AuthBaseForm;

export const ForgotPasswordForm = withProps<Props>({
    title: 'Forgot Password', 
    formFields: [{
        name: 'email',
        label: 'Email',
        validation: validationPatterns.email
    }]
}, AuthBaseForm);

export const ValidateAccount = withProps<Props>({
    title: 'Validate Account', 
    formFields: [{
        name: 'code',
        label: 'Email code'
    }]
}, AuthBaseForm);

export const ResetPasswordForm = withProps<Props>({
    title: 'Reset Password', 
    formFields: [{
        name: 'password',
        label: 'Password',
        type: 'password',
        validation: validationPatterns.password
    },{
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        validation: {
            validator: (value, fieldsState) => {
                const passwordState = fieldsState['password'];
                return passwordState.isTouched ? value === passwordState.value: true;
            },
            message: 'Passwords do not match'
        }
    }]
}, AuthBaseForm);