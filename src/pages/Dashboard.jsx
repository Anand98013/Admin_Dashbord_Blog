import React, { useState } from "react";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import BlogEditModal from "../components/BlogEditModal";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const addBlog = (blog) => {
    setBlogs((prev) => [...prev, { ...blog, id: Date.now() }]);
  };

  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  const updateBlog = (updatedBlog) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Blogs</h2>
      <div>
        <BlogForm onSubmit={addBlog} />
      </div>
      <div>
        <BlogList blogs={blogs} onEdit={setEditingBlog} onDelete={deleteBlog} />
      </div>
      {editingBlog && (
        <BlogEditModal
          blog={editingBlog}
          onClose={() => setEditingBlog(null)}
          onUpdate={updateBlog}
        />
      )}
    </div>
  );
};

export default Dashboard;
