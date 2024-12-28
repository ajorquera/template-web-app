import { useContext } from "react";
import context from "../context";
import { ContextProps } from "../interfaces";

const useForm = () => useContext<ContextProps>(context);

export default useForm;