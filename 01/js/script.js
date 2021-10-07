const ter = {
    data() {
        return {
            title: "Список заметок",
            puk: "Введите названия заметки",
            intp: "",
            intparr: "",
            tir: []
        }

    },
    methods: {

        addotn(){
            const content = {
                name: this.intp,
                text: this.intparr,
                texttruu: false
            }
            console.log(this.intparr)
            if (this.intp.length < 8){
                alert('Мало символов')

            }
            else if (this.intp.length > 30){
                alert('Много символов')
            }
             else {
                this.tir.push(content)
                this.intp = '',
                this.intparr = ''
                console.log(this.tir)
            }
        },
        del(i){

            this.tir.splice(i,1)
        },
        red(i){
            this.intp = this.tir[i].name
            this.intparr = this.tir[i].text
                this.tir[i].texttruu = true
        console.log(this.tir[0])
        },
        sev(i){
            this.tir[i].name = this.intp
            this.tir[i].text = this.intparr
            this.tir[i].texttruu = false
            this.intp = '',
                this.intparr = ''


        },
        delall(){
            this.tir = []
        }




    }

}
Vue.createApp(ter).mount('#app')

