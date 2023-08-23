<template>
  <div class="card rounded-3">
    <div class="card-header">
      <h4>เพิ่มสินค้าใหม่</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <div class="dropzone-box">
            <div class="dropzone-background"></div>
            <div class="dropzone-content">
              <i class="fa fa-plus-circle h3" style="color: #e2e2e2"></i>
              <div class="">อัพโหลดภาพสินค้า</div>
              <input id="file-input" type="file" accept=".jpeg,.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-8 col-lg-8">
          <form class="needs-validation" novalidate="">
            <div class="row">
                <label class="form-label">ชื่อ                  </label>
                <input
                  type="text"
                  class="form-control"
                  v-bind:class="
                    formSubmitted
                      ? firstError
                        ? 'is-invalid'
                        : 'is-valid'
                      : ''
                  "
                  id="name"
                  placeholder="Your name"
                  v-model="firstname"
                />
                <div class="valid-feedback" id="feedback-1" v-if="errors[0]">
                  {{ errors[0].message }}
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      errors: [],
      formSubmitted: false,
      firstname: "mark",
    };
  },
};
</script>
<style >
.dropzone-box {
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  border: 2px dashed var(--theme-deafult);
  border-radius: 8px;
  border-image: none;
  background: rgba(34, 71, 156, 0.1);
  box-sizing: border-box;
  min-height: 150px;
  max-width: 250px;
  transition: border-color 0.3s;
}

.dropzone-background {
  height: 100%;
  width: 100%;
  background-color: #fafafa;
  position: absolute;
  inset: 0px;
  z-index: 1;
  margin: auto;
}
.dropzone-content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  z-index: 1;
  align-items: center;
  height: 100%;
  justify-content: center;
  inset-block-start: 0px;
  overflow: hidden;
  padding: 0.5rem;
}
#file-input {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>