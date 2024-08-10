let card = ["red", "black", "#fff", "green", "pink", "yellow"]

shuffle(card);
console.log(card[0])

//  card.forEach( cards => con.innerHTML = `<p> ${cards} </br> </p> `);

con.style.backgroundColor = card[0]
function shuffle(arr) {
    let in1 = arr.length;

    while (in1 != 0) {
        let randomin = Math.floor(Math.random() * arr.length);
        in1 -= 1;

        let temp = arr[in1];
        arr[in1] = arr[randomin]
        arr[randomin] = temp

    }
    return arr;
}