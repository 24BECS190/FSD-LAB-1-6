import React from "react";

function App() {

  // Request permission
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      alert("Notification permission granted!");
    }
  };

  // Show notification
  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Hello 👋", {
        body: "This is a browser notification from React!",
        icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
      });
    } else {
      alert("Please allow notification permission first!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Notifications</h1>

      <button onClick={requestPermission}>
        Allow Notifications
      </button>

      <br /><br />

      <button onClick={showNotification}>
        Show Notification
      </button>
    </div>
  );
}

export default App;