import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { UploadField } from "../components/UploadField";
import { Wrapper } from "../components/Wrapper";

interface modelProps {}

export const Model: React.FC<modelProps> = ({}) => {
  return (
    // TODO: authenticate user and only allow them to see this page if they are logged in
    <Wrapper>
      <Formik
        initialValues={{ image: null }}
        onSubmit={async (values) => {
          // console.log(values);
          //   const response = await uploadField(values);
          //   return response;
          return null;
        }}
      >
        {(values, handleChange) => (
          <Form>
            <Box mt={4}>
              <UploadField label="uploadfile" accepts="image/*" />
            </Box>
            <Button mt={4} type="submit">
              Submit
            </Button>{" "}
          </Form>
        )}
      </Formik>
    </Wrapper>

    // TODO: add a button to upload a file
    // TODO: display uploaded file
  );
};

export default Model;
