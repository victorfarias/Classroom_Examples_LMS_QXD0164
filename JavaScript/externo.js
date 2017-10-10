

let x = 2;
let minhaVariavel = 3;
console.log(x);
console.log(typeof x);

console.log(3/0);
console.log(3/-0);

console.log("victor"*10);

console.log(Infinity-Infinity);

console.log(10 + 20 + 30 +30 +NaN + 50);

let s1 = "abc";
s1 = "bcd";
s1 = "a" + s1;
console.log(s1);


console.log("1" +2);
console.log(+"3")


if(0){
    console.log("Entou");
}else{
    console.log("Não entrou");
}

let l = [1,2,3];
l[2] = 4;
l[5] = 10;

delete l[2];
console.log(l);

let i = 0;
while(i<10){
    console.log("Tá rodando");
    i++;
}

for(let j=0; j<10; j++){
    console.log("Tá rodando");
}

let lista = [10,20,30,40,50,60,70,80,90,100];
for(let j=0; j<lista.length; j++){
    console.log(lista[j]);
}
for(i in lista){
    console.log(lista[i]);
}
for(el of lista){
    console.log(el);
}