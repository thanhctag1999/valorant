import React from "react";

const Dashboard = () => {
  console.log("Dashboard");
  const backgroundStyle = {
    backgroundImage: 'url("images/background3.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Adjust height as needed
  };

  return (
    <div className="container" style={backgroundStyle}>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
