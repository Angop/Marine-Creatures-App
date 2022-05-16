import React, { InputHTMLAttributes } from "react";

import Dropzone from "react-dropzone";

type UploadFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  accepts: string;
};

export const UploadField: React.FC<UploadFieldProps> = ({ accepts }) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop your files here</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
