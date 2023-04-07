//alertt

function exibirAlerta() {
  var alerta = document.getElementById("alerta");
  alerta.style.display = "block";
}

window.onload = exibirAlerta;
function fecharAlerta() {
  var alerta = document.getElementById("alerta");
  alerta.style.display = "none";
}


// fim alert


//navbar1
// Seleciona a navbar e a posição do scroll na página
const navbar = document.querySelector('.navbar');
const scrollPosition = window.scrollY;

// Adiciona a classe .sticky na navbar quando o scroll passa da posição da navbar
if (scrollPosition >= navbar.offsetTop) {
  navbar.classList.add('sticky');
} else {
  navbar.classList.remove('sticky');
}
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= navbar.offsetTop) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  //fim navbar1


  //parrte de proximo evento

  const proximoEvento = {
    nome: "Conferencia Edificados",
    data: "20/08/2023",
  };
  
  const eventoNome = document.getElementById("evento-nome");
  const eventoData = document.getElementById("evento-data");
  eventoNome.textContent = proximoEvento.nome;
  eventoData.textContent = `Data: ${proximoEvento.data}`;

  //fim deste parte acima