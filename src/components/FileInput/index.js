import React from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";

const Upload = ({ onUpload }) => {
  function renderDragMessage(isDragActive, isDragRejest) {
    if (!isDragActive) {
      return <UploadMessage>Select or drag the image here</UploadMessage>;
    }

    if (isDragRejest) {
      return <UploadMessage type="error">Non-suported file</UploadMessage>;
    }

    return <UploadMessage type="success">Drop the file here</UploadMessage>;
  }

  return (
    <>
      <Dropzone
        accept={["image/png", "image/jpg", "image/jpeg"]}
        onDropAccepted={(files) => onUpload(files)}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }): any => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
};

export default Upload;
