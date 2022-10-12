import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const date = new Date();
  const currentDate = date.toISOString().slice(0, 10);

  const schema = yup.object().shape({
    title: yup.string().required("Title is required!"),
    email: yup.string().email().required("Email is missing!"),
    author: yup.string().required("Input your name!"),
    body: yup.string().required("Content is missing!"),
    day: yup.string(currentDate),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    fetch("http://localhost:8000/diaries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate(-1);
    });
  };

  return (
    <form className="create" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register("author")} />

      <input type="text" placeholder="Email" {...register("email")} />

      <input type="text" placeholder="Title of text" {...register("title")} />

      <textarea
        placeholder="Input text content here..."
        {...register("body")}
      />
      <input
        type="text"
        defaultValue={currentDate}
        readOnly="readonly"
        id="date"
        {...register("day")}
      />
      <input type="submit" id="submt" />
      <p>{errors.author?.message}</p>
      <p>{errors.email?.message}</p>
      <p>{errors.title?.message}</p>
      <p>{errors.body?.message}</p>
    </form>
  );
};

export default Form;
