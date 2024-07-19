<template>
  <div class="mobile-nav lg:hidden fixed bottom-0 left-0 right-0 w-100 z-99">
    <div class="nav-item">
      <router-link to="/product">
        <TagIcon class="icon size-4" />
        <p>Products</p>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/wishlist">
        <HeartIcon class="icon size-4" />
        <p>Wishlist</p>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/sell">
        <PlusIcon class="icon size-4" />
        <p>Sell</p>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/profile">
        <UserIcon class="icon size-4" />
        <p>Profile</p>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/inbox">
        <ChatBubbleBottomCenterTextIcon class="icon size-4" />
        <p>Inbox</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import {
  TagIcon,
  ChatBubbleBottomCenterTextIcon,
  PlusIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
export default {
  components: {
    TagIcon,
    ChatBubbleBottomCenterTextIcon,
    PlusIcon,
    HeartIcon,
    UserIcon,
  },
  setup() {
    const route = useRouter();
  },
};
</script>

<style scoped>
.mobile-nav {
  padding: 10px 0;
  background-color: white;
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
.mobile-nav .nav-item {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  font-size: 11px;
  text-transform: uppercase;
}
@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
</style>