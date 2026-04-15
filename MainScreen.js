/// Obtener elementos
const feedbackBtn = document.getElementById("feedbackBtn");
const feedbackPopup = document.getElementById("feedback-popup");
const closeBtn = document.getElementById("closeBtn");
const feedbackForm = document.getElementById("feedbackForm");

// Abrir popup
feedbackBtn.addEventListener("click", () => {
  feedbackPopup.style.display = "flex";
  feedbackPopup.setAttribute("aria-hidden", "false");
});

// Cerrar con la X
closeBtn.addEventListener("click", () => {
  feedbackPopup.style.display = "none";
  feedbackPopup.setAttribute("aria-hidden", "true");
});

// Enviar formulario
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tipo = document.getElementById("feedbackType").value;
  const mensaje = document.getElementById("feedbackText").value.trim();

  if (!mensaje) {
    alert("Si us plau, escriu algun missatge abans d’enviar.");
    return;
  }

  let tipusText =
    tipo === "bug" ? "Gràcies per informar d’un error 🪲" : "Gràcies pel teu suggeriment 💡";

  alert(tipusText + "\nMissatge rebut: " + mensaje);

  // Limpia y cierra
  feedbackForm.reset();
  feedbackPopup.style.display = "none";
  feedbackPopup.setAttribute("aria-hidden", "true");
});
