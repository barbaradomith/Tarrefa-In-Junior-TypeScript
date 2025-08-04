function retornarElemento<T>(array: T[], index: number): T {
  return array[index];
}

console.log(retornarElemento([10, 20, 30], 0)); 
console.log(retornarElemento(["a", "b", "c"], 2));
