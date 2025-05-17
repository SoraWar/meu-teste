function enviarDados() {
  const codigo = document.getElementById("codigo").value;
  const inputs = document.querySelectorAll(".valor");
  const valores = Array.from(inputs).map(input => input.value);

  fetch("https://script.google.com/macros/s/AKfycbygyI0afxggPnG0NoNiPYpKZqylPT6xAgFbjdvw03Dofmr0Kh5IkFKvFsFTke2O6fzV/exec", {
    method: "POST",
    body: JSON.stringify({
      codigo: codigo,
      valores: valores
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.text())
    .then(data => {
      alert("Dados enviados com sucesso!");
    })
    .catch(error => {
      alert("Erro ao enviar dados.");
      console.error(error);
    });
}
