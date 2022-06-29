Vue.createApp({
    data() {
        return {
            firstName: 'Calvin',
            lastName: 'Mends',
            url: 'https://google.com',
            ImageUrl: 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_300_200_int_c1-1x.jpg',
            age: 20,
            isGreen:false,

            areaName: 'Tema',
            schoolName:'KpaKpa High'
        };
    },
    methods: {
            newLocation() {
            return `${this.areaName} ${this.schoolName}`
        },
        incrementAge() {
            this.age++;
        },
        decrementAge(val) {
            this.age=this.age-val;
        },
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },   
    },
    watch: {
        age(newAge, oldAge) {
          if(newAge===40) alert ('The age is 40')  
        },
    }

}).mount('#app');