import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

import api from "../../../../services/api";
import AdminBox from "../../../../components/AdminBox";
import FileInput from "../../../../components/FileInput";
import FileList from "../../../../components/FileList";

import { Container, ImportFileContainer } from "./styles";

export default function Add() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, setValue } = useForm();
  const { push } = useHistory();

  useEffect(() => {
    register("text");
  }, [register]);

  const handleAdd = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const schema = Yup.object().shape({
          title: Yup.string().required("The New's title is required"),
          text: Yup.string().required("The New's text is required"),
        });

        await schema.validate(data);

        const { file } = uploadedFiles[0];

        const formData = new FormData();

        formData.append("image", file);
        formData.append("title", data.title);
        formData.append("text", data.text);

        const token = localStorage.getItem("@medeirossouza:token");

        await api.post("/news", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("New added successfuly");
        setLoading(false);
        setTimeout(() => {
          push("/admin/news");
        }, 1000);
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          err.errors.forEach((error) => {
            toast.error(error);
          });
        }

        console.log(err.message);
        toast.error("Error while saving the New, please check your data");
      }
    },
    [push, uploadedFiles]
  );

  const handleEditorChange = useCallback(
    (_, editor) => {
      setValue("text", editor.getData());
    },
    [setValue]
  );

  const submitFile = useCallback((files) => {
    const newFiles = files.map((file) => {
      const { name, size } = file;

      const newFile: FileProps = {
        name,
        readableSize: `${size} Bytes`,
        file,
      };

      return newFile;
    });

    setUploadedFiles(newFiles);
  }, []);

  return (
    <AdminBox title="Add New">
      <Container>
        <form onSubmit={handleSubmit(handleAdd)}>
          <label htmlFor="title">Title</label>
          <input
            readOnly={loading}
            type="text"
            id="title"
            name="title"
            placeheolder="New's title"
            ref={register({ required: true })}
          />

          <span>New's Text</span>
          <CKEditor editor={ClassicEditor} onChange={handleEditorChange} />

          <ImportFileContainer>
            <label>Now set the New's image</label>
            <FileInput onUpload={submitFile} />
            {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
          </ImportFileContainer>

          <button disabled={loading} type="submit">
            {loading ? "SENDING..." : "SAVE"}
          </button>
          <Link disabled={loading} to="/admin/news">
            CANCEL
          </Link>
        </form>
      </Container>
    </AdminBox>
  );
}
