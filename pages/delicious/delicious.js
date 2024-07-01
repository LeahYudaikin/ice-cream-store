const cards = [];
const box = document.createElement("div");
box.id = "box";
main.appendChild(box);
const names = [`צנצנות כוורת דבש`, `טירמיסו אישי בכוסות`, `סנדוויץ' קרמיסימו`, `גלידונית פנסי`, `תפוחי גלידה על מקל`, `סופגניות קרמיסימו`, `עוגת טעמקור`, `גביעי שוקולד צ'יפס`, `עוגת יום הולדת טעמקור`, `קאפקייק רד וולווט`, `קורנטו לוטוס קייק`, `גלידה מטוגנת`, `עוגת קרמיסמו ועוגיות`, `פיצה גלידה קרמיסימו`, `קראמבל קרמיסימו`, `עוגת קרמבו`, `סנדוויץ' מצה עם קרמל, שוקולד וגלידה`, `שייק גלידת גבינה ופירורים`]

class delicious {
    ID;
    Picture;
    Name;

    constructor(ID, Picture, Name) {
        this.ID=ID;
        this.Picture = Picture;
        this.Name = Name;
    }

    rander(i) {
        //הצהרה על דיב חדש והכנסתו לדיב האב
        const card = document.createElement("div");
        card.className = "card";
        card.id = `card${i}`;
        box.appendChild(card);

        document.querySelector(`#card${i}`).innerHTML += `
        <img src="../../pic/delicious/${i+1}.webp" id="card_img" class="${this.ID}">
        <div id="ticket" class="${this.ID}">${this.Name}</div>
        `
    }
}

for (let i = 0; i < names.length; i++) {
    const card = new delicious(i+1, i, names[i]);
    cards.push(card);
    cards[i].rander(i);
}


// פתיחת המתכון
const _name_ = document.querySelectorAll("#card_img");
//זיהוי הכפתור שעליו נלחץ
_name_.forEach(card_img => {
    let temp;
    cards.forEach(card => {
        if (card.ID == card_img.className) {
            temp = JSON.stringify(card);
        }
    });
    //יצירת לחיצה שתעביר לעמוד המתכון המתאים
    card_img.onclick = (event) => {
        sessionStorage.setItem("detailsOFcard", temp);
        window.location="./delicious2.html";
    }
});