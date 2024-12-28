import{ createContext } from "react";
import {ContextProps} from "./interfaces";

const context = createContext<ContextProps>({
    isValid: false,
    isTouched: false,
    onChange: () => {},
    onBlur: () => {},
    stateFields: {},
    isInvalid: false
});

export default context;