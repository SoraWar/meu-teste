async function enviarDados() {
  const codigo = document.getElementById("codigo").value;
  const valores = Array.from(document.querySelectorAll(".valor")).map(input => input.value);

  const dados = {
    codigo: codigo,
    valores: valores
  };

  try {
    const resposta = await fetch("https://script.google.com/macros/s/AKfycbwlUrhVVN1xX15lZrUKLFpb22e73oUCiggKdSO6JOyxtgXddPk7FWe-gZy_stESh6sX/exec", {
      method: "POST",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const texto = await resposta.text();
    alert(texto);
  } catch (erro) {
    alert("Erro ao enviar dados: " + erro.message);
  }
}

