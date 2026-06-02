class Personagem {
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

            alvo.hp = Math.max(
                0,
                alvo.hp - habilidade.dano
            );

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

            console.log(
                "Sem mana ou energia suficiente."
            );

        }
    }

    boss_atacar(alvo) {

        if (this.energia >= 100) {

            alvo.hp = Math.max(
                0,
                alvo.hp - 25
            );

            this.energia -= 100;

            console.log(
                `${this.nome} atacou ${alvo.nome}`
            );

            console.log(
                `${alvo.nome} ficou com ${alvo.hp} HP`
            );

        } else {

            this.energia += 20;

            console.log(
                `${this.nome} carregou energia (${this.energia}/100)`
            );

        }
    }
}


class Ataque {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}


// criar personagens
let hero = new Personagem(
    "R-01",
    "A arqueira",
    100,
    100,
    0
);

let boss = new Personagem(
    "Azog",
    "O guerreiro polvo",
    100,
    0,
    50
);


// preencher informações
document.getElementById("nome-hero").textContent =
    hero.nome;

document.getElementById("titulo-hero").textContent =
    hero.titulo;


// habilidades
let listaHabilidades = [
    new Ataque(1, "🎯 Tiro certeiro", 20, 10, 0),
    new Ataque(2, "💥 Explosão de flechas", 30, 20, 0),
    new Ataque(3, "🏹 Chuva de flechas", 40, 30, 0)
];


// container dos botões
let containerBtn =
    document.getElementById("controles");


// criar botões
listaHabilidades.forEach(hab => {

    let btn = document.createElement("button");

    btn.innerText = hab.nome;

    btn.classList.add(
        "btn",
        "btn-primary"
    );

    btn.addEventListener("click", () => {

        if (
            hero.hp <= 0 ||
            boss.hp <= 0
        ) {
            return;
        }

        // herói ataca
        hero.hero_atacar(
            boss,
            hab
        );

        // boss responde
        if (boss.hp > 0) {
            boss.boss_atacar(hero);
        }

        atualizarTela();

        verificarFimDeJogo();

    });

    containerBtn.appendChild(btn);

});


// atualizar interface
function atualizarTela() {

    // HP herói
    document.getElementById(
        "hp-hero"
    ).value = hero.hp;

    // HP boss
    document.getElementById(
        "hp-boss"
    ).value = boss.hp;

    // Mana herói
    document.getElementById(
        "mp-hero"
    ).value = hero.mana;

    // Energia herói
    document.getElementById(
        "en-hero"
    ).value = hero.energia;

    document.getElementById("hp-boss").value = azog.hp;
    document.getElementById("mp-boss").value = azog.mana;
    document.getElementById("en-boss").value = azog.energia;

}


// game over
function game_over() {

    alert("☠️ GAME OVER!");

    document
        .querySelectorAll(
            "#controles button"
        )
        .forEach(btn => {
            btn.disabled = true;
        });

}


// vitória
function vitoria() {

    alert("🏆 VOCÊ VENCEU!");

    document
        .querySelectorAll(
            "#controles button"
        )
        .forEach(btn => {
            btn.disabled = true;
        });

}


// verificar resultado
function verificarFimDeJogo() {

    if (hero.hp <= 0) {
        game_over();
    }

    if (boss.hp <= 0) {
        vitoria();
    }

}


// iniciar tela
atualizarTela();