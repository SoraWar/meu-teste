function enviarDados() {
  const codigo = document.getElementById("codigo").value;
  const inputs = document.querySelectorAll(".valor");
  const valores = Array.from(inputs).map(input => input.value);

  // Monta os parâmetros da URL
  const params = new URLSearchParams();
  params.append("codigo", codigo);
  valores.forEach((v, i) => params.append(`valor${i + 1}`, v));

  // URL do Google Apps Script
  const url = "https://script.google.com/macros/s/AKfycbwlUrhVVN1xX15lZrUKLFpb22e73oUCiggKdSO6JOyxtgXddPk7FWe-gZy_stESh6sX/exec" + params.toString();

  // Envia os dados
  fetch(url)
    .then(response => response.text())
    .then(data => {
      alert("Dados enviados com sucesso!");
    })
    .catch(error => {
      alert("Erro ao enviar dados.");
      console.error(error);
    });
}
