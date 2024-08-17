let card = ["red", "black", "#fff", "green", "pink", "yellow"]

shuffle(card);
console.log(card[0])

//  card.forEach( cards => con.innerHTML = `<p> ${cards} </br> </p> `);

con.style.backgroundColor = card[0]

function shuffle(arr) {
    let int = arr.length;

    while (int != 0) {
        let Random = Math.floor(Math.random() * arr.length);
        int -= 1;

        let temp = arr[int];
        arr[int] = arr[Random]
        arr[Random] = temp

    }
    return arr;
}

// let arr = [...new Set(obj.map((i)=> {return i}))]  //object to array