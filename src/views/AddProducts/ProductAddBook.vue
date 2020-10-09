<template>
  <div>
    <!-- Main content -->
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
              <h5>Thêm sản phẩm - Sách</h5>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted mb-4">Thông tin cơ bản</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <!-- Tên sản phẩm -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label"> Tên sản phẩm </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tên sản phẩm"
                          
                          v-model="product.product_name"
                        />
                      </div>
                    </div>
                    <!-- Thương hiệu -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Thương hiệu</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Thương hiệu"
                          v-model="product.brand"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="row">
                        <!-- danh mục chính -->
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label"
                              >Danh mục chính</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder
                              readonly
                              :value="danhMucChinh"
                            />
                          </div>
                        </div>
                        <!-- danh mục con -->
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label"
                              >Danh mục con</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder
                              :value="danhMucCon"
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Trạng thái sản phẩm -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label"
                          >Trạng thái sản phẩm</label
                        >
                        <select class="form-control" v-model="product.status">
                          <option value="1">Mở bán sản phẩm (Còn hàng)</option>
                          <option value="0">Chờ lấy hàng (Hết hàng)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Chi tiết sản phẩm -->
                <h6 class="heading-small text-muted mb-4">Chi tiết sản phẩm</h6>
                <div class="pl-lg-4" id="detailNext">
                  <div class="row">
                    <!-- Đơn giá -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Đơn giá</label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="VD:99000"
                             v-model="product.price"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text">VNĐ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Giá giảm -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Giá giảm</label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="VD:99000"
                             v-model="product.discount_price"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text">VNĐ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Số lượng kho -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Số lượng nhập</label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="VD: 1; 2;..."
                             v-model="product.quantity"
                          />
                          <div class="input-group-append">
                            <span class="input-group-text">
                              <select class="form-control-label">
                                <option value>Quyển</option>
                                <option value>Bộ</option>
                              </select>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Nguồn gốc -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Nguồn gốc</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="VD: NXB; Tác giả; Quốc gia;..."
                           v-model="product.origin"
                        />
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="row">
                    <!-- Kích thước sản phẩm -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label"
                          >Kích thước: Dài x Rộng x Cao (mm)</label
                        >
                        <input
                          class="form-control"
                          type="text"
                          placeholder="VD: 5 x 6 x 7"
                           v-model="product.dimension"
                        />
                      </div>
                    </div>
                    <!-- Cân nặng  -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Cân nặng</label>
                        <div class="input-group mb-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder
                            v-model="product.weight" 
                          />
                          <div class="input-group-append">
                            <span class="input-group-text">
                              <select  class="form-control-label">
                                <option value>Gam (g)</option>
                                <option value>Kilogam (kg)</option>
                              </select>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="row">
                    <!-- Kích thước sản phẩm -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Chất liệu</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="VD: Giấy; nhựa;..."
                           v-model="product.material"
                        />
                      </div>
                    </div>
                    <!-- Cân nặng  -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label"
                          >Sản phẩm đi kèm / Quà tặng</label
                        >
                        <div class="input-group mb-3">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Nhập sản phẩm kèm theo..."
                             v-model="product.accessory"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <button class="btn btn-primary" v-click="copyed">Try it</button> -->
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Mô tả</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <label class="form-control-label">Mô tả ngắn</label>
                    <ckeditor
                      v-model="product.introduction"
                      :config="editorConfig"
                      :editor-url="editorUrl"
                    ></ckeditor>
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Thêm hình ảnh</label>
                    <div class="row text-center">
                      <div class="col-2"><Ref /></div>
                      <div class="col-2"><Ref /></div>
                      <div class="col-2"><Ref /></div>
                      <div class="col-2"><Ref /></div>
                      <div class="col-2"><Ref /></div>
                      <div class="col-2"><Ref /></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Mô tả chi tiết</label>
                    <ckeditor
                      v-model="product.description"
                      :config="editorConfig"
                      :editor-url="editorUrl"
                    ></ckeditor>
                  </div>
                  <div class="form-group">
                    <input
                      type="button"
                      class="btn btn-primary"
                      name
                      value="Thêm sản phẩm"
                      @click="addProduct"
                    />
                    <input
                      type="button"
                      class="btn btn-danger"
                      name
                      value="Hủy"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import { store, EventBus,server } from "./../../main";
import Ref from "./Ref";

export default {
  data() {
    return {
      danhMucChinh: "",
      danhMucCon: "",
      imgArr:[],
      product:{
        quantity:null,
        size:null,
        color:null,
        price:null,
        status:null,
        discount_price:"0",
        origin:null,
        accessory:null,
        dimension:null,
        weight:null,
        system:null,
        material:null,
        screen_size:null,
        wattage:null,
        resolution:null,
        memory:null,

        product_name:null,
        brand:null,
        introduction:null,
        description:null,
        tag:null,

        shop_id:null,

        cate_id:null,
      },

      editorUrl: "https://cdn.ckeditor.com/4.14.1/full-all/ckeditor.js",
      editorData: "",
      editorConfig: {
        toolbarGroups: [
          { name: "document", groups: ["mode", "document", "doctools"] },
          { name: "clipboard", groups: ["clipboard", "undo"] },
          {
            name: "editing",
            groups: ["find", "selection", "spellchecker", "editing"],
          },
          { name: "forms", groups: ["forms"] },
          { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
          {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
          },
          { name: "links", groups: ["links"] },
          { name: "insert", groups: ["insert"] },
          { name: "styles", groups: ["styles"] },
          { name: "colors", groups: ["colors"] },
          { name: "tools", groups: ["tools"] },
          { name: "others", groups: ["others"] },
          { name: "about", groups: ["about"] },
        ],
        removeButtons:
          "NewPage,Print,Save,Templates,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,Anchor,Flash,Smiley,PageBreak,ShowBlocks,About,Language,Iframe,Image",
      },
    };
  },
  components: {
    Ref,
  },
  methods: {
    
    addProduct(){
      Axios.post(`${server}/add-product`,{
        quantity:this.product.quantity,
        size:this.product.quantity,
        color:this.product.color,
        price:this.product.price,
        status:this.product.status,
        discount_price:"0",
        origin:this.product.origin,
        accessory:this.product.accessory,
        dimension:this.product.dimension,
        weight:this.product.weight,
        system:this.product.system,
        material:this.product.material,
        screen_size:this.product.screen_size,
        wattage:this.product.wattage,
        resolution:this.product.resolution,
        memory:this.product.memory,

        product_name:this.product.product_name,
        brand:this.product.brand,
        introduction:this.product.introduction,
        description:this.product.description,
        tag:this.product.tag,

        shop_id:this.product.shop_id,

        cate_id:this.product.cate_id,
        image:JSON.stringify(this.imgArr),
      })
      .then((re)=>{
        console.log(re.data)
      })
    }
    
  },
  created() {
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

    this.product.shop_id = JSON.parse(getCookie("user_id"));

    this.danhMucChinh = store.state.danhMucChinh;

    EventBus.$on("catecon", (da) => {
      this.danhMucCon = da.cate_name;
      this.product.cate_id = da.cate_id
    });

    EventBus.$on("bus-upload-image",(data)=>{
      this.imgArr.push(data)
    })

  },
};
</script>

<style>
</style>
