import React from "react";
import { Form, Formik } from "formik";
import {
  Box,
  Button,
} from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  const [{}, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          // console.log(values);
          const response = await register(values);
          if (response.data?.register.errors) {
            console.log("ERROR OCCURED");
            setErrors({username: "dummy stupid app"});
            // setErrors(toErrorMap(response.data.register.errors));
          }
          return response;
        }}
      >
        {(values, handleChange) => (
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
            <Button mt={4} type="submit">
              Register
            </Button>{" "}
            {/* Cant figure out isSubmitting spinning wheel :(*/}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
