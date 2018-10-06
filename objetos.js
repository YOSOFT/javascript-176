var celular = {
    marca : "samsung",
    modelo: "Note"
}

console.log(celular.marca);
console.log(celular['modelo']);

for (const key in celular) {
    console.log(key)
}