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
              <h5>Thêm sản phẩm - Đồ chơi & Mẹ và bé</h5>
            </div>
            <div class="card-body">
              <form>
                <h6 class="heading-small text-muted mb-4">Thông tin cơ bản</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <!-- Tên sản phẩm -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-productname">
                          Tên sản
                          phẩm
                        </label>
                        <input type="text" class="form-control" placeholder="Tên sản phẩm" value />
                      </div>
                    </div>
                    <!-- Thương hiệu -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label">Thương hiệu</label>
                        <input type="text" class="form-control" placeholder="Thương hiệu" value />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="row">
                        <!-- danh mục chính -->
                        <div class="col-lg-6">
                          <div class="form-group">
                            <label class="form-control-label" for>Danh mục chính</label>
                            <input
                              type="text"
                              id
                              class="form-control"
                              placeholder
                              v-bind:value="catename"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="col-1 d-flex align-items-center justify-content-center">
                          <i class="ni ni-bold-right"></i>
                        </div>
                        <!-- danh mục con -->
                        <div class="col-lg-5">
                          <div class="form-group">
                            <label class="form-control-label" for>Danh mục con</label>
                            <input type="text" id class="form-control" placeholder value readonly />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Trạng thái sản phẩm -->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-warehouse">Trạng thái sản phẩm</label>
                        <select class="form-control">
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
                <div class="pl-lg-4">
                  <div class="row">
                    <!-- Đơn giá -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label" for="input-price">Đơn giá</label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            id="input-price"
                            class="form-control"
                            placeholder="VD:99000"
                            value
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
                        <label class="form-control-label" for="input-price">Giá giảm</label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            id="input-price"
                            class="form-control"
                            placeholder="VD:99000"
                            value
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
                        <label class="form-control-label" for>Số lượng nhập</label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            id="50"
                            class="form-control"
                            placeholder="VD: 1; 2;..."
                            value
                          />
                          <div class="input-group-append">
                            <span class="input-group-text">
                              <select class="form-control-label">
                                <option value>Cái</option>
                                <option value>Bộ</option>
                                <option value>Khác</option>
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
                          value
                        />
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="row">
                    <!-- Kích thước sản phẩm "size" -->
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label">Kích thước</label>
                        <input class="form-control" type="text" placeholder="VD: S; M; L;..." />
                      </div>
                    </div>
                    <!-- Thông số kích thước sản phẩm "demention" -->
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label">Thông số kích thước</label>
                        <input class="form-control" type="text" placeholder="VD: 5 x 6 x 7" />
                      </div>
                    </div>
                    <!-- Cân nặng  -->
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label">Cân nặng</label>
                        <div class="input-group mb-3">
                          <input type="number" class="form-control" placeholder />
                          <div class="input-group-append">
                            <span class="input-group-text">
                              <select class="form-control-label">
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
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Chất liệu</label>
                        <input class="form-control" type="text" placeholder="VD: Giấy; nhựa;..." />
                      </div>
                    </div>
                    <!-- Màu -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Màu</label>
                        <input class="form-control" type="text" placeholder="VD: Trắng; Đỏ;..." />
                      </div>
                    </div>
                    <!-- Công suất -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Công suất</label>
                        <input class="form-control" type="text" placeholder="VD: 1W;..." />
                      </div>
                    </div>
                    <!-- Cân nặng  -->
                    <div class="col-lg-3">
                      <div class="form-group">
                        <label class="form-control-label">Sản phẩm đi kèm / Quà tặng</label>
                        <div class="input-group mb-3">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Nhập sản phẩm kèm theo..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Mô tả</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <label class="form-control-label">Mô tả ngắn</label>
                    <textarea
                      rows="4"
                      class="form-control"
                      placeholder="A few words about you ..."
                      id="introduction"
                      name="introduction"
                    ></textarea>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" />
                    <label class="custom-file-label" for="customFile">Choose file</label>
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Mô tả chi tiết</label>
                    <textarea
                      rows="4"
                      class="form-control"
                      placeholder="A few words about you ..."
                      id="description"
                      name="description"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input type="button" class="btn btn-primary" name value="Thêm sản phẩm" />
                    <input type="button" class="btn btn-danger" name value="Hủy" />
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
export default {
};
</script>

<style>
</style>