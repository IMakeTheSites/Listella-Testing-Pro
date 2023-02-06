import { useContext } from "react";
import { UploadContext } from "@/contexts/upload";

export const useUploadContextProvider = () => useContext(UploadContext);
