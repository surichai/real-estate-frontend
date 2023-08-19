<template>
  <div class="col-xxl-4 col-sm-6 box-col-6">
    <div class="card profile-box">
      <div class="card-body">
        <div class="media">
          <div class="media-body">
            <!-- <div class="greeting-user"> -->
            <h5 class="f-w-200 mb-0">ยอดขายทั้งหมด</h5>
            <div class="card-price">
                ฿{{currentNumber.toFixed(2) }}
            </div>
            <!-- </div> -->
          </div>
          <!-- <div>
                        <div class="clockbox">
                            <svg id="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                                <g id="face">
                                    <circle class="circle" cx="300" cy="300" r="253.9"></circle>
                                    <path class="hour-marks"
                                        d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6">
                                    </path>
                                    <circle class="mid-circle" cx="300" cy="300" r="16.2"></circle>
                                </g>
                                <g id="hour">
                                    <path class="hour-hand" d="M300.5 298V142"></path>
                                    <circle class="sizing-box" cx="300" cy="300" r="253.9"></circle>
                                </g>
                                <g id="minute">
                                    <path class="minute-hand" d="M300.5 298V67"></path>
                                    <circle class="sizing-box" cx="300" cy="300" r="253.9"></circle>
                                </g>
                                <g id="second">
                                    <path class="second-hand" d="M300.5 350V55"></path>
                                    <circle class="sizing-box" cx="300" cy="300" r="253.9"></circle>
                                </g>
                            </svg>
                        </div>
                        <div class="badge f-10 p-0" id="txt"></div>
                    </div> -->
        </div>
        <!-- <div class="cartoon">
                    <img class="img-fluid" src="/images/dashboard/cartoon.svg" alt="vector women with leptop" />
                </div> -->
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  
  data() {
    return {
      interval: "",
      greeting: "",
      time: "",
      currentNumber: 0,
      delay: 1000,
        endVal: 2000000,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
    };
  },
  components: {
    },
  mounted() {
    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    var ampm = hr >= 12 ? "PM" : "AM";
    let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
    let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
    let secPosition = (sec * 360) / 60;
    // function runClock() {
    //   hrPosition += 30 / 3600;
    //   minPosition += 6 / 60;
    //   secPosition += 6;
    //   HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    //   MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    //   SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    //   document.getElementById("txt").innerHTML = hr + ":" + min + " " + ampm;
    // }
    //   this.interval = setInterval(runClock, 1000);
    this.updateNumber(); 
    this.interval = setInterval(this.updateNumber, 2000);
  },
  unmounted() {
    clearTimeout(this.interval);
  },
  methods: {
      updateNumber() {
          if (this.currentNumber < 100000) {
                this.currentNumber += 3000; // Increment the number by 1000
            
        }
    },
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clear the interval when the component is destroyed
  }
};
</script>
    