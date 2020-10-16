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
      <form
        class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
      >
        <div class="form-group mb-0">
          <base-input
            placeholder="Search"
            class="input-group-alternative"
            alternative=""
            addon-right-icon="fas fa-search"
          >
          </base-input>
        </div>
      </form>
      <br>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="container">
              <br />
              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#all"
                    >Tất cả</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#unactive"
                    >Chờ chuyệt</a
                  >
                </li>
              </ul>

              <!-- Tất cả -->
              <div class="tab-content">
                <div id="all" class="container tab-pane active">
                  <br />
                  <div class="table-responsive">
                    <div></div>
                    <table class="table align-items-center table-flush">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col" class="sort" data-sort="idBill">
                            Mã đơn hàng
                          </th>
                          <th scope="col" class="sort" data-sort="nameUser">
                            Tên khách hàng
                          </th>
                          <th scope="col" class="sort" data-sort="total">
                            Tổng tiền
                          </th>
                          <th scope="col" class="sort" data-sort="status">
                            Trạng thái
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        class="list"
                        v-for="(all, index) in all"
                        v-bind:key="index"
                      >
                        <tr v-bind:data-order="all.name" class="data-order">
                          <th scope="row">
                            <div class="media align-items-center">
                              <div class="media-body">
                                <span class="name mb-0 text-sm">{{
                                  all.id
                                }}</span>
                              </div>
                            </div>
                          </th>
                          <td class="budget">{{ all.name }}</td>
                          <td>
                            <span class="status">{{ all.total }}</span>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <span class="completion mr-2">{{
                                all.status
                              }}</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- Chờ duyệt -->
                <div id="unactive" class="container tab-pane fade">
                  <br />
                  <div class="table-responsive">
                    <div></div>
                    <table class="table align-items-center table-flush">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col" class="sort" data-sort="idBill">
                            Mã đơn hàng
                          </th>
                          <th scope="col" class="sort" data-sort="nameUser">
                            Tên khách hàng
                          </th>
                          <th scope="col" class="sort" data-sort="total">
                            Tổng tiền
                          </th>
                          <th scope="col" class="sort" data-sort="status">
                            Trạng thái
                          </th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody
                        class="list"
                        v-for="(unactive, index) in unactive"
                        v-bind:key="index + 1"
                      >
                        <tr>
                          <th scope="row">
                            <div class="media align-items-center">
                              <div class="media-body">
                                <span class="name mb-0 text-sm">{{
                                  unactive.id
                                }}</span>
                              </div>
                            </div>
                          </th>
                          <td class="budget">{{ unactive.name }}</td>
                          <td>
                            <span class="status">{{ unactive.total }}</span>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <span class="completion mr-2">{{
                                unactive.status
                              }}</span>
                            </div>
                          </td>
                          <td class="text-right">
                            <div class="dropdown">
                              <a
                                class="btn btn-sm btn-icon-only text-light"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="fas fa-ellipsis-v"></i>
                              </a>
                              <div
                                class="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
                              >
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0)"
                                  data-toggle="modal"
                                  data-target="#detailBill"
                                  >Chi tiết đơn hàng</a
                                >
                                <a
                                  class="dropdown-item"
                                  href="javascript:void(0)"
                                  @click="checkOrder(unactive.id)"
                                  >Duyệt đơn hàng
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
                <!-- Đã duyệt -->
              <div class="card-footer py-4">
                <nav aria-label="...">
                  <ul class="pagination justify-content-end mb-0">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-angle-left"></i>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                        <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fas fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server,  } from "../main";
import Notiflix from "notiflix";

export default {
  data() {
    return {
      all: [],
      unactive: [],
      actived: [],
      packaged: [],
      shipping: [],
      shipped: [],
      cancelled: [],
      returned: [],
      newOrder: null,
    };
  },
  created() {


    // EventBus.$on("new-order",(data)=>{
    //   this.$alertify.success(`Bạn có đơn hàng mới từ ${data.username}`)
    // })

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    }
    this.shop_id = JSON.parse(getCookie("user_id"));

    this.allOrder();
    this.unActive();
    this.active();
    this.donggoi();
    this.shippingfc();
    this.shippedfc();
    this.cancelledfc();
    this.returnedfc();
  },
  mounted(){
    Notiflix.Notify.Init({fontSize:'15px',timeout:4000,messageMaxLength:200,position:'right-bottom'});
  },
  methods: {
    checkOrder(id){
      axios.post(`${server}/shop-check`, { id: id }).then((response) => {
          if(response.data.success){
            //meu tra ve thanh cong thi goi lại api lay san pham 
            this.unActive();
            Notiflix.Notify.Success(
              `Đã duyệt đơn hàng`,
            );
          }
          
      });
    },
    allOrder() {
      //Tất cả
      axios
        .post(`${server}/get-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var all = response.data;
          this.all = all
        });
    },
    unActive() {
      //Chưa duyệt
      axios
        .post(`${server}/unactive-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var unactive = response.data;
          this.unactive = unactive
          
        });
    },
    active() {
      //Đã duyệt
      axios
        .post(`${server}/active-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var actived = response.data;
          this.actived=actived
        });
    },
    donggoi() {
      //Đã đóng gói
      axios
        .post(`${server}/update-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var packaged = response.data;
            this.packaged=packaged
        });
    },
    shippingfc() {
      //Đang giao
      axios
        .post(`${server}/confirm-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var shipping = response.data;
          this.shipping=shipping

        });
    },
    shippedfc() {
      //Đã giao
      axios
        .post(`${server}/finish-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var shipped = response.data;
            this.shipped=shipped;
        });
    },
    cancelledfc() {
      //Đã hủy
      axios
        .post(`${server}/cancel-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var cancelled = response.data;
            this.cancelled=cancelled
        });
    },
    returnedfc() {
      //Trả hàng
      axios
        .post(`${server}/return-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var returned = response.data;
            this.returned=returned
        });
    },
    //Thao tác với đơn hàng
    //đã đóng gói
    daDongGoi(id) {
      axios.post(`${server}/shop-update`, { id:id })
      .then((response)=>{
          if(response.data.success){
            
            Notiflix.Notify.Success(
            `Đã đóng gói`,
            window.location.href=""
          )
        }
        console.log(response.data);
      })
    },
  },
};
</script>
<style>
</style>
