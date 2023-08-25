<template>
  <div class="card rounded-3">
    <div class="card-header">
      <h4>เพิ่มสินค้าใหม่</h4>
    </div>
    <div class="card-body p-4">
      <div class="row">
        <div class="col-md-3 col-lg-3">
          <ProductUpload style="height: 160px" />
         
          <div class="row mt-3">

          </div>
        </div>
        <div class="col-md-9 col-lg-9">
          <form
            class="was-validated"
            novalidate=""
            @submit.prevent="onSubmitCreate"
          >
            <div class="row">
              <div class="col-lg-12 col-12">
                <label class="form-label">ชื่อ </label>
                <input
                  type="text"
                  class="form-control"
                  v-bind:class="
                    formSubmitted
                      ? errors?.firstname
                        ? 'is-invalid'
                        : 'is-valid'
                      : ''
                  "
                  id="firstname"
                  placeholder="กรอกข้อมูลชื่อ"
                  v-model="formData.firstname"
                  required
                />
                <div
                  class="invalid-feedback"
                  v-if="formSubmitted && errors && errors?.firstname"
                >
                  {{ errors?.firstname }}
                </div>
              </div>
              <label class="form-label mt-3">ที่อยู่ </label>
              <div class="col-md-6 col-lg-6">
                <label class="form-label">รหัสไปรษณีย์ </label>
                <input
                  type="text"
                  class="form-control"
                  v-bind:class="
                    formSubmitted
                      ? errors.zip
                        ? 'is-invalid'
                        : 'is-valid'
                      : ''
                  "
                  maxlength="5"
                  id="zip"
                  placeholder="รหัสไปรษณีย์"
                  v-model="formData.zip"
                  @input="handleNumberInput"
                  required
                />
                <div
                  class="invalid-feedback"
                  v-if="formSubmitted && errors.zip"
                >
                  {{ errors?.zip }}
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <label class="form-label">จังหวัด </label>
                <input
                  type="text"
                  class="form-control"
                  v-bind:class="
                    formSubmitted
                      ? errors.province
                        ? 'is-invalid'
                        : 'is-valid'
                      : ''
                  "
                  id="province"
                  placeholder="จังหวัด"
                  v-model="formData.province"
                  required
                />
                <div
                  class="invalid-feedback"
                  v-if="formSubmitted && errors.province"
                >
                  {{ errors?.province }}
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button class="btn btn-primary btn-lg" type="submit">
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
import formCreateProduct from "@/mixin/products/formCreate";
export default {
  mixins: [formCreateProduct],
};
</script>
