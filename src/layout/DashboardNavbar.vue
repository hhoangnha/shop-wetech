<template>
  <base-nav
    class="navbar-top navbar-dark"
    id="navbar-main"
    :show-toggle-button="false"
    expand
  >
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
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <base-dropdown class="nav-item" position="right">
        <a
          slot="title"
          class="nav-link nav-link-icon"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="ni ni-bell-55"></i>
        </a>

        <a class="dropdown-item" href="javascript:void(0)">
          <div
            class="row container"
            v-for="(notification, index) in notifications"
            v-bind:key="index"
          >
            <span class="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" v-bind:src="notification.avatar" />
            </span>
            <div class="col"><strong>{{notification.username}}</strong> {{notification.titleNotification}} {{notification.contentNotification}}</div>
          </div>
        </a>
      </base-dropdown>
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div class="media align-items-center" slot="title">
            <span class="avatar avatar-sm rounded-circle">
              <img alt="Image placeholder" v-bind:src="user.avatar" />
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">{{ user.name }}</span>
            </div>
          </div>

          <template>
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Shop {{ user.shop_name }}</h6>
            </div>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>Hồ sơ</span>
            </router-link>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item" @click="Logout()">
              <i class="ni ni-curved-next"></i>
              <span>Đăng xuất</span>
            </div>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>

<script>
export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: "",
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
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    Logout() {
      document.cookie = `user=null; max-age=1`;
      document.cookie = `user_id=null; max-age=1`;
      window.location = "http://localhost:8080/#/login";
    },
  },
};
</script>
