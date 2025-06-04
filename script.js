function enviarDados() {
  const codigo = document.getElementById('codigo').value;
  const valores = Array.from(document.querySelectorAll('.valor')).map(input => input.value);

  fetch('https://script.google.com/macros/s/AKfycbwlUrhVVN1xX15lZrUKLFpb22e73oUCiggKdSO6JOyxtgXddPk7FWe-gZy_stESh6sX/exec', {
    method: 'POST',
    mode: 'no-cors', // importante para evitar CORS
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      codigo: codigo,
      valores: valores
    })
  })
  .then(() => {
    alert('Dados enviados com sucesso!');
  })
  .catch((error) => {
    alert('Erro ao enviar: ' + error.message);
  });
}
