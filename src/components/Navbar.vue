<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menu = ref([
    { label: 'Home', route: '#', section: 'home' },
    { label: 'About', route: '#about', section: 'about' },
    { label: 'Project', route: '#project', section: 'project' },
    { label: 'Contact', route: '#contact', section: 'contact' }
]);
const menuOpen = ref(false);
const isDarkMode = ref(false);
const currentSection = ref('home');
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value);
};
const handleScroll = () => {
    const sections = menu.value.map(item => document.getElementById(item.section));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSection.value = menu.value[index].section;
        }
    });
};

onMounted(() => {
    isDarkMode.value = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    }
});
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <header
        class="bg-gradient-to-b from-gray-100 to-blue-500 dark:from-gray-800 dark:to-cyan-500 transition-colors duration-700 ease-in-out">
        <nav class="border-gray-50 relative bg-transparent">
            <div
                class="backdrop-blur-md fixed top-0 left-0 right-0 z-50 font-poppins flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="#" aria-label="Home" class="flex items-center relative cursor-pointer overflow-hidden w-auto">
                    <div class="relative px-2 flex items-center group">
                        <span
                            class="whitespace-nowrap dark:text-cyan-300 dark:group-hover:text-gray-700 group-hover:text-gray-200 transition-colors ease-in-out duration-1000 text-2xl font-semibold text-blue-800 relative z-20">
                            Nath
                        </span>
                        <span
                            class="relative z-20 pl-2 text-lg dark:text-gray-800 text-gray-100 transition-colors duration-700 font-courgette font-semibold  ease-in-out">
                            Dev
                        </span>
                        <div
                            class="bg-blue-800 dark:bg-cyan-400 h-full absolute right-0 top-0 rounded-lg transform group-hover:w-full z-10 duration-500 w-[calc(100%/2.6)]">
                        </div>
                    </div>
                </a>

                <div class="md:order-2 flex items-center">
                    <label class="switch" for="dark-toggle">
                        <span class="sun">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="#ffd43b">
                                    <circle r="5" cy="12" cx="12"></circle>
                                    <path
                                        d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z">
                                    </path>
                                </g>
                            </svg>
                        </span>
                        <span class="moon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path
                                    d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
                                </path>
                            </svg>
                        </span>
                        <input type="checkbox" aria-label="toggle" class="input" id="dark-toggle" @change="toggleDarkMode"
                            :checked="isDarkMode">
                        <span class="slider"></span>
                    </label>
                    <button data-collapse-toggle="mobile-menu" type="button"
                        class="md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex items-center p-2 ml-1 text-sm text-gray-600 rounded-lg"
                        aria-expanded="false" aria-label="open-menu" @click="toggleMenu">
                        <span class="sr-only">Open main menu</span>
                        <svg class="dark:text-white w-6 h-6 text-gray-800" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div :class="menuOpen ? 'block' : 'hidden'"
                    class="md:flex md:w-auto md:order-1 dark:text-white items-center justify-between w-full text-gray-700"
                    id="mobile-menu">
                    <ul
                        class="md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 flex flex-col p-4 mt-4 font-inter font-semibold border border-gray-100 rounded-lg">
                        <li v-for="item in menu" :key="item.label">
                            <a :href="item.route"
                                :class="[item.section === currentSection ? 'text-blue-700 dark:text-cyan-400 animate-pulse font-extrabold' : 'hover:text-blue-600 dark:hover:text-cyan-400', 'block py-2 pl-3 pr-4 font-inter font-semibold transition-colors duration-500 ease-in-out rounded-sm cursor-pointer']" :aria-label="item.label">
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
    .switch {
        font-size: 10px;
        position: relative;
        display: inline-block;
        width: 54px;
        height: 24px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #73C0FC;
        transition: .4s;
        border-radius: 30px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        border-radius: 20px;
        left: 2px;
        bottom: 2px;
        z-index: 2;
        background-color: #e8e8e8;
        transition: .4s;
    }

    .sun svg {
        position: absolute;
        top: 6px;
        left: 36px;
        z-index: 1;
        width: 14px;
        height: 14px;
    }

    .moon svg {
        fill: #73C0FC;
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 1;
        width: 14px;
        height: 14px;
    }

    /* .switch:hover */
    .sun svg {
        animation: rotate 15s linear infinite;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    /* .switch:hover */
    .moon svg {
        animation: tilt 5s linear infinite;
    }

    @keyframes tilt {
        0% {
            transform: rotate(0deg);
        }

        25% {
            transform: rotate(-10deg);
        }

        75% {
            transform: rotate(10deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }

    .input:checked+.slider {
        background-color: #183153;
    }

    .input:focus+.slider {
        box-shadow: 0 0 1px #183153;
    }

    .input:checked+.slider:before {
        transform: translateX(30px);
    }
</style>
