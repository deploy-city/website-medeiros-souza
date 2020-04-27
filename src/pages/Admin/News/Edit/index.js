import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import api from "../../../../services/api";
import AdminBox from "../../../../components/AdminBox";
import FileInput from "../../../../components/FileInput";
import FileList from "../../../../components/FileList";

import { Container, ImportFileContainer } from "./styles";

export default function Edit(props) {
  const [findNew, setNew] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    register("text");
  }, [register]);

  useEffect(() => {
    const { id } = props.match.params;
    api.get(`/news/${id}`).then((response) => {
      setNew(response.data);
      setValue("text", response.data.text);
    });
  }, [props.match.params, setValue]);

  const handleEditorChange = useCallback(
    (_, editor) => {
      setValue("text", editor.getData());
    },
    [setValue]
  );

  const handleUpdate = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          title: Yup.string().required("The New's title is required"),
          text: Yup.string().required("The New's text is required"),
        });

        await schema.validate(data);

        const formData = new FormData();

        if (uploadedFiles[0]) {
          const { file } = uploadedFiles[0];
          formData.append("image", file);
        }

        formData.append("title", data.title);
        formData.append("text", data.text);

        const token = localStorage.getItem("@medeirossouza:token");

        await api.put(`/news/${findNew.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("New updated successfuly");

        setTimeout(() => {
          window.location.href = "/admin/news";
        }, 500);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          err.errors.forEach((error) => {
            toast.error(error);
          });
        }
        toast.error("Error while saving the New, please check your data");
      }
    },
    [findNew.id, uploadedFiles]
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
    <AdminBox title="Edit New">
      <Container>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeheolder="New's title"
            defaultValue={findNew.title}
            ref={register({ required: true })}
          />

          <span>New's text</span>
          <CKEditor
            editor={ClassicEditor}
            data={findNew.text}
            onChange={handleEditorChange}
          />

          <ImportFileContainer>
            <label>
              Upload an image only if you want to change the current one!
            </label>
            <FileInput onUpload={submitFile} />
            {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
          </ImportFileContainer>

          <button type="submit">SAVE</button>
          <Link to="/admin/news">CANCEL</Link>
        </form>
      </Container>
    </AdminBox>
  );
}
