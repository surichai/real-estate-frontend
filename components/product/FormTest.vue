<template>
  <form @submit.prevent="onSubmit" >
    <input type="email" placeholder="e-mail" v-model="email" class="form-control" />
    <div class="text-danger">{{ emailError }}</div> 

    <input type="password" placeholder="password" v-model="password"  class="form-control" />
    <div class="text-danger">{{ passwordError }}</div> 
    <!-- <Field
    name="email"
      type="email"
      class="form-control"
     
    /> -->
    <!-- <input type="email" v-model="value"  /> -->

    <!-- <ErrorMessage name="email" /> -->
    <!-- <Field name="password" type="password" class="form-control" /> -->
    <!-- <ErrorMessage name="password" /> -->
   <button class="btn btn-success" :disabled="isSubmitting">Submit</button> 
  </form>
</template>
  <script >
import { Form, Field, ErrorMessage, useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  setup() {
    const formSchema = yup.object({
      email: yup
        .string()
        .required("กรุณากรอกข้อมูล")
        .email("กรุณากรอกข้อมูล mail ไม่ถูกต้อง"),
      password: yup.string("กรุณากรอกข้อมูล").required().min(8),
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
  
};



</script>