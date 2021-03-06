import React, { useState, useEffect, useRef } from "react";
import { MdImage, MdDelete, MdEdit } from "react-icons/md";

import AdminBox from "../../../../components/AdminBox";
import Checkbox from "../../../../components/Checkbox";
import api, { baseURL } from "../../../../services/api";

import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { toast } from "react-toastify";

export default function News() {
  const [news, setNews] = useState([]);
  const activeRef = useRef(null);

  useEffect(() => {
    api.get("/news").then(({ data }) => {
      setNews(data);
    });
  }, []);

  const handleDelete = useCallback(
    async (id) => {
      try {
        const token = localStorage.getItem("@medeirossouza:token");

        await api.delete(`/news/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const newsCopy = news.filter((filteredNew) => filteredNew.id !== id);
        setNews([...newsCopy]);

        toast.success("New deleted");
      } catch {
        toast.error("An error has ocurred, please try again");
      }
    },
    [news]
  );

  const handleActivate = useCallback(
    async (id) => {
      try {
        const index = news.findIndex((findNew) => findNew.id === id);
        const status = !news[index].active;
        console.log(status);
        const token = localStorage.getItem("@medeirossouza:token");
        const { data } = api.patch(
          `/news/${id}/active`,
          {
            status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newsCopy = news;
        newsCopy[index].active = status;

        setNews([...newsCopy]);

        if (data) {
          return toast.done("New activated");
        }

        return toast.done("New deactivated");
      } catch (err) {
        console.log(err.message);
        toast.error("An error has happened, please try again");
      }
    },
    [news]
  );

  return (
    <AdminBox title="News" hasAddButton>
      <Container>
        <thead>
          <tr>
            <th>Title</th>
            <th>Active</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {news.map(({ id, title, active, image }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>
                <Checkbox>
                  <input
                    ref={activeRef}
                    onChange={() => handleActivate(id)}
                    type="checkbox"
                    checked={active}
                  />
                </Checkbox>
              </td>
              <td>
                <a
                  href={`http://api.medeirossouza.com/storage/news/${image}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdImage size={30} color="#ffcc00" />
                </a>
              </td>
              <td>
                <Link to={`/admin/news/edit/${id}`}>
                  <MdEdit size={30} color="#009933" />
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(id)}>
                  <MdDelete size={30} color="#990000" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Container>
    </AdminBox>
  );
}
