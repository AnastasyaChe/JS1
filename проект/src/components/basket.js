var basket = {
    items: [],
    container: null, // эта инфа нужна методу _render, чтобы все это отрендерить- воспроизвести
    basket: basket,
    sum: 0,


    init() {
        this.container = document.querySelector('#basket');
        this._render();// инкапсуляция. т.е этот метод будет использоваться только в вызовах внутри др.методов, не снаружи
        this._handleActions();
    },
    _handleActions() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name = 'remove') {
                this.remove(evt.target.dataset.id)

            }
        })

    },
    _render() {
        let str = "";

        this.items.forEach(item => { //каждый обход к нашей строке будет приписываться наша верстка, которую мы сделали
            str += `
            <div class="account__box">
                <a href="product.html">
                <img class="account__img" src=${item.img} alt="img"></a>
                    <div class="account__item">
                        <h3 class="account__h">${item.name}</h3>
                        
                            <p class="account__price">${item.amount} <span "class="account__span"> x </span> ${item.price}</p>
                            
                    </div>
                    <button class="account__none" name="remove" data-id="${item.id}">x</button>
            </div>`

        });
        this.container.innerHTML = str;

    },
    add(item) {
        let find = this.items.find(el => el.id == item.id);


        if (!find) {
            this.items.push(item);
        } else {
            find.amount++;

        }

        this._render();
        this._getSum(item);

    },
    remove(itemId) {
        let find = this.items.find(el => el.id == itemId);


        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);

        }
        this._render();
        this._getRemove(find);

    },
    _getSum(item) {
        let total = document.querySelector('#total');
        this.sum += item.price;
        total.innerHTML = this.sum;
    },
    _getRemove(item) {
        let total = document.querySelector('#total');
        this.sum -= item.price;
        total.innerHTML = this.sum;
    }

};
basket.init();




