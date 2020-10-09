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
          <table class="table align-items-center table-hover table-responsive table-striped table-bordered" style="background-color:white">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="name">Sản phẩm</th>
                <th scope="col" class="sort" data-sort="nameShop">Danh mục chính</th>
                <th scope="col" class="sort" data-sort="nameShop">Danh mục con</th>
                <th scope="col" class="sort" data-sort="nameShop">Thương hiệu</th>
                <th scope="col" class="sort" data-sort="nameShop">Nhà cung cấp</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody
              class="list"
              v-for="(product, index) in products"
              v-bind:key="index"
            >
              <tr>
                <!-- mã sản phẩm -->
                <th scope="row">
                  <div class="media align-items-center">
                    <!-- hình ảnh sản phẩm -->
                    <a href="#" class="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" v-bind:src="product.image" />
                    </a>
                    <!-- tên sản phẩm -->
                    <div class="media-body">
                      <span class="name mb-0 text-sm">{{
                        product.product_name
                      }}</span>
                    </div>
                  </div>
                </th>
                <td class="nameShop">{{ product.category }}</td>
                <td class="nameShop">{{ product.cate_name }}</td>
                <td class="nameShop">{{ product.brand}}</td>
                <td class="nameShop">{{ product.origin }}</td>
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
                        data-target="#detailProduct"
                        @click="getListProductDetail(product)"
                        >Xem chi tiết</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <!-- The Modal -->
            <div class="modal fade" id="detailProduct">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">Chi tiết sản phẩm</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  <!-- Modal body -->
                  <div class="modal-body">
                    <div class="table-responsive">
                      <button class="btn btn-primary btn-sm" @click="addDetailProduct()">NHẬP KHO</button>
                      <br>
                      <br>
                      <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col" class="sort" data-sort>Hình ảnh</th>
                            <th scope="col" class="sort" data-sort="detail_id">
                              Mã sản phẩm
                            </th>
                            <th scope="col" class="sort" data-sort="price">
                              Giá
                            </th>
                            <th scope="col" class="sort" data-sort="quantity">
                              SLượng kho
                            </th>
                            <th scope="col" class="sort" data-sort="color">
                              Màu
                            </th>
                            <th scope="col">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody class="list">
                          <tr
                            v-for="(modalDetail, index) in showProductDetail"
                            :key="index + 99"
                          >
                            <!-- mã sản phẩm -->
                            <td>
                              <a href="#" class="avatar rounded-circle mr-3">
                                <img
                                  alt="Image placeholder"
                                  v-bind:src="modalDetail.image"
                                />
                              </a>
                            </td>
                            <td class="nameShop">
                              {{ modalDetail.prodetail_id }}
                            </td>
                            <td class="nameShop">
                              {{ modalDetail.price }}
                            </td>
                            <td class="nameShop">
                              {{ modalDetail.quantity }}
                            </td>
                            <td class="nameShop">
                              {{ modalDetail.color }}
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
                                    
                                    >Xem chi tiết</a
                                  >
                                  <a
                                    class="dropdown-item"
                                    href="javascript:void(0)"
                                    @click="deleteProducts(modalDetail.prodetail_id)"
                                    >Xóa</a
                                  >
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { server,store } from "../main";
import $ from 'jquery'
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      showProductDetail: [],
      shop_id: "",
      t:null
    };
  },
  methods: {
    getListProductDetail(product) {
      this.t = product.product_id
      axios.post(`${server}/detail-info`, { id: product.product_id }).then((response) => {
        this.showProductDetail = response.data;
      });

      store.state.productDetail = product;
      store.state.category_id = this.t;
    },
    //delete sản phẩm
    deleteProducts(id){
      axios.post(`${server}/delete-product`, {prodetail_id: id}).then((response)=>{
        if(response.data.success){
          this.getListProductDetail(this.t)
        }
      })
    },
    addDetailProduct(){
      $("#detailProduct").hide()
      $('body').removeClass("modal-open")
      this.$router.push({path:'/detail-add-book'})
    }
  },
  mounted() {
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
    this.shop_id = JSON.parse(getCookie("user_id"))
    axios.post(`${server}/show-product-shop`,{shop_id:this.shop_id}).then((response) => {
      var productsNew = response.data;
      for (var item in productsNew) {
        this.products.push(productsNew[item]);
      }
    });
  },
};
</script>

<style lang="scss">
</style>
