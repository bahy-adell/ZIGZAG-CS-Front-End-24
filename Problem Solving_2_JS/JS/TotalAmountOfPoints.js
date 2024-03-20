//   problem --->   https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    let x ,numberOfPoints=0 ;
    for (let i =0 ; i<games.length ; i++) {
        x= parseInt(games[i][0]);
        y= parseInt(games[i][2]);
        if (x > y){ numberOfPoints+=3;}
        if (x === y){ numberOfPoints+=1;}
        if (x < y){ numberOfPoints+=0;}

    }


    return numberOfPoints;
    

}


 let res = points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "5:2", "0:3"]);
 console.log(res);
