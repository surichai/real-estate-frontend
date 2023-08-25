export default{
    data() {
        return {
            errors: {
                firstname: '',
                zip: '',
                province:''
            },
            formSubmitted: false,
            firstname: "",
            lastname: "Otto",
            username: "",
            city: "",
            state: "",
            zip: '',
            formData: {
                firstname: "",
                zip:'',
                province:''
            }
        }
    },
    methods: {
        onSubmitCreate() {
            this.formSubmitted = true;
            this.errors = {};
            if (this.formData.firstname=='' && this.formData.firstname.length < 3 ) {
                this.errors.firstname='กรุณากรอกชื่อ'
            } else {
                this.errors.firstname = ''
            }

            if (this.formData.zip==''  || this.formData.zip <4) {
                this.errors.zip='กรุณากรอกรหัสไปรษณีย์'
            } else {
                this.errors.zip = ''
            }

            if (this.formData.province=='') {
                this.errors.province='เลือกจังหวัด'
            } else {
                this.errors.province = ''
            }
            
            
        },
        handleNumberInput() {
            this.formData.zip = this.formData.zip.replace(/\D/g, '');
          },

    }
}