function enviarDados() {
  const codigo = document.getElementById("codigo").value;
  const inputs = document.querySelectorAll(".valor");
  const valores = Array.from(inputs).map(input => input.value);

  fetch("https://script.google.com/macros/s/AKfycbwJtVYn8exZHnxOtmom5hH8reh9s0FGDXv4szCctZNfamuZWcm7iLOc3vJMyW-_yjQ5/exec", {
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
