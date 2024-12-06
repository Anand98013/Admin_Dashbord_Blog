import React from "react";

const Header = () => {
  const styles = {
    header: {
      backgroundColor: "#a39a53",
      color: "#fff",
      padding: "10px 24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    container: {
      margin: "5px auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>Admin Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
