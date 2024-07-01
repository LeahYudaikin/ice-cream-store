const cards = [];
const box = document.createElement("div");
box.id = "box";
main.appendChild(box);
const names = [`איך שומרים על טריות הקרמבו באריזה החדשה`, `?איך שומרים על טריות הגלידות בקיץ הישראלי`, `?ולמה היא כ"כ מפתה Goodiz אז מהי בעצם גלידת`, `השלגונים שאתם הכי אוהבים - אצלכם בבית`, `!חולי שוקולד, התפקדו`, `חגיגת קיץ טבעונית: שלגונים וטילונים "Vegan friendly" בגלידת שטראוס`, `טעימים-וכשרים לפסח: הגלידות והשלגונים שילוו אותנו בחג האביב`, `החגיגה כבר מתחילה: גלידת שטראוס פותחת עוד עונה מעולה`, `ההבטחה של קרמבו: אותו טעם אהוב רק באריזה ידידותית יותר לסביבה`, `להכין ברבע שעה: 3 הצעות ומתכונים לאירוח ביתי מושלם`, `לכל אדם יש שלגון: איזה תכונות אופי מסתתרות מאחורי הגלידה האהובה עליכם?`, `גלידות מופחתות קלוריות, אך לא מופחתות טעם - בואו להנות איתנו`]

class magazin {
    Picture;
    Name;

    constructor(Picture, Name) {
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
        <img src="../../pic/magzin/${i+1}.png" id="card_img" class="${i}">
        <div id="ticket" class="${i}">${this.Name}</div>
        `
    }
}

for (let i = 0; i < names.length; i++) {
    const card = new magazin(i, names[i]);
    cards.push(card);
    cards[i].rander(i);
}


// פתיחת המגזין
const _name_ = document.querySelectorAll("#card_img");
//זיהוי הכפתור שעליו נלחץ
_name_.forEach(card_img => {
    let temp;
    cards.forEach(card => {
        if (card.Picture == card_img.className) {
            temp = JSON.stringify(card);
        }
    });
    //יצירת לחיצה שתעביר לעמוד המגזין המתאים
    card_img.onclick = (event) => {
        sessionStorage.setItem("detailsOFcard", temp);
        window.location="./magzin 2.html";
    }
});
