class personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }                            
}
class ataque {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// instancia classes - criar objetos
let hero = new personagem("R-01", "A arqueira",100, 100, 0);
let boss = new personagem("azog", "O guerreiro polvo", 100, 0, 50);
// preencher os status 
document
getElementById("nome-hero")
textContent = hero.nome;
document
.getElementById("titulo-hero")
.textContent = hero.titulo;
// criar habilidades
let listaHabilidades = [
    new Habilidade(1, " 🎯Tiro certeiro", 20, 10, 0),
    new Habilidade(2, "💥 Explosão de flechas", 30, 20, 0),
    new Habilidade(3, "🏹 chuva de flechas", 40, 30, 0)

];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button"); //<button>
    btn.innerText = hab.nome; 
    CSSContainerRule.appendChild(btn);
 }); //adiciona o botão ao container
