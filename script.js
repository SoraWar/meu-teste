document.getElementById('dadosForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)
  enviarDados(); // Chama a função para enviar os dados
});

function enviarDados() {
  const codigo = document.getElementById('codigo').value;
  const valores = Array.from(document.querySelectorAll('.valor')).map(input => input.value);

  // URL do seu Web App do Google Apps Script (substitua pelo URL correto)
  const gasWebAppUrl = 'https://script.google.com/macros/s/AKfycbwlUrhVVN1xX15lZrUKLFpb22e73oUCiggKdSO6JOyxtgXddPk7FWe-gZy_stESh6sX/exec';

  fetch(gasWebAppUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Indica que estamos enviando dados JSON
    },
    body: JSON.stringify({ // Converte os dados para JSON
      codigo: codigo,
      valores: valores
    }),
    redirect: 'follow' // Permite redirecionamentos (importante para o GAS)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }
    return response.json(); // Espera uma resposta JSON do servidor
  })
  .then(data => {
    alert('Dados enviados com sucesso! Resposta do servidor: ' + JSON.stringify(data)); // Exibe a resposta do servidor
    // Limpa os campos do formulário (opcional)
    document.getElementById('codigo').value = '';
    Array.from(document.querySelectorAll('.valor')).forEach(input => input.value = '');
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error);
    alert('Erro ao enviar: ' + error.message);
  });
}
