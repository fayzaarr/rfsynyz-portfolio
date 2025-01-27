document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const notification = document.getElementById("notification");
    const messageSpan = document.getElementById("notification-message");
  
    try {
      const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { Accept: "application/json" },
      });
  
      if (response.ok) {
        // Tampilkan pesan sukses
        notification.className = "success";
        messageSpan.innerText = "Email Succuessfully Sent!";
        this.reset(); // Kosongkan formulir
      } else {
        // Tampilkan pesan error dari API
        const errorData = await response.json();
        notification.className = "error";
        messageSpan.innerText = `Error: ${errorData.message || "Something went wrong!"}`;
      }
    } catch (error) {
      // Tampilkan pesan error jaringan
      notification.className = "error";
      messageSpan.innerText = `Network Error: ${error.message}`;
    }
  
    notification.style.display = "block";
  });
  
  // Fungsi untuk menutup notifikasi
  function closeNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "none";
  }
  