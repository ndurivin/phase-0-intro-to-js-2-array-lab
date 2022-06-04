// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push("Ralph");
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(naame){
    return cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(name){
    return cats.shift("Milo");
}

const newCats = [...cats, "Broom"];

function appendCat(name){
    return (newCats);
}

const prepCats = ["Arnold", ...cats];

function prependCat(name){
    return (prepCats);
}

const remCats = cats.slice(0, -1);

function removeLastCat(){
    return(remCats);
}

const remFirstCat = cats.slice(1);

function removeFirstCat(){
    return (remFirstCat);
}