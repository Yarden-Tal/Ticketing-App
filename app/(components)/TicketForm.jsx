"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const initialData = {
    title: "",
    desc: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      console.error(res.status);
      throw new Error("Failed to create ticket");
    }

    router.refresh();
    router.push("/");
  };

  const [formData, setFormData] = useState(initialData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>Create Ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          name="desc"
          onChange={handleChange}
          required={true}
          value={formData.desc}
          rows="5"
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.category}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label htmlFor="priority">Priority</label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(val => (
            <div key={val}>
              <input
                id={`priority-${val}`}
                name="priority"
                type="radio"
                onChange={handleChange}
                value={val}
                checked={Number(formData.priority) === val}
              />
              <label>{val}</label>
            </div>
          ))}
        </div>
        <label>Progress</label>
        <input
          type="range"
          name="progress"
          id="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
