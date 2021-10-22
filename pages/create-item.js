import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const CreateItem = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  const router = useRouter();

  const onChange = async (e) => {
    const file = e.target.files[0];
  };
};

export default CreateItem;
