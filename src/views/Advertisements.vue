<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="
        min-height: 100px;
        background-image: url(img/theme/profile-cover.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center"></div>
    </base-header>
    <div class="container-fluid mt--7">
      <br />
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="container">
              <br />
              <div class="row">
                <div class="col-lg">
                  <h4 class="text-success">QUẢNG CÁO - GÓI DỊCH VỤ</h4>
                </div>
              </div>
              <div class="card-deck">
                <div class="card ">
                  <div class="card-body text-center">
                    <h4 class="card-text">GÓI GIỜ</h4>
                    <span><h1>100.000đ</h1></span>
                    <select class="form-control">
                      <option value="">5 GIỜ</option>
                      <option value="">10 GIỜ</option>
                      <option value="">15 GIỜ</option>
                      <option value="">24 GIỜ</option>
                    </select>
                    <br>
                    <button class="btn btn-success" @click="goiMot">ĐẶT</button>
                  </div>
                </div>
                <div class="card ">
                  <div class="card-body text-center">
                    <h4 class="card-text">GÓI NGÀY</h4>
                    <span><h1>100.000đ</h1></span>
                    <select class="form-control">
                      <option value="">1 NGÀY</option>
                      <option value="">3 NGÀY</option>
                      <option value="">10 NGÀY</option>
                      <option value="">15 NGÀY</option>
                    </select>
                    <br>
                    <button class="btn btn-success" @click="goiMot">ĐẶT</button>
                  </div>
                </div>
                <div class="card ">
                  <div class="card-body text-center">
                    <h4 class="card-text">GÓI TUẦN</h4>
                    <span><h1>100.000đ</h1></span>
                    <select class="form-control">
                      <option value="">1 TUẦN</option>
                      <option value="">3 TUẦN</option>
                      <option value="">5 TUẦN</option>
                      <option value="">7 TUẦN</option>
                    </select>
                    <br>
                    <button class="btn btn-success" @click="goiMot">ĐẶT</button>
                  </div>
                </div>
                <div class="card ">
                  <div class="card-body text-center">
                    <h4 class="card-text">GÓI THÁNG</h4>
                    <span><h1>100.000đ</h1></span>
                    <select class="form-control">
                      <option value="">1 THÁNG</option>
                      <option value="">3 THÁNG</option>
                      <option value="">6 THÁNG</option>
                      <option value="">12 THÁNG</option>
                    </select>
                    <br>
                    <button class="btn btn-success" @click="goiMot">ĐẶT</button>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goiMot() {
      alert("Đã chọn gói một");
    },
  },
};
</script>
<style>
</style>
