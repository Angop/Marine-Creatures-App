import { Box } from "@chakra-ui/react";
import React from "react";
import { UploadField } from "../components/UploadField";

interface modelProps {}

export const Model: React.FC<modelProps> = ({}) => {
  return (
    <Box mt={4}>
      <UploadField label="uploadfile" accepts="image/*"/>
    </Box>
  );
};

export default Model;
