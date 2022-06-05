import React, { InputHTMLAttributes } from "react";

import Dropzone from "react-dropzone";
import { Scalars, useFileUploadMutation } from "../generated/graphql";

type UploadFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  accepts: string;
  values: any;
};

export const UploadField: React.FC<UploadFieldProps> = ({
  accepts,
  name,
  label,
  values,
}) => {
  const [{}, fileUpload] = useFileUploadMutation();
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();

          reader.onabort = () => console.log("file reading was aborted");
          reader.onerror = () => console.log("file reading has failed");
          reader.onload = async () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result;
            values.image = binaryStr;
            const x = {image: file, contents: binaryStr}
            console.log("file here: ", file);
            console.log(binaryStr);
            console.log("x here: ", x);
            const response = await fileUpload(x);
          };
          reader.readAsArrayBuffer(file);
        });
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input name={name} {...getInputProps()} />
            <p>Drag and drop your files here</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

