import { useContext } from "react";
import context from "./context";

const useForm = () => useContext(context);

export default useForm;