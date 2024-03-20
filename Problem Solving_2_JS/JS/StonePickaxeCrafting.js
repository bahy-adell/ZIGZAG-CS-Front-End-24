//  problem ----->  https://www.codewars.com/kata/65c0161a2380ae78052e5731/train/javascript


//  A single stone pickaxe is made of 3 "Cobblestone" and 2 "Sticks"
function stonePick(arr) {
    let Sticks = 0
    ,   Cobblestones = 0
    ,   pickaxes =0 ;
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i]==="Sticks"){
            Sticks++;
        }
        if(arr[i]==="Cobblestone"){
            Cobblestones++;
        }
        if(arr[i]==="Wood"){
            Sticks+=4; 
        }
        if (Cobblestones>=3 && Sticks>=2){
            pickaxes++;
            Cobblestones-=3;
            Sticks-=2;   
        }
    }
     return pickaxes ;
}

console.log (stonePick( ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"]));