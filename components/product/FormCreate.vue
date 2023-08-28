<template>
  <div class="card rounded-3">
    <div class="card-header">
      <h4>เพิ่มสินค้าใหม่</h4>
    </div>
    <div class="card-body p-4">
      <div class="row">
        <div class="col-md-3 col-lg-3">
          <ProductUpload style="height: 160px" />
        </div>
        <div class="col-md-9 col-lg-9">
          <form @submit.prevent="onSubmit">
            <div class="row">
              <div class="col-lg-12 col-12">
                <label class="form-label">ชื่อ </label>
                <input
                  type="text"
                  class="form-control"
                  :class="name ? (nameError ? 'is-invalid' : 'is-valid') : ''"
                  placeholder="กรอกข้อมูลชื่อ"
                  v-model="name"
                />
                <div class="text-danger" v-if="nameError" >
                  {{ nameError }}
                </div>
              </div>
              <label class="form-label mt-3 fw-bold">ที่อยู่ </label>
              <div class="col-md-6 col-lg-6">
                <label class="form-label text-secondary">รหัสไปรษณีย์ </label>
                <input
                  type="text"
                  maxlength="5"
                  class="form-control"
                  :class="zip ? (zipError ? 'is-invalid' : 'is-valid') : ''"
                  placeholder="กรอกรหัสไปรษณีย์"
                  v-model="zip"
                  @input="InputNumberOnly"
                />
                <div class="invalid-feedback" v-if="zipError">
                  {{ zipError }}
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <label class="form-label text-secondary">จังหวัด </label>
                <input
                  type="text"
                  class="form-control"
                  :class="province ? (provinceError ? 'is-invalid' : 'is-valid') : ''"
                  placeholder="เลือกจังหวัด"
                  v-model="province"
                
                />
                <div class="text-danger" >
                  {{ provinceError }}
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <label class="form-label text-secondary">อำเภอ/เขต </label>
                <input
                  type="text"
                  class="form-control"
                  :class="district ? (districtError ? 'is-invalid' : 'is-valid') : ''"
                  placeholder="เลือกอำเภอ/เขต"
                  v-model="district"
                />
                <div class="text-danger" v-if="districtError">
                  {{ districtError }}
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <label class="form-label">ตำบล/แขวง </label>
                <input
                  type="text"
                  class="form-control"
                  :class="subdistrict ? (subdistrictError ? 'is-invalid' : 'is-valid') : ''"
                  placeholder="ตำบล/แขวง"
                  v-model="subdistrict"
                />
                <div class="text-danger" >
                  {{ subdistrictError }}
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button class="btn btn-primary btn-lg" 
           :disabled="isSubmitting"
              type="submit">
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script >
import { Form, Field, ErrorMessage, useField, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  setup() {
    const formSchema = yup.object({
      name: yup.string().required("กรุณากรอกข้อมูลชื่อ"),
      password: yup.string().required().min(8),
      zip: yup.string().required().min(5, "กรอกข้อมูลให้ถูกต้อง"),
      province:yup.string().required('กรุณาเลือกจังหวัด'),
      district:yup.string().required('กรุณาเลือกอำเภอ'),
      subdistrict:yup.string().required('กรุณาเลือกตำบล'),

    });
    const { handleSubmit, isSubmitting, setFieldValue } = useForm({
      initialValues: {
        name: "",
        zip: "",
        district: "",
        subdistrict: "",
        province: "",
        address: "",
        price: "",
        room_size: "",
        bedrooms: "",
        toilet: "",
        product_type: "",
        payment_type: "",
        facilities: [],
      },
      validationSchema: formSchema,
    });

    const onSubmit = handleSubmit((values, actions) => {
      console.log(JSON.stringify(values, null, 2));
      console.log(values);
      // actions.resetForm();
    });
    const { value: name, errorMessage: nameError } = useField("name");
    const { value: zip, errorMessage: zipError } = useField("zip");
    const { value: province, errorMessage: provinceError } =
      useField("province");
      
    const { value: district, errorMessage: districtError } =
      useField("district");
    const { value: subdistrict, errorMessage: subdistrictError } =
      useField("subdistrict");


    const { value: address, errorMessage: addressError } = useField("address");
    const { value: price, errorMessage: priceError } = useField("price");
    const { value: room_size, errorMessage: roomSizeError } =
      useField("room_size");
    const { value: bedrooms, errorMessage: bedroomsError } =
      useField("bedrooms");
    const { value: toilet, errorMessage: toiletError } = useField("toilet");
    const { value: product_type, errorMessage: productTypeError } =
      useField("product_type");
    const { value: payment_type, errorMessage: paymentTypeError } =
      useField("payment_type");
    const { value: facilities, errorMessage: facilitiesError } =
      useField("facilities");

    const InputNumberOnly = (event) => {
      const value = event.target.value.replace(/[^0-9]/g, "");
      zip.value = value;
    };
    return {
      name,
      nameError,
      zip,
      zipError,
      province,
      provinceError,
      district,
      districtError,
      subdistrict,
      subdistrictError,

      onSubmit,
      isSubmitting,
      InputNumberOnly,
    };
  },
};
</script>
