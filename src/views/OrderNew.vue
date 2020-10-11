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
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="container">
              <br />
              <h4 class="text-warning">ĐƠN MỚI - ĐƠN CHỜ DUYỆT</h4>
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
                              href="javascript:voide(0)"
                              data-toggle="modal"
                              data-target="#detailBill"
                              >Chi tiết đơn hàng</a
                            >
                            <a class="dropdown-item" href="javascript:voide(0)"
                              >Thao tác kế tiếp</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
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

export default {
  data() {
    return {
      unactive: [],
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
    axios
      .post(`${server}/unactive-order-shop`, { shop_id: this.shop_id })
      .then((response) => {
        var unactive = response.data;
        for (var item in unactive) {
          this.unactive.push(unactive[item]);
        }
      });
  },
};
</script>
<style>
</style>
