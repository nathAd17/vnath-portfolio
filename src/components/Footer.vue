<template>
    <!-- footer -->
    <footer id="footer"
        class="bg-gradient-to-b from-blue-500 to-gray-100 dark:from-cyan-500 dark:to-gray-700 transition-colors duration-1000 ease-in-out border-t-2 border-gray-500">
        <div class="sm:flex-nowrap sm:justify-between flex flex-wrap items-center justify-center w-full max-w-screen-xl gap-2 p-10 mx-auto">
            <span class="sm:text-center dark:text-gray-100 font-semibold text-sm text-gray-700">© 2023
                <a href="#" aria-label="home link" class="hover:underline underline-offset-4">NathDev™</a> |</span>
            <div class="md:flex-nowrap flex flex-wrap items-center gap-2">
                <!-- facebook -->
                <div v-for="social in socialMedia" :key="social.id">
                    <span class="group relative">
                        <!-- tooltip -->
                        <div
                            class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div
                                class="bottom-full whitespace-nowrap right-0 px-4 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                                {{social.label}}
                                <svg class="top-full absolute left-0 w-full h-2 text-gray-100" x="0px" y="0px"
                                    viewBox="0 0 255 255" xml:space="preserve">
                                    <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                                </svg>
                            </div>
                        </div>
                        <div id="object-tooltip"
                            class="dark:bg-cyan-200 hover:animate-pulse hover:ring-2 hover:ring-white dark:hover:ring-black md:p-2 p-1 bg-blue-500 rounded-full">
                            <!-- facebook -->
                            <a :href="social.url" aria-label="social link" target="_blank">
                                <component :is="social.icon" />
                            </a>
                        </div>
                    </span>
                </div>
            </div>
            <ul class="sm:mt-0 dark:text-gray-100 flex flex-wrap items-center text-sm font-medium text-gray-700">
                <li v-for="menu in menus" :key="menu.id">
                    <a :href="menu.href" aria-label="menu link" class="hover:underline underline-offset-4 font-semibold md:mr-6 mr-4">{{
                        menu.title }}</a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
import socialMedia from '@/services/socialMedia';
export default {
    data() {
        return {
            socialMedia,
            menus: [
                { id: 1, title: 'About', href: '#about' },
                { id: 2, title: 'Project', href: '#project' },
                { id: 3, title: 'Contact', href: '#contact' }
            ]
        };
    }
}
</script>