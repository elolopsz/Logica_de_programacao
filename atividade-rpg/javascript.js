class personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }

    hero_atacar(alvo, habilidade) {

        if (
            this.mana >= habilidade.custo &&
            this.energia >= habilidade.energia
        ) {

            alvo.hp -= habilidade.dano;

            // gastar mana
            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 20;
            }

            // gastar energia
            this.energia -= habilidade.energia;

            console.log(
                `${this.nome} usou ${habilidade.nome} em ${alvo.nome}`
            );

            console.log(
                `${alvo.nome} ficou com ${alvo.hp} HP`
            );

        } else {

            console.log("Sem mana ou energia suficiente.");

        }
    }
    boss_atacar(alvo) {
        if (this.energia >= 100) {
            alvo.hp -= 25;
            this.energia -= 0;
        }else {
            this.energia += 20;
        }
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
let hero = new personagem(
    "R-01",
    "A arqueira",
    100,
    100,
    0
);

let boss = new personagem(
    "Azog",
    "O guerreiro polvo",
    100,
    0,
    50
);


// preencher os status
document.getElementById("nome-hero")
.textContent = hero.nome;

document.getElementById("titulo-hero")
.textContent = hero.titulo;


// criar habilidades
let listaHabilidades = [
    new ataque(1, "🎯 Tiro certeiro", 20, 10, 0),
    new ataque(2, "💥 Explosão de flechas", 30, 20, 0),
    new ataque(3, "🏹 Chuva de flechas", 40, 30, 0)
];


// container dos botões
let containerBtn = document.getElementById("controles");


// mostrar habilidades na tela
listaHabilidades.forEach(hab => {

    let btn = document.createElement("button");

    btn.innerText = hab.nome;

    btn.classList.add("btn", "btn-primary");

    btn.addEventListener("click", () => {

        hero.hero_atacar(boss, hab);

        atualizarTela();

    });

    containerBtn.appendChild(btn);

});


// atualizar tela
const atualizarTela = () => {

    // HP do boss
    document.getElementById("hp-boss").value = boss.hp;

    // Mana do herói
    document.getElementById("mp-hero").value = hero.mana;

    // Energia do herói
    document.getElementById("en-hero").value = hero.energia;
};


// iniciar tela
atualizarTela();