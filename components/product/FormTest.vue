<template>
  
  <Form @submit.prevent="onSubmit" :validation-schema="schema">
    <!-- <Field
    name="email"
      type="email"
      class="form-control"
     
    /> -->
    <!-- <input type="email" v-model="value"  /> -->
    <!-- <span class="text-red">{{ errorMessage }}</span> -->
    <!-- <ErrorMessage name="email" /> -->
    <!-- <Field name="password" type="password" class="form-control" /> -->
    <!-- <ErrorMessage name="password" /> -->
    <!-- <button>Submit</button> -->
  </Form>
</template>
  <script setup>
import { Form, Field, ErrorMessage, useField } from "vee-validate";
import * as yup from "yup";

const { value, errorMessage } = useField(
  "name",
  yup.string().email().required()
);
const schema = yup.object({
  email: yup
    .string()
    .required("กรุณากรอกข้อมูล")
    .email("กรุณากรอกข้อมูล mail ไม่ถูกต้อง"),
  password: yup.string().required().min(8),
});
const onSubmit = (values) => {
  console.log(values);
};
</script>