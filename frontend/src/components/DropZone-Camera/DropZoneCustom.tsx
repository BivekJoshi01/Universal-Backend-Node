import React from 'react'

import { useDropzone } from 'react-dropzone';

const DropZoneCustom = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  return (
    <div
      {...getRootProps()}
      className="w-full flex items-center justify-center border-2 border-dashed border-gray-400 rounded-xl bg-white h-30 cursor-pointer"
    >
      <input {...getInputProps()} />
      {acceptedFiles.length > 0 ? (
        <p className="text-sm text-gray-700">{acceptedFiles[0].name}</p>
      ) : (
        <p className="text-sm text-gray-500">Drag and drop a file here, or click to select</p>
      )}
    </div>
  );
};

export default DropZoneCustom
