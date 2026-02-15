const form = document.getElementById('formFornecedor');
const lista = document.getElementById('listaFornecedores');
const toggleBtn = document.getElementById('toggleLista');
const limparBtn = document.getElementById('limparLista');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nomeFornecedor').value;
  const idade = document.getElementById('idadeFornecedor').value;
  const turma = document.getElementById('turmaFornecedor').value.trim();

  const li = document.createElement('li');
  li.textContent = `${nome} - ${idade} anos - Turma ${turma}`;

  // aplica cor por turma
  if (turma.toLowerCase() === 'a') {
    li.classList.add('turmaA');
  } else if (turma.toLowerCase() === 'b') {
    li.classList.add('turmaB');
  } else if (turma.toLowerCase() === 'c') {
    li.classList.add('turmaC');
  }

  lista.appendChild(li);
  form.reset();
});

// botão mostrar/esconder lista
toggleBtn.addEventListener('click', function() {
  if (lista.style.display === 'none') {
    lista.style.display = 'block';
    toggleBtn.textContent = 'Esconder Lista';
  } else {
    lista.style.display = 'none';
    toggleBtn.textContent = 'Mostrar Lista';
  }
});

// botão limpar lista
limparBtn.addEventListener('click', function() {
  lista.innerHTML = '';
});
