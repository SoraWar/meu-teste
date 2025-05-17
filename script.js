function enviarDados() {
  const codigo = document.getElementById("codigo").value;
  const inputs = document.querySelectorAll(".valor");
  const valores = Array.from(inputs).map(input => input.value);

  fetch("https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwkG6vo-DrnImWBXMGsPqcBBJve4rpyzDnBuTA8FhwuIMbZjG83OBfe0Q1QIpEuRBzI/exec", {
    method: "POST",
    body: JSON.stringify(dados),
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
