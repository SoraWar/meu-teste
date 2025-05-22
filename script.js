import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzKvWtmaQGbkIB1G5PfPanV0vwamMeS-c",
  authDomain: "apptest-1b228.firebaseapp.com",
  databaseURL: "https://apptest-1b228-default-rtdb.firebaseio.com",
  projectId: "apptest-1b228",
  storageBucket: "apptest-1b228.firebasestorage.app",
  messagingSenderId: "408356425490",
  appId: "1:408356425490:web:3573237d22e83baf4f2dcb"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById('meuFormulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const codigo = document.getElementById("codigo").value;
  const valores = [
    document.getElementById("valor1").value,
    document.getElementById("valor2").value,
    document.getElementById("valor3").value,
    document.getElementById("valor4").value,
    document.getElementById("valor5").value,
    document.getElementById("valor6").value
  ];

  push(ref(db, 'dados/'), {
    codigo,
    valores
  })
  .then(() => alert("Dados enviados com sucesso!"))
  .catch((err) => alert("Erro: " + err.message));
});
