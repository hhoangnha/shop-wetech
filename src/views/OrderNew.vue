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
      <br />
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="container">
              <br />
              <div class="row">
                <div class="col-lg">
                  <h4 class="text-success">ĐƠN MỚI - ĐƠN CHỜ DUYỆT</h4>
                </div>
                <div
                  class="col-lg d-flex justify-content-end"
                  v-for="(unactive, index) in unactive"
                  v-bind:key="index + 568"
                >
                  <button
                    class="btn btn-primary btn-sm"
                    @click="activeAll(unactive)"
                  >
                    Duyệt tất cả
                  </button>
                </div>
              </div>
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
                        Địa chỉ
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
                      <td>
                        <strong>{{ unactive.id }}</strong>
                      </td>
                      <td>{{ unactive.name }}</td>
                      <td>
                        {{ unactive.total }}
                      </td>
                      <td>
                        <div class="d-flex align-items-center">
                          <span class="completion mr-2">{{
                            unactive.address
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
                              @click="getOrderDetail(unactive.order_detail)"
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
                  <!-- The Modal -->
                  <div class="modal fade" id="detailBill">
                    <div class="modal-dialog modal-xl">
                      <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Chi tiết sản phẩm</h4>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                          <div class="container">
                            <div class="row">
                              <div class="col">
                                <div
                                  class="card"
                                  v-for="(unactive, index) in unactive"
                                  v-bind:key="index + 2"
                                >
                                  <!-- Card header -->
                                  <div class="card-header border-0">
                                    <div class="media align-items-center">
                                      <!-- avatar người dùng -->
                                      <a
                                        href="javascript:void(0)"
                                        class="avatar rounded-circle mr-3"
                                      >
                                        <img alt="Image placeholder" src="" />
                                      </a>
                                      <div
                                        class="media-body"
                                        v-for="(modalOrderDetail,
                                        index) in modalOrderDetail"
                                        :key="index + 100"
                                      >
                                        <span class="name mb-0 text-sm">
                                          <strong>{{ unactive.name }}</strong>
                                        </span>
                                        - <img src="https://i.pinimg.com/originals/a0/c7/d2/a0c7d21bb6e784b884560d83215aca16.png" alt="" width="15">
                                        {{ modalOrderDetail.phone_number }}
                                      </div>
                                      <!-- địa chỉ người dùng -->
                                      <div class="float-right">
                                        <i class="ni ni-delivery-fast"></i>
                                        <span class="name mb-0 text-sm">
                                          {{ unactive.address }}
                                        </span>
                                        &emsp; | &emsp;
                                        <span class="badge badge-pill badge-primary"
                                          style="font-family: Times New Roman "><strong>{{
                                            unactive.status
                                          }}</strong></span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <!-- table -->
                                  <div class="table-responsive">
                                    <table
                                      class="table align-items-center table-flush"
                                    >
                                      <tr>
                                        <th
                                          scope="col"
                                          class="sort"
                                          data-sort="code"
                                        >
                                          Sản phẩm
                                        </th>
                                        <th
                                          scope="col"
                                          class="sort"
                                          data-sort="name"
                                        >
                                          Đơn giá
                                        </th>
                                        <th
                                          scope="col"
                                          class="sort"
                                          data-sort="status"
                                        >
                                          Số lượng
                                        </th>
                                        <th
                                          scope="col"
                                          class="sort"
                                          data-sort="completion"
                                        >
                                          Màu sắc
                                        </th>
                                        <th
                                          scope="col"
                                          class="sort"
                                          data-sort="completion"
                                        >
                                          Kích cở
                                        </th>
                                        <th
                                          scope="col"
                                          class="sort"
                                          data-sort="completion"
                                        >
                                          Thành tiền
                                        </th>
                                      </tr>
                                      <tbody class="list">
                                        <tr
                                          v-for="(modalOrderDetail,
                                          index) in modalOrderDetail"
                                          :key="index + 99"
                                        >
                                          <th scope="row">
                                            <div
                                              class="media align-items-center"
                                            >
                                              <!-- hình ảnh sản phẩm -->
                                              <a
                                                href="#"
                                                class="avatar rounded-circle mr-3"
                                              >
                                                <img
                                                  alt="Image placeholder"
                                                  :src="modalOrderDetail.image"
                                                />
                                              </a>
                                              <!-- tên sản phẩm -->
                                              <div class="media-body">
                                                <span
                                                  class="name mb-0 text-sm"
                                                  >{{
                                                    modalOrderDetail.product_name
                                                  }}</span
                                                >
                                              </div>
                                            </div>
                                          </th>
                                          <!-- giá sản phẩm -->
                                          <td>{{ modalOrderDetail.price }}</td>
                                          <td>
                                            {{ modalOrderDetail.cart_quantity }}
                                          </td>
                                          <td>{{ modalOrderDetail.color }}</td>
                                          <td>{{ modalOrderDetail.size }}</td>
                                          <td>
                                            {{
                                              modalOrderDetail.price *
                                              modalOrderDetail.cart_quantity
                                            }}
                                          </td>
                                        </tr>
                                      </tbody>
                                      <tfoot>
                                        <tr>
                                          <th
                                            scope="col"
                                            class="sort"
                                            data-sort=""
                                          ></th>
                                          <th
                                            scope="col"
                                            class="sort"
                                            data-sort=""
                                          ></th>
                                          <th
                                            scope="col"
                                            class="sort"
                                            data-sort=""
                                          ></th>
                                          <th
                                            scope="col"
                                            class="sort"
                                            data-sort=""
                                          ></th>
                                          <th
                                            scope="col"
                                            class="sort"
                                            data-sort=""
                                          >
                                            Tổng tiền:
                                          </th>
                                          <th
                                            scope="col"
                                            class="sort"
                                            data-sort=""
                                          >
                                            xxx.xxx
                                          </th>
                                          <th
                                            scope="col"
                                            class="sort"
                                            data-sort=""
                                          ></th>
                                        </tr>
                                      </tfoot>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Đóng
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </table>
              </div>
            </div>
          </div>
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
</template>

<script>
import axios from "axios";
import { server } from "../main";
import Notiflix from "notiflix";

export default {
  data() {
    return {
      unactive: [],
      modalOrderDetail: [],
    };
  },
  mounted() {
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
    //Chưa duyệt
    this.getUnactive();
    //
    Notiflix.Notify.Init({
      fontSize: "15px",
      timeout: 4000,
      messageMaxLength: 200,
      position: "right-bottom",
    });
  },
  methods: {
    //Modal detail orders
    getOrderDetail(order_detail) {
      this.modalOrderDetail = JSON.parse(order_detail);
    },
    //Xuất đơn chờ duyệt
    getUnactive() {
      axios
        .post(`${server}/unactive-order-shop`, { shop_id: this.shop_id })
        .then((response) => {
          var unactive = response.data;
          for (var item in unactive) {
            this.unactive.push(unactive[item]);
          }
        });
    },
    //Duyệt sản phẩm theo id
    checkOrder(id) {
      axios.post(`${server}/shop-check`, { id: id }).then((response) => {
        if (response.data.success) {
          Notiflix.Notify.Success(
            `Đã duyệt`,
            (window.location.href = "http://localhost:8080/new-order")
          );
        }
        console.log(response.data);
      });
    },
    // Duyệt tất cả sản phẩm
  },
};
</script>
<style>
</style>
