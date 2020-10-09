<template>
  <div>
    <div>
      <base-header
        class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style="
        min-height: 100px;
        background-image: url('');
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
        <div class="row">
          <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <a href="#">
                      <img
                        v-bind:src="user.avatar"
                        class="rounded-circle"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
              >
                <div class="d-flex justify-content-between">
                  <base-button size="sm" type="info" class="mr-4"
                    >Connect</base-button
                  >
                  <base-button size="sm" type="default" class="float-right"
                    >Message</base-button
                  >
                </div>
              </div>
              <div class="card-body pt-0 pt-md-4">
                <div class="row">
                  <div class="col">
                    <div
                      class="card-profile-stats d-flex justify-content-center mt-md-5"
                    >
                      <div>
                        <span class="heading"></span>
                        <span class="description">Sản phẩm</span>
                      </div>
                      <div>
                        <span class="heading"></span>
                        <span class="description">Đã bán</span>
                      </div>
                      <div>
                        <span class="heading"></span>
                        <span class="description">Doanh thu trong tháng</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <h3>
                    {{user.name}}
                  </h3>

                  <div class="h5 mt-4">
                      {{user.address}}
                  </div>
                  <div>
                    {{user.phone_number}}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-8 order-xl-1">
            <card shadow type="secondary">
              <div slot="header" class="bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">My account</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                  </div>
                </div>
              </div>
              <template>
                <form>
                <h6 class="heading-small text-muted mb-4">Thông tin người dùng</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username">Tên người dùng</label>
                        <input
                          type="text"
                          id="input-username"
                          class="form-control"
                          placeholder="Username"
                          v-bind:value="user.username"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Email</label>
                        <input
                          type="email"
                          id="input-email"
                          class="form-control"
                          placeholder="jesse@example.com"
                          v-bind:value="user.email"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Họ và tên</label>
                        <input
                          type="text"
                          id="input-first-name"
                          class="form-control"
                          placeholder="First name"
                          v-bind:value="user.name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name">Số điện thoại</label>
                        <input
                          type="text"
                          id="input-last-name"
                          class="form-control"
                          placeholder="Last name"
                          v-bind:value="user.phone_number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Thông tin liên lạc</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Địa chỉ</label>
                        <input
                          id="input-address"
                          class="form-control"
                          placeholder="Home Address"
                          v-bind:value="user.address"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-city">Số CMND / Thẻ căn cước</label>
                        <input
                          type="text"
                          id="input-city"
                          class="form-control"
                          placeholder="City"
                          v-bind:value="user.identity_card"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-country">Mã số thuế</label>
                        <input
                          type="number"
                          id="input-postal-code"
                          class="form-control"
                          placeholder="Postal code"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Tiểu sử</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <label class="form-control-label">Tiểu sử của tôi</label>
                    <textarea rows="4" class="form-control" placeholder="A few words about you ..."></textarea>
                  </div>
                </div>
              </form>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-profile",
  data() {
    return {
      user: {},
      model: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about: "",
      },
    };
  },
  created(){
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1);
          if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    } 

    this.user = JSON.parse(getCookie("user"))
  }
};
</script>
<style></style>
