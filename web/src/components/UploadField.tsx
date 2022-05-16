import React, { InputHTMLAttributes } from "react";

import Dropzone from "react-dropzone";

type UploadFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  accepts: string;
  values: any;
};

export const UploadField: React.FC<UploadFieldProps> = ({ accepts, name, label, values }) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => {
      console.log(acceptedFiles); values.image=acceptedFiles}}>
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
