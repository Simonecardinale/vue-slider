var app = new Vue ({
    el: '#container',
    data: {
        imgArray: ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg", 
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg",
        "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg",
        "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg"
        ],
        counter: 0,
        active: "active"
    },

    methods: {
        clickNext: function() {
            this.counter++;
            if (this.counter == this.imgArray.length) {
                this.counter = 0;
            }
            console.log(this.counter);
        },

        clickPrev: function() {
            this.counter--;
            if (this.counter < 0){
                this.counter = this.imgArray.length - 1
            }
            console.log(this.counter);
        },
    }
});