var products = [
    {
        "photo": "img/cheesecake-fresa.jpg",
        "name": "Strawberry Cheesecake",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/capuchino-coffee.jpg",
        "name": "Cappuccino Coffee",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/hot-chocolate.jpg",
        "name": "Hot Chocolate",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/churros.jpg",
        "name": "Churros",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/chocolate-cake.jpg",
        "name": "Chocolate Cake",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/oreo-milkshake.jpg",
        "name": "Oreo Milkshake",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/frappuccino-coffee.jpg",
        "name": "Coffee Frappuccino",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/te-manzanilla.jpg",
        "name": "Chamomile tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/pay-helado-limon.jpg",
        "name": "Lemon ice cream pie",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];

//VUE APPLICATION
const SelfServiceMachine = {
    data(){
        return{
            products: window.products
        }
    },
    methods: {
        total: function(){
            var total = 0; 
            this.products.forEach(product => {
                if(product.active){
                    total += product.price * product.quantity; 
                }
            });
            return total.toFixed(2);
        },
        hideModal(){
            const modal = document.getElementById("my-modal");
            modal.style.display = 'none';
        }
        
    }
}; 

Vue.createApp(SelfServiceMachine).mount('#app');

