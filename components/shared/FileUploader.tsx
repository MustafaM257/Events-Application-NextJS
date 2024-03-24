import { Dispatch, SetStateAction } from "react";
// We will use uploadthing

type FileUploadProps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploadProps) => {
  return <div>FileUploader</div>;
};

export default FileUploader;
