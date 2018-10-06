var celular = {
    marca : "samsung",
    modelo: "Note",
    encender: () => {
        console.log("Encendiendo...");
        return "Hola";
    }
}

console.log(celular.marca);
console.log(celular['modelo']);
console.log(celular.encender());

for (var x in celular) {
    console.log(x, celular[x]);
}