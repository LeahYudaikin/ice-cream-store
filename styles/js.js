document.getElementById("logo").onclick = (event) => (window.location = "../home/home.html")
document.getElementById("li2").onclick = (event) => (window.location = "../delicious/delicious.html")
document.getElementById("li3").onclick = (event) => (window.location = "../magzin/magzin.html")
document.getElementById("li4").onclick = (event) => (window.location = "../questions/questions.html")
document.getElementById("li5").onclick = (event) => (window.location = "../information/information.html")

document.getElementById("cart").onclick = (event) => (window.location = "../cart/cart.html")

// ----------------------------------------------
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");
const p8 = document.getElementById("p8");
const p9 = document.getElementById("p9");
const p10 = document.getElementById("p10");
const p11 = document.getElementById("p11");
const p12 = document.getElementById("p12");
const p13 = document.getElementById("p13");
const p14 = document.getElementById("p14");

// מוצרים
p1.onclick = (event) => {
   sessionStorage.setItem("Products_category", "החדשים של 2023")
   sessionStorage.setItem("name", "news")
   window.location = "../products/products.html";
}
p2.onclick = (event) => {
   sessionStorage.setItem("Products_category", "מגנום")
   sessionStorage.setItem("name", "magnum")
   window.location = "../products/products.html";
}
p3.onclick = (event) => {
   sessionStorage.setItem("Products_category", "קורנטו")
   sessionStorage.setItem("name", "korneto")
   window.location = "../products/products.html";
}
p4.onclick = (event) => {
   sessionStorage.setItem("Products_category", "LELO הטעמים של")
   sessionStorage.setItem("name", "lelo")
   window.location = "../products/products.html";
}
p5.onclick = (event) => {
   sessionStorage.setItem("Products_category", "קינוחי גלידה")
   sessionStorage.setItem("name", "icecream")
   window.location = "../products/products.html";
}
p6.onclick = (event) => {
   sessionStorage.setItem("Products_category", "ללא גלוטן")
   sessionStorage.setItem("name", "gloten")
   window.location = "../products/products.html";
}
p7.onclick = (event) => {
   sessionStorage.setItem("Products_category", "חטיפי גלידה")
   sessionStorage.setItem("name", "minies_icecream")
   window.location = "../products/products.html";
}
p8.onclick = (event) => {
   sessionStorage.setItem("Products_category", "Goodiz")
   sessionStorage.setItem("name", "goodiz")
   window.location = "../products/products.html";
}
p9.onclick = (event) => {
   sessionStorage.setItem("Products_category", "שלגוני ילדים ומשפחה")
   sessionStorage.setItem("name", "children")
   window.location = "../products/products.html";
}
p10.onclick = (event) => {
   sessionStorage.setItem("Products_category", "קרמבו")
   sessionStorage.setItem("name", "krembo")
   window.location = "../products/products.html";
}
p11.onclick = (event) => {
   sessionStorage.setItem("Products_category", "טבעוני")
   sessionStorage.setItem("name", "vegan")
   window.location = "../products/products.html";
}
p12.onclick = (event) => {
   sessionStorage.setItem("Products_category", "הטעמים של סולרו")
   sessionStorage.setItem("name", "solero")
   window.location = "../products/products.html";
}
p13.onclick = (event) => {
   sessionStorage.setItem("Products_category", "גלידה ביתית")
   sessionStorage.setItem("name", "home_icecream")
   window.location = "../products/products.html";
}
p14.onclick = (event) => {
   sessionStorage.setItem("Products_category", "קרטיבים")
   sessionStorage.setItem("name", "kartivim")
   window.location = "../products/products.html";
}



//התחברות
//קבלת מיקום וכרטיס שבו יוזן תוכן ההתחברות
const contection_card = document.getElementById("contection_card");
const insert_card = document.getElementById("insert_card");

//בכל מקרה של לחיצה על ההתחברות פתיחת חלונית התחברות רגילה
insert_card.onclick = (event) => (contected());

//מערך של כל הלקוחות שרשומים במערכת
let customers = [
   {
      name: "Leah",
      password: "326655560",
      email: "L0556723790@gmail.com"
   }
];

// //התא שמקבל את שם המשתמש
// const name_customer=document.getElementById("name_customer");

// //אם נשלח בסיישן שם להכנסה
// if(sessionStorage.getItem("name_customer")!=null){
//    let nameOFcustomer=sessionStorage.getItem("name_customer");
//    name_customer.innerHTML=nameOFcustomer;
// }

//התחברות רגילה של שם וסיסמא
function contected() {
   contection_card.innerHTML = `
    <form class="form_card" onsubmit="sub()">
    <div id="container">
    <button id="newuser" onclick="new_user()">צור חשבון חדש</button>
    <label for="title" id="t">התחברות</label>
    </div>
    <br></br>
    <div id="title"><div id="c">*</div>שם משתמש</div>
    <input id="name_c" class="field_text" required>
    <div id="title"><div id="c">*</div>סיסמא</div>
    <input type="password" id="password" class="field_text" required>
    <br></br>
    <div id="massege"></div>
    <button type="submit" id="submit" class="field_text">התחבר</button>
    </form>`
}

//הרשמה ראשונית של משתמש חדש
function new_user() {
   contection_card.innerHTML = `
   <form class="form_card"  onsubmit="sub_new()">
   <div id="container">
   <label for="title" id="t">הרשמה</label>
   </div>
   <br></br>
   <div id="title"><div id="c">*</div>שם משתמש</div>
   <input type="" id="name_c_new" class="field_text" required>
   <div id="title">כתובת מייל</div>
   <input type="mail" id="mail" class="field_text">
   <div id="title"><div id="c">*</div>סיסמא</div>
   <input type="password" id="password_new" class="field_text" required>
   <div id="title"><div id="c">*</div>הקשת הסיסמא שנית</div>
   <input type="password" id="password_new2" class="field_text" required>    
   <br></br>
   <div id="massege"></div>
   <button type="submit" id="submit" class="field_text">הירשם</button>
   </form>`
}

//פונקצית התחברות של משתמש חדש
function sub_new() {
   //בדיקת הסיסמא שהוקשה ואם זהה מעבר להתחברות רגילה ואם לא נתינת אופציה להרשמה מחדש
   if (document.getElementById("password_new").value != document.getElementById("password_new2").value) {
      new_user();
      massege.innerHTML = `!אימות הסיסמא נכשל`;
   }
   else {
      //בדיקה אם המשתמש כבר רשום
      let flag = 0;
      for (let i = 0; i < customers.length && flag == 0; i++) {
         if (document.getElementById("name_c_new").value == customers[i].name) {
            flag = 1;
         }
      }
      //אם לא רשום הכנסת הפרטים ללוקל
      if (flag == 0) {
         customers.push({ name: name_c_new.value, password: password_new2.value, email: mail.value });
         localStorage.setItem("customers", JSON.stringify(customers));
      }
   }
   contected();
   massege.innerHTML = `הכנס פרטים להתחברות`;
}


//פונקציית ההתחברות של המשתמש
function sub() {
   let flag = 0;
   //מעבר על מערך המשתמשים ובדיקה אם שם המשתמש כבר קיים
   for (let i = 0; i < customers.length && flag == 0; i++) {
      //במקרה שנמצא כזה שם משתמש סימון הפלאג
      if (document.getElementById("name_c").value == customers[i].name) {
         flag = 1;
      }
   }
   //במקרה שלא נמצא כזה משתמש יועבר להרשמת משתמש חדש
   if (flag == 0) {
      new_user();
      massege.innerHTML = `הירשם כמשתמש חדש`;
   }
   //במקרה ששם המשתמש נמצא
   if (flag == 1) {
      //במקרה שהסיסמא נכונה- כתיבת שם במשתמש בפרופיל
      if (document.getElementById("password2").value == customers[i].password) {
         insert_card.innerHTML="";
         fname(i);
      }
      //במקרה שלא נכונה- פתיחת חלון ההתחברות מחדש והודעת סיסמא שגויה
      else {
         contected();
         massege.innerHTML = `!סיסמא שגויה`;
      }
   }
   if (localStorage.getItem("customers")) {
      customers = JSON.parse(localStorage.getItem("customers"));
   }
}

//פונקציית השם והכנסתו לסיישן
function fname(i) {
   let name = JSON.parse(sessionStorage.getItem("name_customer"));
   document.getElementById("name_customer").innerHTML=name;
}

//עדכון העיגול שליד הסל בכמות המוצרים שיש בסל
let item = JSON.parse(sessionStorage.getItem("items"));
document.getElementById("items").innerHTML=item;