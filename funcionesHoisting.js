// Declaração de função (Função hoisting)
falaOi();

function falaOi() {
  console.log("Oie");

  //Também poderiamos considerar o uso de retorno nessa função.
}

/*Este tipo de funçao elevam o motor do javascript para que elas cheguem até o topo do script, de modo que você pode executa-las já no começo, como podemos ver acima.*/

//Este tipo de função, também se chamam de "First-Class objects", que significa que permitem que esta funções sejam guardadas em variaveis, sendo tratadas como um dado. Exemplo:
const dado = function () {
  console.log("sou um dado");
};
//dado();

//Além disso, também podemos pasar estas funções como parametros dentro de outras funções, exemplo:
function executaFuncao(funcao) {
  console.log("vou executar sua função abaixo:");
  funcao();
}
executaFuncao(dado);

//É por este motivo que dizemos que em javascript, estas funçoes sao objetos de primeira classe, porque podemos trata-las como objetos e dados.

/* ---------------------------------------------------- */

//ARROW FUNCTION

const funcaoArrow = () => {
  console.log("sou uma arrow function.");
};
funcaoArrow();