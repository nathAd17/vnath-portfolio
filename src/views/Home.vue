<template>
    <section id="home"
        class="bg-gradient-to-b from-gray-100 to-blue-500 dark:from-gray-800 dark:to-cyan-500 transition-colors duration-1000 ease-in-out">
        <div class="sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 px-4 pt-40 mx-auto">
            <div class="lg:flex-row lg:justify-between flex flex-col items-center justify-center w-full mb-10">
                <div class="lg:mb-0 lg:max-w-xl lg:pr-5">
                    <div class="md:max-w-4xl max-w-2xl mb-6">
                        <h2
                            class="font-poppins bg-clip-text bg-gradient-to-r from-blue-600 to-gray-700 dark:from-cyan-500 dark:to-gray-100 lg:text-8xl sm:leading-none sm:text-6xl mb-6 text-4xl font-bold tracking-tight text-transparent transition-colors duration-1000 ease-in-out">
                            Personal Portfolio<br class="md:block hidden" /> by Nath </h2>
                        <p class="dark:text-gray-200 md:text-xl leading-relaxed font-inter text-base font-medium text-gray-800">
                            I love what I do. From design to coding, I try to give my best in every project.
                            Don't forget to follow my social media
                            and also my Github to see my projects in the web development world. </p>
                    </div>
                    <div class="md:flex-nowrap flex flex-wrap items-center gap-2">
                        <!-- facebook -->
                        <div v-for="social in socialMedia" :key="social.id">
                            <span class="group relative">
                                <div
                                    class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                    <div
                                        class="bottom-full whitespace-nowrap right-0 px-4 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                                        {{ social.label}}
                                        <svg class="top-full absolute left-0 w-full h-2 text-gray-100" x="0px" y="0px"
                                            viewBox="0 0 255 255" xml:space="preserve">
                                            <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                                        </svg>
                                    </div>
                                </div>
                                <div id="object-tooltip"
                                    class="dark:bg-cyan-200 hover:animate-pulse hover:ring-2 hover:ring-white dark:hover:ring-black p-2 bg-blue-500 rounded-full">
                                    <!-- facebook -->
                                    <a :href="social.url" aria-label="social link">
                                        <component :is="social.icon.value" />
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div class="md:mb-16 lg:mb-20 mt-6 mb-10">

                        <button aria-label="open-cv"ref="assets/cv.pdf" target="_blank"
                            class="bg-gradient-to-r from-blue-500 to-gray-200 dark:from-cyan-500 dark:to-gray-800 dark:hover:from-cyan-400 dark:hover:to-gray-600 dark:text-gray-200 font-poppins hover:transition-colors hover:brightness-110 hover:animate-pulse inline-flex gap-2 px-4 py-2 font-semibold tracking-normal text-gray-900 transition-all duration-1000 border-2 border-gray-200 dark:border-gray-600 ease-in-out transform rounded-lg shadow-lg">
                            Download
                            CV <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                                    clip-rule="evenodd" />
                                <path fill-rule="evenodd"
                                    d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full p-0">
                    <img class="dark:hidden lg:-mt-40 object-cover transition-colors duration-300 ease-in-out"
                        src="/assets/img/personal-site-animate1.svg" alt="hero" loading="eager">
                    <img class="dark:block lg:-mt-40 hidden object-cover transition-colors duration-300 ease-in-out"
                        src="/assets/img/personal-site-animate2.svg" alt="hero" loading="eager">
                </div>
            </div>
            <a href="#about" aria-label="Scroll down"
                class="hover:text-cyan-200 hover:border-cyan-300 hover:animate-bounce hover:shadow hover:scale-110 flex items-center justify-center w-10 h-10 mx-auto text-gray-900 duration-300 transform border border-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path
                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                    </path>
                </svg>
            </a>
        </div>
    </section>
</template>
<script setup>
import socialMedia from '@/services/socialMedia';
</script>