import { Form, Field, ErrorMessage, useField, useForm } from "vee-validate";
import * as yup from "yup";


export default {
        setup() {
          const formSchema = yup.object({
            email: yup
              .string()
              .required("กรุณากรอกข้อมูล")
              .email("กรุณากรอกข้อมูล mail ไม่ถูกต้อง"),
            password: yup.string().required().min(8),
          });
          const { handleSubmit, isSubmitting, setFieldValue } = useForm({
            initialValues: {
              email: "",
              password: "",
            },
            validationSchema: formSchema,
          });
      
          const onSubmit = handleSubmit((values, actions) => {
            console.log(JSON.stringify(values, null, 2));
            console.log(values)
            // actions.resetForm();
          });
          const { value: email, errorMessage: emailError } = useField("email");
          const { value: password, errorMessage: passwordError } = useField("password");
      
      
          return {
            password,
            email,
            onSubmit,
            isSubmitting,
            passwordError,
            emailError,
          };
        },
}
// export default {
//     data() {
//         return {
//             errors: {
//                 firstname: '',
//                 zip: '',
//                 province:''
//             },
//             formSubmitted: false,
//             firstname: "",
//             lastname: "Otto",
//             username: "",
//             city: "",
//             state: "",
//             zip: '',
//             formData: {
//                 firstname: "",
//                 zip:'',
//                 province:''
//             }
//         }
//     },
//     methods: {
//         onSubmitCreate() {
//             this.formSubmitted = true;
//             this.errors = {};
//             if (this.formData.firstname=='' && this.formData.firstname.length < 3 ) {
//                 this.errors.firstname='กรุณากรอกชื่อ'
//             } else {
//                 this.errors.firstname = ''
//             }

//             if (this.formData.zip==''  || this.formData.zip <4) {
//                 this.errors.zip='กรุณากรอกรหัสไปรษณีย์'
//             } else {
//                 this.errors.zip = ''
//             }

//             if (this.formData.province=='') {
//                 this.errors.province='เลือกจังหวัด'
//             } else {
//                 this.errors.province = ''
//             }
            
            
//         },
//         handleNumberInput() {
//             this.formData.zip = this.formData.zip.replace(/\D/g, '');
//           },

//     }
// }