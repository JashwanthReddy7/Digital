let user = null;

const lawyers = [
  {
    name: "Rahul Sharma",
    specialty: "Criminal Lawyer",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Mehta",
    specialty: "Corporate Lawyer",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Arjun Rao",
    specialty: "Family Lawyer",
    img: "https://randomuser.me/api/portraits/men/60.jpg"
  }
];

// SHOW LOGIN
function showLogin() {
  document.getElementById("authSection").classList.remove("hidden");
}

// LOGIN
function login() {
  user = document.getElementById("email").value;
  document.getElementById("authSection").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("userEmail").innerText = user;

  loadLawyers();
}

// LOAD LAWYERS
function loadLawyers() {
  const container = document.getElementById("lawyers");
  container.innerHTML = "";

  lawyers.forEach(l => {
    const div = document.createElement("div");
    div.className = "lawyer";
    div.innerHTML = `
      <img src="${l.img}">
      <h3>${l.name}</h3>
      <p>${l.specialty}</p>
      <button onclick="contactLawyer()">Contact</button>
    `;
    container.appendChild(div);
  });
}

// CONTACT
function contactLawyer() {
  document.getElementById("contactModal").classList.remove("hidden");
}

// PAYMENT
function openPayment() {
  document.getElementById("contactModal").classList.add("hidden");
  document.getElementById("paymentModal").classList.remove("hidden");
}

function pay() {
  alert("Payment Successful ✅");
  document.getElementById("paymentModal").classList.add("hidden");
}

// CASE
function addCase() {
  alert("Case Posted!");
}