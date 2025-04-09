document.getElementById("technicianForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = {
    technician: document.getElementById("technician").value,
    assistant: document.getElementById("assistant").value,
    task: document.getElementById("task").value,
    activity: document.getElementById("activity").value,
    device: document.getElementById("device").value,
    date: document.getElementById("date").value,
    barcode: document.getElementById("barcode").value,
    techCode: document.getElementById("techCode").value
  };

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(() => {
      document.getElementById("status").innerText = "فرم با موفقیت ارسال شد.";
      document.getElementById("technicianForm").reset();
    })
    .catch(() => {
      document.getElementById("status").innerText = "خطا در ارسال فرم.";
    });
});