import React, { useState } from 'react';

const BlogForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    tags: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    };
    onSubmit(newBlog);
    setFormData({ title: '', category: '', tags: '', image: null });
  };

  const styles = {
    form: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    input: {
      width: '95%',
      padding: '12px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '100%',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    imagePreview: {
      marginTop: '10px',
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      border: '1px solid #ccc',
      borderRadius: '8px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      color: '#333',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.header}>Create a New Blog</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma-separated)"
        value={formData.tags}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ ...styles.input, padding: '4px' }}
      />
      {formData.image && <img src={formData.image} alt="Blog preview" style={styles.imagePreview} />}
      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
