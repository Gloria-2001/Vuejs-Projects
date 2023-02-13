members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember:{ }
        }
    },
    methods: {
        addMember: function(){
            if(this.newMember.fname && this.newMember.lname && this.newMember.instrument){
                this.members.push(this.newMember);
                this.newMember = {};
            }else{
                alert("All fields must be filled");
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
