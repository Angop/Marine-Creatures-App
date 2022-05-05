import React from "react";
import { Form, Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";

interface registerProps {}

const MUTATION_REGISTER = `
mutation Register($username: String!, $password: String!) {
  register(options:{username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      createdAt
      username
    }
  }
}
`

export const Register: React.FC<registerProps> = ({}) => {
  const [{}, register] = useMutation(MUTATION_REGISTER)
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          return register(values)
        }}
      >
        {( values, handleChange) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button mt={4} type="submit">Register</Button> {/* Cant figure out isSubmitting spinning wheel :(*/}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
