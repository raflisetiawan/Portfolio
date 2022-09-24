<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/rafli7773"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Instagram"
        link="https://www.instagram.com/raflisetiawan6/"
        icon="ant-design:instagram-outlined"
      />
    </div>
    <ActionButton link="raflisetiawan006@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  components: { SocialIcon, ActionButton },
};
</script>
