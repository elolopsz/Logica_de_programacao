const metros = [1, 5, 10];
const centimetros = metros.map(m => m * 100);
centimetros.forEach(c => console.log(`${c}cm`));


const notas = [8, 4, 9, 5];
const notas_baixas = notas.filter(n => n < 6);
notas_baixas.forEach(n => console.log(n));


const alunos = ["Jotaro", "Gyro Zeppeli", "Josuke"];
const busca = alunos.find(nome => nome === "Gyro Zeppeli");
console.log(busca);


const entregas = [true, true, false]
const todosEntregaram = entregas.every(e => e === true);
console.log(todosEntregaram);


const nome = ["Diavolo", "Enrico Pucci"];
const maiusculas = nome.map(n => n.toUpperCase());
nome.forEach(n => console.log(n.toUpperCase()));
nome.map(n => console.log (n))
   .forEach(n => console.log(n));

   const arquivos = ["foto.jpg", "texto.txt", "ferias.jpg"];
   const apenasFotos = arquivos.filter(arquivos.endsWith(".jpg"));
   apenasFotos.forEach(arq => console.log(arq));
   

   const produto = ["Monitor Dell", "Mouse Razer", "Teclado Dell"];
   produtos.filter(p => p.includes("Dell")).map(s => s.toUpperCase()).forEach(i => console.log(i));

   let telefone = "(61) 1234-5678"
   const escondido = telefone.replace("(61)", "(**)");
   console.log(escondido);
