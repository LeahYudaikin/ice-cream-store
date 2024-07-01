let productsCart = [];

//כפתור הוספת מוצרים לסל
document.getElementById("next").onclick = (event) => {
  sessionStorage.setItem("Products_category", "החדשים של 2023");
  sessionStorage.setItem("name", "news");
  window.location = "../products/products.html";
};

//במקרה שהטבלה קיימת קבלת הטבלה הקודמת לתוך המערך
if (localStorage.getItem("tableCart"))
  productsCart = JSON.parse(localStorage.getItem("tableCart"));

if (productsCart.length > 0) {
  //יצירת כותרות הטבלה
  document.querySelector("thead").innerHTML = `
  <tr>
      <th class="title-delete_cart"></th>
      <th class="title-img_cart"></th>
      <th class="title-product_cart">מוצר</th>
      <th class="title-price_cart">מחיר</th>
      <th class="title-mount_cart">כמות</th>
      <th class="title-tempSum_cart">סכום ביניים</th>
  </tr>
    `;

  //מעבר על כל המערך וכתיבתו במסך
  productsCart.forEach((row) => {
    document.querySelector("tbody").innerHTML += row.html;
  });

  //חישוב סכומים
  //הכנסת הסכום הכולל
  let sum_all = 0;
  for (let i = 0; i < productsCart.length; i++) {
    sum_all += Number(productsCart[i].sum_t);
  }
  //חישוב מחיר משלוח, במקרה שהסכום גדול מ-150 משלוח חינם
  let deliver = 0;
  if (sum_all < 150) {
    deliver = 30;
  }

  document.getElementById("sum").innerHTML = `
<div id="text_title">סה"כ בסל הקניות</div>
<div id="sum_temp"><div id="text">סכום ביניים</div><div id="price">₪${sum_all}</div></div>
<div id="sum_deliver"><div id="text">משלוח</div><p>(בקניה מעל 150₪ המשלוח חינם)</p><div id="price">₪${deliver}</div></div>
<div id="sum_all"><div id="text">:סה"כ</div><div id="price">₪${
    sum_all + deliver
  }</div></div>
<button type="submit" id="submit" class="field_text" onclick="payment()">מעבר לתשלום</button>
`;

  function payment() {
    document.getElementById("titleCart").innerHTML = "";
    document.getElementById("next").innerHTML = "";
    document.getElementById("title_Cart").innerHTML = "עמוד התשלום";
    document.getElementById("contain").innerHTML = "";
    document.getElementById("pay").innerHTML = `
    <style>
        /* CSS styling for the payment form */       
        .container {
            width: 60vw;
            padding: 3vw;
            border: 1px solid #ccc;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(50, 50, 93, 0.25) 0px 5px 10px -8px;
            border-radius: 5px;
            direction: rtl;
            margin-top: 2.5vw;
            font-size: 1.4vw;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .form-group input,
        .form-group select {
            width: 20vw;
            border: 1px solid #ccc;
            border-radius: 1vw;
            background-color: hsl(60, 86%, 97%);
        }
        
        .form-group .card-info {
            display: flex;
        }
        
        .form-group .card-info input {
            flex: 1;
            margin-right: 10px;
        }
        
        .form-group .card-info input.card-number {
            flex: 2;
        }
        
        .form-group .card-info input.cvc {
            flex: 1;
        }
        
        .form-group .card-info input.expiry-date {
            flex: 1;
        }
        #amount{
          color: hsl(4, 84%, 37%);
          font-weight: bold;
        }
        #subm{
          color: hsl(60, 86%, 97%);
          background-color: hsl(4, 84%, 37%);
          font-weight: bold;
        }
    </style>
<body>
    <div class="container">
<form onsubmit="end()">
    <div class="form-group">
        <label for="name">שם מלא:</label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="address">כתובת:</label>
        <input type="text" id="address" name="address" required>
    </div>            
    <div class="form-group">
        <label for="phone">מספר טלפון:</label>
        <input type="text" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{7}" title="יש להכניס מספר טלפון בפורמט תקין (לדוגמה: 052-1234567)" required>
    </div>
    <div class="form-group">
        <label for="email">כתובת דוא"ל:</label>
        <input type="email" id="email" name="email" required>
    </div>           
    <div class="form-group">
        <label for="amount" id="amount">סכום לתשלום:</label>
        <div id="amount"> ₪${sum_all + deliver}</div>
    </div>
    <div class="form-group">
        <label for="card-number">מספר כרטיס אשראי:</label>
        <input type="text" id="card-number" name="card-number" pattern="[0-9]{16}" title="יש להכניס מספר כרטיס אשראי באורך 16 ספרות" required>
    </div>
    <div class="form-group card-info">
        <div>
            <label for="expiry-date">תוקף:</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/([0-9]{2})" title="יש להכניס תאריך תוקף בפורמט תקין (לדוגמה: 12/25)" required>
        </div>
        <div>
            <label for="cvc">CVC:</label>
            <input type="text" id="cvc" name="cvc" pattern="[0-9]{3}" title="יש להכניס CVC בפורמט תקין (לדוגמה: 123)" required>
        </div>
    </div>
    <div class="form-group">
        <input type="submit" value="שלם" id="subm">
    </div>
</form>

    `;
  }

  //הודעת סיום וריקון הסל
  function end() {
    document.getElementById("title_Cart").innerHTML = "";
    document.getElementById("title_Cart").style.border = "none";
    document.getElementById("pay").innerHTML = "";
    document.getElementById("items").innerHTML = 0;
    sessionStorage.setItem("items", 0);    
    productsCart.splice(0, productsCart.length);
    localStorage.setItem("tableCart", JSON.stringify(productsCart));
    document.getElementById("end").innerHTML = `
    <style>
    #end{
      display: inline-block;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(50, 50, 93, 0.25) 0px 5px 10px -8px;
      padding: 3vw;
      width: 50vw;
      border-radius: 3vw;
    }
    #hand{
      color: hsl(4, 84%, 37%);
    }
    #t1{
      font-size: 3vw;
    }
    #t2{
      margin-top: 3vw;
      font-size: 2vw;
    }
    </style>
    <div id="t1"><i class="fas fa-thumbs-up" id="hand"></i>התשלום בוצע בהצלחה</div>
    <div id="t2">(:להתראות בפעם הבאה</div>
    `;
  }

  //פונקציה למחיקת מוצר מהסל
  Trash();
  function Trash() {
    //מקבל את סימון המחיקה של כל המוצרים
    const trash_delete = document.querySelectorAll("#delete_cart");
    //לולאה שתזהה את המוצר שעליו נלחצה המחיקה
    trash_delete.forEach((trash) => {
      let Id;
      productsCart.forEach((row, index) => {
        if (trash.className == row.row) {
          Id = index;
        }
      });
      trash.onclick = (event) => {
        //עדכון הסכום תשלום
        sum_all -= Number(productsCart[Id].sum_t);
        //מחיקת המוצר
        productsCart.splice(Id, 1);

        localStorage.setItem("tableCart", JSON.stringify(productsCart));
        document.querySelector("tbody").innerHTML = "";

        //חישוב מחיר משלוח, במקרה שהסכום גדול מ-150 משלוח חינם
        deliver = 0;
        if (sum_all < 150) {
          deliver = 30;
        }
        //עדכון הסכומי תשלום
        document.getElementById("sum").innerHTML = `
  <div id="text_title">סה"כ בסל הקניות</div>
  <div id="sum_temp"><div id="text">סכום ביניים</div><div id="price">₪${sum_all}</div></div>
  <div id="sum_deliver"><div id="text">משלוח</div><p>(בקניה מעל 150₪ המשלוח חינם)</p><div id="price">₪${deliver}</div></div>
  <div id="sum_all"><div id="text">:סה"כ</div><div id="price">₪${
    sum_all + deliver
  }</div></div>
  <button type="submit" id="submit" class="field_text" onclick="payment()">מעבר לתשלום</button>
  `;
        //במקרה שנשארו מוצרים בסל כתיבתו מחדש
        if (productsCart.length > 0) {
          productsCart.forEach((row) => {
            document.querySelector("tbody").innerHTML += row.html;
          });
        }
        //במקרה שלא - השארת עמוד מתאים
        else {
          document.querySelector("thead").innerHTML = "";
          document.getElementById("titleCart").style.display = "block";
          document.getElementById("sum").style.backgroundColor =
            "hsl(49, 78%, 95%)";
          document.getElementById("sum").innerHTML = "";
          document.getElementById("title_Cart").style.display = "none";
        }
        Trash();
      };
    });
    //עדכון בעיגול ליד האייקון של הסל את כמות סוגי המוצרים שנמצאים בסל
    document.getElementById("items").innerHTML = `${productsCart.length}`;
    sessionStorage.setItem("items", productsCart.length);
  }
}

//במקרה שהסל ריק
else {
  document.getElementById("titleCart").style.display = "block";
  document.getElementById("title_Cart").style.display = "none";
  document.getElementById("sum").style.backgroundColor = "hsl(49, 78%, 95%)";
}
