<template>
        <div class="dropzone-box">
            <div class="dropzone-content">
              <i class="fa fa-plus-circle h3" style="color: #e2e2e2"></i>
              <div class="" v-if="!show_text">อัพโหลดภาพสินค้า</div>
              <span>เพิ่มได้อีก 16 รูป</span>
              <input id="file-input" type="file" accept=".jpeg,.jpg" />
            </div>
          </div>
</template>
<script >
export default {
    props: ['show_text'],
}
</script>
<style lang="css">

.dropzone-box {
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  border: 1.5px dashed var(--theme-deafult);
  border-radius: 8px;
  border-image: none;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: border-color 0.3s;
  height: 100%;
  width: 100%;
}


.dropzone-content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  z-index: 1;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
  inset-block-start: 0px;
  padding: 0.5rem;
}
#file-input {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>