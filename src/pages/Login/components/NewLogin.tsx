import React, { FC } from "react";
import Form, { FormProps } from "@/components/Form";
import TextField from "@/components/TextField";
import Card from "@/components/Card";

export interface Props {
  onSubmit?: FormProps["onSubmit"];
  loading?: boolean;
}

const validationFields = {
  username: (value: string) => {
    return value.includes("@");
  },
  password: (value: string) => {
    return value.length > 6;
  }
};

const Login: FC<Props> = ({onSubmit, loading}) => {

  const handleSubmit = (values: any) => {
    onSubmit?.(values);
  }
  
  return (
    <Form validationFields={validationFields} onSubmit={handleSubmit}>
      {({isInvalid, onChange, values}) => (
        <Card>
          <h1>Login</h1>
          <TextField onChange={onChange} value={values['email']} label="Email" name="username" />
          <br />
          <TextField onChange={onChange} value={values['email']} label="Password" name="password" type="password" />
          <br />
          <button disabled={isInvalid || loading} type="submit">{loading ? 'Loading...' : 'Login'}</button>
        </Card>
      )}
    </Form>
  );
};

export default Login;
