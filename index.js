//CLASSIFICADOR DE NIVEL DE HEROI
let heroi = "Senna"
let xp = 20000
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if(xp < 1000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[0])

} else if(xp > 1000 && xp <= 2000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[1])

} else if(xp > 2000 && xp <= 5000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[2])

} else if(xp > 6000 && xp <= 7000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[3])

} else if(xp > 7000 && xp <= 8000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[4])

} else if(xp > 8000 && xp <= 9000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[5])

} else if(xp > 9000 && xp <= 10000){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[6])

} else if(xp >= 10001){
    console.log("O Herói de nome " + heroi + " está no nível de " + nivel[7])

}