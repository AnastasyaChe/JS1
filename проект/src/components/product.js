//функция,которая создает объект из элементов массивов
function createItem(id, name, price, img) { //если совпадают название поля свойства и название переменной, можно записывать не так: id: id, а:
    return { id, name, price, img }
};
function initCatalog() { //функция, которая будет собирать массив Каталог из объектов,  образованных с помощью createitem()
    let idis = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //из этого нужно будет составлять объект
    let names = ['Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt', 'Mango People T-shirt'];
    let prices = [53, 153, 54, 253, 53, 153, 54, 253, 54,];
    let imgs = [
        '../src/assets/img/men1.png',
        '../src/assets/img/men2.png',
        '../src/assets/img/Layer%204@1X.jpeg',
        '../src/assets/img/men2.png',
        '../src/assets/img/men5.png',
        '../src/assets/img/men6.png',
        '../src/assets/img/men8.png',
        '../src/assets/img/men9.png',
        '../src/assets/img/men5.png'

    ]
    // будем создавать новый массив с помощью метода массива map,где каждое имя и каждый индекс этого имени будут попадать в функцию createitem(), которая возвращает объект
    return names.map((name, index) => createItem(idis[index], name, prices[index], imgs[index]));
};

const catalog = {
    items: [],
    container: null, // эта инфа нужна методу _render, чтобы все это отрендерить- воспроизвести
    basket: basket,


    init() {
        this.container = document.querySelector('#catalog');
        this.items = initCatalog();
        this._render();// инкапсуляция. т.е этот метод будет использоваться только в вызовах внутри др.методов, не снаружи
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name = 'add') {
                let item = {
                    name: evt.target.dataset.name,
                    img: evt.target.dataset.img,
                    price: +evt.target.dataset.price,
                    amount: 1,
                    id: evt.target.dataset.id
                };
                this.basket.add(item);
            }
        })

    },
    _render() {
        let str = "";

        this.items.forEach(item => { //каждый обход к нашей строке будет приписываться наша верстка, которую мы сделали
            str += `
            <article class="galery__product">
            <a href="singlePage.html"><img class="product__img" src=${item.img} alt
                    class="prodimage"></a>
            <button class="product__add" name="add" data-name="${item.name}" data-img="${item.img}" data-price="${item.price}" data-id="${item.id}">
                <i class="fas fa-shopping-cart"></i>Add to Cart
            </button>
            <div class="galery__info">
                <h2 class="galery__mango">${item.name}</h2>
                <div class="galery__price">$${item.price}</div>
            </div>
        </article>
            `
        });
        this.container.innerHTML = str;

    }
};
catalog.init();

let main = document.querySelector('#hidden');
document.addEventListener('click', evt => {
    if (evt.target.id == 'cart') {
        main.classList.toggle('show');
    }
});
