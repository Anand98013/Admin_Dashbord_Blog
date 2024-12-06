import React from "react";

const BlogList = ({ blogs, onEdit, onDelete }) => {
  const styles = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      overflow: "hidden",
    },
    th: {
      backgroundColor: "#4CAF50",
      color: "#fff",
      padding: "10px",
      textAlign: "left",
      fontSize: "16px",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
      textAlign: "left",
      fontSize: "14px",
    },
    actionsTd: {
      display: "flex",
      gap: "10px",
    },
    editButton: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "6px 10px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
    },
    deleteButton: {
      backgroundColor: "#FF4136",
      color: "#fff",
      padding: "6px 10px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
    },
    image: {
      width: "60px",
      height: "60px",
      borderRadius: "8px",
      objectFit: "cover",
    },
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Title</th>
          <th style={styles.th}>Category</th>
          <th style={styles.th}>Tags</th>
          <th style={styles.th}>Image</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id}>
            <td style={styles.td}>{blog.title}</td>
            <td style={styles.td}>{blog.category}</td>
            <td style={styles.td}>{blog.tags.join(", ")}</td>
            <td style={styles.td}>
              {blog.image && (
                <img src={blog.image} alt="Blog" style={styles.image} />
              )}
            </td>
            <td style={{ ...styles.td, ...styles.actionsTd }}>
              <button onClick={() => onEdit(blog)} style={styles.editButton}>
                Edit
              </button>
              <button
                onClick={() => onDelete(blog.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogList;
