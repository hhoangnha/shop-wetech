<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
    id="sidenav-main"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/">
        <img :src="logo" class="navbar-brand-img" alt="..." />
      </router-link>

      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
          <base-dropdown class="nav-item" position="right">
            <a class="dropdown-item" href="javascript:void(0)">
              <div
                class="row container"
                v-for="(notification, index) in notifications"
                v-bind:key="index"
              >
                <span class="avatar avatar-sm rounded-circle">
                  <img
                    alt="Image placeholder"
                    v-bind:src="notification.avatar"
                  />
                </span>
                <div class="col">
                  <strong>{{ notification.username }}</strong>
                  {{ notification.titleNotification }}
                  {{ notification.contentNotification }}
                </div>
              </div>
            </a>
          </base-dropdown>
          <base-dropdown class="nav-item" position="right">
            <a slot="title" class="nav-link" href="#" role="button">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" v-bind:src="user.avatar" />
                </span>
              </div>
            </a>

            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Shop {{ user.shop_name }}</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>Hồ sơ</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <a
              href="javascript:void(0)"
              class="dropdown-item"
              @click="Logout()"
            >
              <i class="ni ni-curved-next"></i>
              <span>Đăng xuất</span>
            </a>
          </base-dropdown>
        </ul>
      </slot>
      <slot></slot>
      <div
        v-show="$sidebar.showSidebar"
        class="navbar-collapse collapse show"
        id="sidenav-collapse-main"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img :src="logo" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button
                @click.native="closeSidebar"
              ></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links"> </slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/NavbarToggleButton";

export default {
  name: "sidebar",
  data() {
    return {
      user: {},
      notifications: [
        {
          avatar:
            "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/p960x960/117127887_612805836295710_6116670817612199975_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=g-2MqTLkwWMAX9koFmI&_nc_ht=scontent.fdad2-1.fna&tp=6&oh=991e1d72f30dad054a46e12456ee19d5&oe=5FAC55EB",
          username: "Nguyễn Hữu Tiến",
          titleNotification: "Đã đặt",
          contentNotification: "đơn hàng ABCSBSH",
        },
      ],
    };
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

    this.user = JSON.parse(getCookie("user"));
  },
  components: {
    NavbarToggleButton,
  },
  props: {
    logo: {
      type: String,
      default:
        "https://res.cloudinary.com/nguy-n-ti-n/image/upload/v1602761547/logo2_a4idbi.png",
      description: "Sidebar app logo",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    },
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
  Logout() {
    document.cookie = `user=null; max-age=1`;
    document.cookie = `user_id=null; max-age=1`;
    window.location = "http://localhost:8080/#/login";
  },
};
</script>
