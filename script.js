document.getElementById('dadosForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  enviarDados();
});

function enviarDados() {
  const codigo = document.getElementById('codigo').value;
  const valores = Array.from(document.querySelectorAll('.valor')).map(input => input.value);

  // URL do seu Web App do Google Apps Script
  const gasWebAppUrl = 'https://script.google.com/macros/s/AKfycbzl0E6nr0cMNYeyMagABOgVjyAQbCHfNCSqvvuV5VvoCvb6kszaMHMT2B_RTXVT5k2H/exec';

  // Criar um objeto URLSearchParams para formatar os dados como key-value pairs
  const params = new URLSearchParams();
  params.append('codigo', codigo);
  // Iterar sobre os valores e adicioná-los.
  // Para valores em array, o GAS pode receber múltiplos parâmetros com o mesmo nome
  // ou você pode juntar em uma string.
  // Vamos juntar em uma string separada por vírgulas para simplificar no GAS.
  params.append('valores', valores.join(',')); // Envia os valores como uma única string "v1,v2,v3..."

  fetch(gasWebAppUrl, {
    method: 'POST',
    headers: {
      // Remover Content-Type: application/json
      // Deixe o navegador definir o Content-Type como application/x-www-form-urlencoded
      // ou se quiser ser explícito: 'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params // Envia os dados como URL-encoded
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }
    // O GAS retornará JSON, então ainda esperamos JSON aqui
    return response.json(); 
  })
  .then(data => {
    alert('Dados enviados com sucesso! Resposta do servidor: ' + JSON.stringify(data)); 
    document.getElementById('codigo').value = '';
    Array.from(document.querySelectorAll('.valor')).forEach(input => input.value = '');
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error);
    alert('Erro ao enviar: ' + error.message);
  });
}
