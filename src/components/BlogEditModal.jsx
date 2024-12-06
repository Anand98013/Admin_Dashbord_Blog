import React, { useState } from "react";

const BlogEditModal = ({ blog, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(blog);
  const [newImage, setNewImage] = useState(blog.image);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { ...formData, image: newImage };
    onUpdate(updatedBlog);
    onClose();
  };

  const styles = {
    modalOverlay: {
      position: "fixed",
      inset: "0",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      width: "450px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      position: "relative",
    },
    input: {
      width: "95%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    imagePreview: {
      marginTop: "10px",
      width: "100px",
      height: "100px",
      borderRadius: "8px",
      objectFit: "cover",
      border: "1px solid #ddd",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      fontSize: "14px",
      cursor: "pointer",
    },
    saveButton: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      marginRight: "10px",
    },
    cancelButton: {
      backgroundColor: "#f44336",
      color: "#fff",
    },
    closeIcon: {
      position: "absolute",
      top: "10px",
      right: "10px",
      cursor: "pointer",
      fontSize: "18px",
      color: "#333",
    },
  };

  return (
    <div style={styles.modalOverlay}>
      <form onSubmit={handleSubmit} style={styles.modalContent}>
        <span style={styles.closeIcon} onClick={onClose}>
          &times;
        </span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={styles.input}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={styles.input}
          placeholder="Category"
          required
        />
        <input
          type="text"
          name="tags"
          value={formData.tags.join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              tags: e.target.value.split(",").map((tag) => tag.trim()),
            })
          }
          style={styles.input}
          placeholder="Tags (comma-separated)"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ ...styles.input, padding: "5px" }}
        />
        {newImage && (
          <img src={newImage} alt="Updated Blog" style={styles.imagePreview} />
        )}
        <div>
          <button
            type="submit"
            style={{ ...styles.button, ...styles.saveButton }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{ ...styles.button, ...styles.cancelButton }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditModal;
