const constraints = {
    firstname: {
        presence: {
            message: "is required"
        },
    },
    lastname: {
        presence: {
            message: "is required" 
        },
    },
    email: {
        presence: {
            message: "must be example@gmail.com"
        },
        email: true
        
    },
    phone: {
        presence: { 
            message: "must be at least 10 digits"
        },
        length: {
            minimum : 10,
        },        
    }

}

const app =Vue.createApp({
    data() {
        return {
            image: 'images/profile.png' ,
            name: 'Pitchanon Wongkhamlue' ,
            career: 'Student' ,
            url: 'https://www.instagram.com/ppitchanon_/',
            firstname: null,
            lastname: null,
            email: null,
            phone: null,
            errors: '',
        }
    },
    methods: {
        checkProfile(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    email: this.email,
                                    phone: this.phone},
                                    constraints)
            if(!this.errors){
                alert("Your profile update successfully.")
            }
        }
    }
})

app.mount('#app')