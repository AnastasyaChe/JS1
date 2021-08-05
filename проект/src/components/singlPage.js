//функция,которая создает объект из элементов массивов
function createItem(id, name, price, img) { //если совпадают название поля свойства и название переменной, можно записывать не так: id: id, а:
    return { id, name, price, img }
};
function initCatalog() { //функция, которая будет собирать массив Каталог из объектов,  образованных с помощью createitem()
    let idis = [1, 2, 3, 4]; //из этого нужно будет составлять объект
    let names = ['BLAZE LEGGINGS', 'ALEXA SWEATER', 'AGNES TOP', 'SYLVA SWEATER'];
    let prices = [53, 153, 54, 253];
    let imgs = [
        '../src/assets/img/Layer_442.png',
        '../src/assets/img/Layer_452.png',
        '../src/assets/img/Layer_462.png',
        '../src/assets/img/Layer_42.jpg',


    ]
    // будем создавать новый массив с помощью метода массива map,где каждое имя и каждый индекс этого имени будут попадать в функцию createitem(), которая возвращает объект
    return names.map((name, index) => createItem(idis[index], name, prices[index], imgs[index]));
};

const catalog = {
    items: [],
    container: null, // эта инфа нужна методу _render, чтобы все это отрендерить- воспроизвести
    init() {
        this.container = document.querySelector('#catalog');
        this.items = initCatalog();
        this._render();// инкапсуляция. т.е этот метод будет использоваться только в вызовах внутри др.методов, не снаружи
    },
    _render() {
        let str = "";

        this.items.forEach(item => { //каждый обход к нашей строке будет приписываться наша верстка, которую мы сделали
            str += `
            <article class="offerYouMay">
            <a href="product.html">
                <div class="bgPhoto d-flex justify-content-center">
                    <img class="prodimage" src=${item.img} alt="prodimage">
                </div>
            </a>
            <div class="info">
                <h2 class="descriptionYou">${item.name}</h2>
                <div class="price">$${item.price}</div>
            </div>
        </article>
            `
        });
        this.container.innerHTML = str;

    }
};
catalog.init();
