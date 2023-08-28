<template>
   <div>
  <div class="dropzone-box">
    <div class="dropzone-content">
      <i class="fa fa-plus-circle h3" style="color: #e2e2e2"></i>
      <div class="" v-if="!showText">อัพโหลดภาพสินค้า</div>
      <span>เพิ่มได้อีก {{ fileUploadList.length? 6-fileUploadList.length:5 }} รูป</span>
      <input id="file-input" type="file"
      @change="onUploadFile"
      accept=".jpeg,.jpg" />
    </div>
  </div>
  <div class="my-2 py-2">
  <div class="grid-box">
    <div class=" mb-2" v-for="(image,index) in fileUploadList" :key="index">
      <div class="box-image ">
      <img v-if="imageSource" :src="viewImage(image)" 
      class="img-fluid rounded" style="object-fit: contain;max-height: 90px;"
   />
   <div class="box-footer">
    <i class="fa fa-trash" @click="removeImage(index)"></i>
   </div>
    </div>
    </div>
  </div>
</div>
 </div>
</template>
<script >
export default {
  props: [
    'showText',
    'fileList'
],
  data() {
    return {
      fileUploadList: this.fileList ? this.fileList : [],
      imageSource:'',
    };
  },
  methods: {
    onUploadFile(event){
      const file = event.target.files[0];
      if (file) {
        this.fileUploadList.push(file);
        this.imageSource = URL.createObjectURL(file);
      }
    },
    viewImage(file) {
      return URL.createObjectURL(file);
    },
    removeImage(index){
      const findIndex = this.fileUploadList.indexOf(index);
      console.log(findIndex)
        this.fileUploadList.splice(findIndex, 1);
    }
  }
};
</script>
<style lang="css">
.grid-box{
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3,minmax(0,1fr));
}
.box-footer{
  margin-top:5px;
  padding: 2px 6px;
  border-top: 1px solid rgb(164, 161, 161);
}
.box-footer >i{
  cursor: pointer;
}
.box-image{
  transition: transform 0ms linear 0s;
  position: relative;
  background-color: rgb(255, 255, 255);
  border:0.5px solid #c0bcbc;
  justify-content: center;
  padding:4px;
  border-radius:6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
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