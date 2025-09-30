//Barra lateral do site principal
document.getElementById('open-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

// Cadastro e formulário 
document.getElementById("telefone").addEventListener("input", function(e) {
  let valor = e.target.value.replace(/\D/g, ""); 
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); 
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); 
  e.target.value = valor;
});