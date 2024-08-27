import { shallowRef } from 'vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconGithub from '@/components/icons/IconGithub.vue';

const socialMedia = [
  {
    id: 1,
    label: "Facebook",
    url: "https://rb.gy/w17lg",
    icon: shallowRef(IconFacebook),
  },
  {
    id: 2,
    label: "Instagram",
    url: "https://rb.gy/wpt3b",
    icon: shallowRef(IconInstagram),
  },
  {
    id: 3,
    label: "Github",
    url: "https://github.com/nathAd17",
    icon: shallowRef(IconGithub),
  },
];

export default socialMedia;
