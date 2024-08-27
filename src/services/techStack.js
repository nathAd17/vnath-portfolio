import {
  shallowRef
} from 'vue';

import IconBootstrap from "@/components/icons/IconBootstrap.vue";
import IconFigma from "@/components/icons/IconFigma.vue";
import IconJs from "@/components/icons/IconJs.vue";
import IconLaravel from "@/components/icons/IconLaravel.vue";
import IconMysql from "@/components/icons/IconMysql.vue";
import IconPhp from "@/components/icons/IconPhp.vue";
import IconTailwind from "@/components/icons/IconTailwind.vue";
import IconVue from "@/components/icons/IconVue.vue";
import IconVite from "@/components/icons/IconVite.vue";

const techStack = [
  {
    id: 1,
    label: "Figma",
    icon: shallowRef(IconFigma),
  },
  {
    id: 2,
    label: "Tailwind CSS",
    icon: shallowRef(IconTailwind),
  },
  {
    id: 3,
    label: "Bootstrap",
    icon: shallowRef(IconBootstrap),
  },
  {
    id: 4,
    label: "JavaScript",
    icon: shallowRef(IconJs),
  },
  {
    id: 5,
    label: "Vue JS",
    icon: shallowRef(IconVue),
  },
  {
    id: 6,
    label: "PHP",
    icon: shallowRef(IconPhp),
  },
  {
    id: 7,
    label: "Laravel",
    icon: shallowRef(IconLaravel),
  },
  {
    id: 8,
    label: "MySql",
    icon: shallowRef(IconMysql),
  },
  {
    id: 9,
    label: "Vite",
    icon: shallowRef(IconVite),
  },
];

export default techStack;