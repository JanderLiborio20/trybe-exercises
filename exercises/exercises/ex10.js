let custoDoProduto = 1;
let valorDeVenda = 3;
let imposto;
imposto = (custoDoProduto/100 * 20);
let valorCustoTotal = custoDoProduto + imposto;
let lucro = valorDeVenda - valorCustoTotal;
if(custoDoProduto >= 0 && valorDeVenda >= 0){
  imposto = (custoDoProduto/100 * 20);
  let valorCustoTotal = custoDoProduto + imposto;
  let lucro = valorDeVenda - valorCustoTotal;
  console.log(lucro);
}else{
  console.log("Error, os valores não podem ser negativos");
}