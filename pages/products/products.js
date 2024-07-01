class Products {
    Picture;
    Name;
    Price;
    PriceInt;
    Sku;

    constructor(Picture, Name, Price, PriceInt, Sku) {
        this.Picture = Picture;
        this.Name = Name;
        this.Price = Price;
        this.PriceInt = PriceInt;
        this.Sku = Sku;
    }

    rander(i) {
        //הצהרה על דיב חדש והכנסתו לדיב האב
        const card = document.createElement("div");
        card.className = "card";
        card.id = `card${i}`;
        box.appendChild(card);

        document.querySelector(`#card${i}`).innerHTML += `
        <div id="img-heart-cart" class="${this.Sku}">
            <img src="../../pic/products/${name}/${this.Picture + 1}.webp" id="img_product" class="${this.Sku}">
        <div id="heart-cart" class="${this.Sku}">    
            <div id="add_heart" class="${this.Sku}"><i class="far fa-heart"></i></div>
            <div id="add_cart" class="${this.Sku}"><input type="number" min="1" max="50" value="1" id="mount" class="${this.Sku}"><div id="add" class="${this.Sku}">הוספה לסל </div><i id="add" class="fa-solid fa-cart-shopping"></i></div>
        </div></div>
        <div id="name-price" class="${this.Sku}">
            <div id="name_product" class="${this.Sku}">${this.Name}</div>
            <div id="price_product" class="${this.Sku}">₪${this.Price}</div>
        </div>`
    }
}

// מקבלת שם של קטגוריה ומייצרת בוקס שהוא בן של מיין ודטיילס שבו התמונה המתאימה וכותרת
const Products_category = sessionStorage.getItem("Products_category");
const name = sessionStorage.getItem("name");
const products = [];
document.getElementById("main").innerHTML = "";
const details = document.createElement("div");
details.className = "details";
main.appendChild(details);
const box = document.createElement("div");
box.id = "box";
main.appendChild(box);
//תמונה מותאמת לקטגוריה
const img = document.createElement("img");
img.id = "img";
img.src = `../../pic/products/${name}/0.png`;
details.appendChild(img);
//כותרת לקטגוריה
const category = document.createElement("div");
category.id = "category";
details.appendChild(category);
document.getElementById("category").innerHTML = `-${Products_category}-`;

//פונקציה המייצרת את תצוגת המוצרים בהתאם לסוג המבוקש
function create_object(names, prices, prices2, sku) {

    // הלולאה ממלאת מערך באובייקטי מוצרים ע"י בנאי ממחלקת מוצרים 
    //הלולאה מייצרת את תצוגת הכרטיסים
    for (let i = 0; i < sku.length; i++) {
        let product = new Products(i, names[i], prices[i], prices2[i], sku[i]);
        products.push(product);
        products[i].rander(i);
    }
}


//שליחה לפונקציה מותאמת ע"פ סוג המוצר שנבחר
switch (Products_category) {
    case "החדשים של 2023":
        news();
        break;
    case "מגנום":
        magnum();
        break;
    case "קורנטו":
        korneto();
        break;
    case "LELO הטעמים של":
        lelo();
        break;
    case "קינוחי גלידה":
        icecream();
        break;
    case "ללא גלוטן":
        gloten();
        break;
    case "חטיפי גלידה":
        minies_icecream();
        break;
    case "Goodiz":
        goodiz();
        break
    case "שלגוני ילדים ומשפחה":
        children();
        break;
    case "קרמבו":
        krembo();
        break;
    case "טבעוני":
        vegan();
        break;
    case "הטעמים של סולרו":
        solero();
        break;
    case "גלידה ביתית":
        home_icecream();
        break;
    case "קרטיבים":
        kartivim();
        break
}

//פירוט המוצרים לכל סוג
//החדשים שלנו
function news() {
    const names = [`בטעמי שוקו ופקאן - LELO`, `בטעמי וניל חלבה - LELO`, `בטעמי וניל וקרמל מלוח - LELO`, `מנגו וקוקוס SUNLOVER מגנום דאבל`, `בטעם פופקורן STARCHASER מגנום דאבל`, `מגנום לבן פיסטוק`, `קורנטו פיסטוק`, `Solero Watermelon Fresh`, `Solero Lemon Fresh`, `סולרו וניל, בננה וסילאן`, `קסטה חד קרן`, `מגנום פיינט גולד`, `מאגדת מיני מגנום מנגו וקוקוס`, `SOLERO קרמיסימו`, `קרמיסימו שוקו ומרשמלו`, `מאגדת קורנטו בטעם וניל עוגיות`, `מאגדת גודיז בטעם קרמל מלוח`];//מערך שמות
    const prices = [`28.50`, `28.50`, `28.50`, `9.00`, `9.00`, `9.00`, `15.00`, `4.50`, `4.50`, `8.00`, `12.50`, `30.00`, `35.00`, `25.40`, `21.00`, `34.50`, `38.00`];//מערך מחירים בהתאמה
    const prices2 = [28.50, 28.50, 28.50, 9.00, 9.00, 9.00, 15.00, 4.50, 4.50, 8.00, 12.50, 30.00, 35.00, 25.40, 21.00, 34.50, 38.00];//מערך מחירים בהתאמה
    const sku = [`100`, `101`, `102`, `103`, `104`, `105`, `106`, `107`, `108`, `109`, `110`, `111`, `112`, `113`, `114`, `115`, `116`];
    create_object(names, prices, prices2, sku);
    //מגנום    
} function magnum() {
    const names = [`מנגו וקוקוס SUNLOVER מגנום דאבל`, `בטעם פופקורן STARCHASER מגנום דאבל`, `מגנום לבן פיסטוק`, `מגנום שקדים מובחרים`, `מגנום שוקולד לבן`, `מגנום דואט שוקולד עם נוגט`, `מגנום דאבל פרי יער`, `מגנום שוקולד`, `מגנום דאבל דולצ'ה גולד`, `SUPER מגנום טילון`, `מגנום טילון לבן`, `מגנום כוס אישית וניל שקדים`, `מגנום כוס אישית וניל קלאסיק`, `מגנום פיינט גולד`, `מגנום פיינט וניל קלאסיק`, `מגנום פיינט וניל שקדים`, `מגנום פיינט שוקולד לבן ועוגיות`, `מאגדת מיני דואט שוקולד עם נוגט`, `מאגדת מיני שוקולד לבן`, `מאגדת מיני קלאסיק | שוקולד`, `מאגדת מיני שקדים מובחרים`, `מאגדת מיני מגנום מנגו וקוקוס`, `מאגדת מיני דאבל דולצ'ה גולד`, `מאגדת מיני דאבל פרי יער | שוקולד`];
    const prices = [`9.00`, `9.00`, `8.00`, `8.00`, `8.00`, `8.00`, `8.50`, `8.00`, `9.00`, `12.50`, `12.50`, `15.50`, `15.50`, `30.00`, `30.00`, `30.00`, `30.00`, `35.00`, `35.00`, `35.00`, `35.00`, `35.00`, `41.00`, `41.00`];
    const prices2 = [9.00, 9.00, 8.00, 8.00, 8.00, 8.00, 8.50, 8.00, 9.00, 12.50, 12.50, 15.50, 15.50, 30.00, 30.00, 30.00, 30.00, 35.00, 35.00, 35.00, 35.00, 35.00, 41.00, 41.00];
    const sku = [`103`, `104`, `105`, `203`, `204`, `205`, `206`, `207`, `208`, `209`, `210`, `211`, `212`, `111`, `214`, `112`, `216`, `217`, `218`, `219`, `220`, `221`, `222`, `223`];
    create_object(names, prices, prices2, sku);
    //קורנטו
} function korneto() {
    const names = [`קורנטו פיסטוק`, `קורנטו וניל קלאסי`, `קורנטו קליק וניל עוגיות`, `קורנטו קליק מרשמלו`, `קורנטו פסק זמן`, `פקאן SUPER קורנטו`, `מאגדת קורנטו בטעם וניל עוגיות`, `מאגדת קורנטו וניל קלאסי`, `מאגדת קורנטו וניל טבעוני - פרווה`];
    const prices = [`15.00`, `11.50`, `11.50`, `11.50`, `8.00`, `10.00`, `34.50`, `30.00`, `30.00`];
    const prices2 = [15.00, 11.50, 11.50, 11.50, 8.00, 10.00, 34.50, 30.00, 30.00];
    const sku = [`106`, `301`, `302`, `303`, `304`, `305`, `115`, `307`, `308`];
    create_object(names, prices, prices2, sku);
    //LELO
} function lelo() {
    const names = [`בטעמי שוקו ופקאן- LELO`, `בטעמי וניל חלווה - LELO`, `בטעמי וניל וקרמל מלוח - LELO`];
    const prices = [`28.50`, `28.50`, `28.50`];
    const prices2 = [28.50, 28.50, 28.50];
    const sku = [`100`, `101`, `102`];
    create_object(names, prices, prices2, sku);
    //קינוחי גלידה
} function icecream() {
    const names = [`קרמיסימו גלידונית`, `קרמיסימו גלידונית`, `קרמיסימו נישנושים`, `פנטסיה שוקו וניל`, `פנטסיה שוקו וניל פרווה`];
    const prices = [`42.00`, `42.00`, `42.00`, `29.80`, `29.80`];
    const prices2 = [42.00, 42.00, 42.00, 29.80, 29.80];
    const sku = [`500`, `501`, `502`, `503`, `504`];
    create_object(names, prices, prices2, sku);
    //ללא גלוטן
} function gloten() {
    const names = [`מגנום שקדים מובחרים`, `מגנום שוקולד לבן`, `מגנום דואט שוקולד עם נוגט`, `מגנום שוקולד`, `מאגדת מיני דואט שוקולד עם נוגט`, `מאגדת מיני שוקולד לבן`, `מאגדת מיני קלאסיק | שוקולד`, `מאגדת מיני שקדים מובחרים`, `מצופה שוקו`, `מצופה בננה`, `קסטה חד קרן`, `מלון`, `שלגון מטרה`, `שלגון פצפצים`, `ננסים`, `שלגוני לייט מיני אפרסק`, `מארז קרטיבים`, `אייס לייט`, `קרטיב לימון`, `קרטיב דובדבן`, `קרטיב משמש`, `קרטיב אננס`, `קרטיב תותי פרוטי`, `קרטיב ענבים`, `קרטיב אבטיח`, `Solero Lemon Fresh`, `Solero Watermelon Fresh`, `סולרו קלאסי וניל פירות טרופיים`, `סולרו תפוח ירוק`, `מאגדת סולרו קלאסיק - מיני וניל פירות טרופיים`, `מאגדת סולרו - מיני סורבה קוקוס אננס`, `קרמיסימו שוקו ומרשמלו`, `קרמיסימו ריבת חלב`, `קרמיסימו וניל צרפתי`, `קרמיסימו שלושה שוקולדים`, `קרמיסימו וניל צ'יפ`, `קרמיסימו מסטיגם`, `קרמיסימו שרבט תות לימון`, `קרמיסימו שוקו וניל צ'יפ`, `מארז שוקו-וניל-פיסטוק-קרמל-מוקה`, `מארז וניל-שוקו-תות שדה`, `מארז תות שדה-לימון-בננה-משמש-פטל`, `קרמיסימו גלידונית`, `קרמיסימו גלידונית`, `קרמיסימו נישנושים`];
    const prices = [`8.00`, `8.00`, `8.00`, `8.00`, `35.00`, `35.00`, `35.00`, `35.00`, `3.20`, `3.20`, `12.50`, `6.00`, `6.00`, `6.00`, `17.30`, `39.10`, `18.90`, `24.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`, `4.50`, `4.50`, `7.20`, `7.20`, `30.00`, `30.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `28.90`, `28.90`, `28.90`, `42.00`, `42.00`, `42.00`];
    const prices2 = [8.00, 8.00, 8.00, 8.00, 35.00, 35.00, 35.00, 35.00, 3.20, 3.20, 12.50, 6.00, 6.00, 6.00, 17.30, 39.10, 18.90, 24.00, 3.00, 3.00, 3.00, 3.00, 3.00, 3.00, 3.00, 4.50, 4.50, 7.20, 7.20, 30.00, 30.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 28.90, 28.90, 28.90, 42.00, 42.00, 42.00];
    const sku = [`203`, `204`, `205`, `207`, `213`, `214`, `215`, `216`, `705`, `706`, `610`, `110`, `901`, `904`, `905`, `803`, `1400`, `1401`, `1402`, `1403`, `1404`, `1405`, `1406`, `1407`, `1408`, `107`, `108`, `1203`, `1204`, `1205`, `1207`, `114`, `1302`, `1303`, `1305`, `1306`, `1308`, `1309`, `1310`, `1311`, `1312`, `1314`, `500`, `501`, `502`];
    create_object(names, prices, prices2, sku);
    //חטיפי גלידה
} function minies_icecream() {
    const names = [`חטיף פסק זמן`, `ארטיק פסק זמן לבן`, `שוקובו לבן`, `שוקובו שוקולד`, `XL טעמקור`, `מצופה שוקו`, `מצופה בננה`, `בומבה`, `מאגדת טעמקור`];
    const prices = [`7.50`, `13.00`, `12.50`, `12.50`, `9.20`, `3.50`, `3.50`, `4.70`, `65.00`];
    const prices2 = [7.50, 13.00, 12.50, 12.50, 9.20, 3.50, 3.50, 4.70, 65.00];
    const sku = [`700`, `701`, `702`, `703`, `704`, `705`, `706`, `707`, `708`];
    create_object(names, prices, prices2, sku);
    //גודיז
} function goodiz() {
    const names = [`מאגדת גודיז בטעם קרמל מלוח`, `מאגדת גודיז שלושה שוקולדים`, `גודיז פיסטוק שוקולד`, `שלגוני לייט מיני אפרסק`, `שלגוני לייט מיני סנדוויץ'`];
    const prices = [`39.10`, `39.10`, `39.10`, `39.10`, `39.10`];
    const prices2 = [39.10, 39.10, 39.10, 39.10, 39.10];
    const sku = [`116`, `801`, `802`, `803`, `804`];
    create_object(names, prices, prices2, sku);
    //שלגוני ילדים
} function children() {
    const names = [`קסטה חד קרן`, `מלון`, `ארטיק מסטיגם`, `קשת בענן`, `שלגון מטרה`, `שלגו פצפצים`, `ננסים`];
    const prices = [`12.50`, `6.00`, `8.30`, `12.00`, `6.00`, `6.00`, `17.30`];
    const prices2 = [12.50, 6.00, 8.30, 12.00, 6.00, 6.00, 17.30];
    const sku = [`110`, `901`, `902`, `903`, `904`, `905`, `906`];
    create_object(names, prices, prices2, sku);
    //קרמבו
} function krembo() {
    const names = [`קרמבו וניל- שמינייה`, `קרמבו מוקה- שמינייה`, `קרמבו וניל- 20 יחידות`, `קרמבו מוקה- 20 יחידות`, `קרמבו וניל- 32 יחידות`];
    const prices = [`11.90`, `11.90`, `35.40`, `35.40`, `52.00`];
    const prices2 = [11.90, 11.90, 35.40, 35.40, 52.00];
    const sku = [`1000`, `1001`, `1002`, `1003`, `1004`];
    create_object(names, prices, prices2, sku);
    //vegan friendly
} function vegan() {
    const names = [`בטעמי שוקו ופקאן- LELO`, `בטעמי וניל חלווה - LELO`, `בטעמי וניל וקרמל מלוח - LELO`, `ננסים`, `קרמיסימו שרבט תות לימון`, `קרמיסימו שוקו וניל צ'יפ`, `מארז וניל-שוקו-תות שדה`, `מארז שוקו עוגיות-וניל צ'יפ`, `קרמיסימו נישנושים`, `מאגדת קורנטו וניל טבעוני- פרווה`, `מאגדת סולרו - מיני סורבה קוקוס אננס`, `מארז קרטיבים`, `אייס לייט`, `מלון`, `קרטיב לימון`, `קרטיב דובדבן`, `קרטיב משמש`, `קרטיב אננס`, `קרטיב תותי פרוטי`, `קרטיב ענבים`, `קרטיב אבטיח`];
    const prices = [`28.50`, `28.50`, `28.50`, `17.30`, `21.00`, `21.00`, `28.90`, `28.90`, `42.00`, `30.00`, `30.00`, `18.90`, `24.00`, `6.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`];
    const prices2 = [28.50, 28.50, 28.50, 17.30, 21.00, 21.00, 28.90, 28.90, 42.00, 30.00, 30.00, 18.90, 24.00, 6.00, 3.00, 3.00, 3.00, 3.00, 3.00, 3.00, 3.00];
    const sku = [`100`, `101`, `102`, `906`, `1309`, `1310`, `1312`, `1313`, `502`, `308`, `1207`, `1400`, `1401`, `901`, `1402`, `1403`, `1404`, `1405`, `1406`, `1407`, `1408`];
    create_object(names, prices, prices2, sku);
    //סולרו
} function solero() {
    const names = [`Solero Lemon Fresh`, `Solero Watermelon Fresh`, `סולרו וניל, בננה וסילאן`, `סולארו קלאסי וניל פירות טרופיים`, `סולרו תפוח ירוק`, `מאגדת סולרו קלאסיק- מיני וניל פירות טרופיים`, `מאגדת סולרו מיני וניל תות שדה`, `מאגדת סולרו - מיני סורבה קוקוס אננס`, `SOLERO קרמיסימו`];
    const prices = [`4.50`, `4.50`, `8.00`, `8.00`, `8.00`, `30.00`, `30.00`, `30.00`, `25.40`];
    const prices2 = [4.50, 4.50, 8.00, 8.00, 8.00, 30.00, 30.00, 30.00, 25.40];
    const sku = [`1200`, `1201`, `109`, `1203`, `1204`, `1205`, `1206`, `1207`, `113`];
    create_object(names, prices, prices2, sku);
}
//גלידה ביתית
function home_icecream() {
    const names = [`SOLERO קרמיסימו`, `קרמיסימו שוקו ומרשמלו`, `קרמיסימו ריבת חלב`, `קרמיסימו וניל צרפתי`, `קרמיסימו שוקולד צ'יפ`, `קרמיסימו שלושה שוקולדים`, `קרמיסימו וניל צ'יפ`, `קרמיסימו וניל עוגיות`, `קרמיסימו מסטיגם`, `קרמיסימו שרבט תות לימון`, `קרמיסימו שוקו וניל צ'יפ`, `מארז שוקו-וניל-פיסטוק-קרמל-מוקה`, `מארז וניל-שוקו-תות שדה`, `מארז שוקו עוגיות-וניל צ'יפ`, `מארז תות שדה-לימון-בננה-משמש-פטל`];
    const prices = [`25.40`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `21.00`, `28.90`, `28.90`, `28.90`, `28.90`];
    const prices2 = [25.40, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 21.00, 28.90, 28.90, 28.90, 28.90];
    const sku = [`113`, `114`, `1302`, `1303`, `1304`, `1305`, `1306`, `1307`, `1308`, `1309`, `1310`, `1311`, `1312`, `1313`, `1314`];
    create_object(names, prices, prices2, sku);
    //קרטיבים
} function kartivim() {
    const names = [`מארז קרטיבים`, `אייס לייט`, `קרטיב לימון`, `קרטיב דובדבן`, `קרטיב משמש`, `קרטיב אננס`, `קרטיב תותי פרוטי`, `קרטיב ענבים`, `קרטיב אבטיח`];
    const prices = [`18.90`, `24.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`, `3.00`];
    const prices2 = [18.90, 24.00, 3.00, 3.00, 3.00, 3.00, 3.00, 3.00, 3.00];
    const sku = [`1400`, `1401`, `1402`, `1403`, `1404`, `1405`, `1406`, `1407`, `1408`];
    create_object(names, prices, prices2, sku);
}


// הוספה לסל
//מערך שורות הסל
let productsCart = [];

const _mount_ = document.querySelectorAll("#mount");
const _cart_ = document.querySelectorAll("#add");
const cart_style = document.querySelectorAll("#add_cart");

//זיהוי המוצר שעלין נלחץ הוספה לסל
_cart_.forEach(cart => {
    let temp;
    products.forEach(product => {
        if (product.Sku == cart.className) {
            temp = JSON.stringify(product);
        }
        //יצירת לחיצה שתעביר לסל
        cart.onclick = (event) => {
            sessionStorage.setItem("cartOFproduct", temp);
            let product = JSON.parse(sessionStorage.getItem("cartOFproduct"));

            //כמות המוצרים שנוספו לסל
            let mount;
            _mount_.forEach(m => {
                if (cart.className == m.className) {
                    mount = m.value;
                }
            });

            //שינוי תצוגה לכרטיס שעליו לחצו
            cart_style.forEach(style => {
                if (style.className == cart.className) {
                    style.innerHTML = `!המוצר נוסף לסל בהצלחה`;
                    style.style.color = "black";
                }
            });


            //בדיקה אם סל המוצרים ריק
            if (!localStorage.getItem("tableCart"))
                localStorage.setItem("tableCart", JSON.stringify(productsCart));

            //קבלת מערך המוצרים הקודם לתוך המערך   
            productsCart = JSON.parse(localStorage.getItem("tableCart"));

            //לולאה שבודקת אם כבר המוצר קיים בסל
            let flag = 0;
            if (productsCart.length > 0) {
                for (let i = 0; i < productsCart.length && flag == 0; i++) {
                    if (productsCart[i].sKu == product.Sku) {
                        //במקרה שקיים כזה מוצר מחיקה של השורה שלו וההוספה כביכול תתחדש 
                        flag = 1;
                        productsCart.splice(i, 1);
                    }
                }
            }

            //אינדקס המיקום של המוצר במערך המוצרים שבסל
            let row_id = productsCart.length;

            //חישוב הסכום ביניים לכל מוצר
            let sumTemp = mount * product.PriceInt;

            //שורה חדשה בסל שמאכלסת את כל נתוני המוצר
            const new_row = {
                sKu: `${product.Sku}`,
                row: `${row_id}`,
                sum_t: `${sumTemp}`,
                html: `
        <tr class="Row">
        <td id="delete_cart" class="${row_id}"><i class="fas fa-times"></i></td>
        <td id="img_cart" class="${row_id}"><img src="../../pic/products/${name}/${product.Picture + 1}.webp" id="img_min"</td>
        <td id="product_cart" class="${row_id}">${product.Name}</td>
        <td id="price_cart" class="${row_id}">₪${product.Price}</td>
        <td id="mount_cart" class="${row_id}">${mount}</td>
        <td id="tempSum_cart" class="${row_id}">₪${sumTemp}</td>
        </tr>
    `
            };
            //הכנסת המוצר החדש למערך
            productsCart.push(new_row);
            //הכנסת המערך המעודכן ללוקל סטורייג
            localStorage.setItem("tableCart", JSON.stringify(productsCart));
            //עדכון בעיגול ליד האייקון של הסל את כמות סוגי המוצרים שנמצאים בסל    
            document.getElementById("items").innerHTML = `${productsCart.length}`;
            sessionStorage.setItem("items", productsCart.length);
        }
    });

});

