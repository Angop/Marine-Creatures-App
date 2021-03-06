import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { UploadField } from "../components/UploadField";
import { Wrapper } from "../components/Wrapper";
import { useFileUploadMutation } from "../generated/graphql";

interface modelProps {}

export const Model: React.FC<modelProps> = ({}) => {
  const [{}, fileUpload] = useFileUploadMutation();
  return (
    // TODO: authenticate user and only allow them to see this page if they are logged in
    <Wrapper>
      <Formik
        initialValues={{ image: null }}
        onSubmit={async (values) => {
          // console.log("File uploaded");
          // console.log("values", values);
          // const response = await fileUpload(values);
          // return response;
        }}
      >
        {(values, handleChange) => (
          <Form>
            <Box mt={4}>
              <UploadField values={values} name="image" label="image" accepts="image/*" />
            </Box>
            <Button mt={4} type="submit">
              Submit
            </Button>{" "}
            <img src={values.image} alt="uploaded image" />
          </Form>
        )}
      </Formik>
    </Wrapper>

    // TODO: display uploaded file
  );
};

export default Model;
