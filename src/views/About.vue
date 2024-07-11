<template>
    <section id="about"
        class="bg-gradient-to-b from-blue-500 from-5% to-gray-100 dark:from-cyan-500 dark:from-5% dark:to-gray-800 pt-28 pb-6 text-slate-700 dark:text-gray-200">
        <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-84 pb-28 px-4 mx-auto text-center">
            <span class="font-poppins md:text-6xl mb-8 text-4xl font-bold tracking-tight" data-aos="fade-up"
                data-aos-duration="500">About <span
                    class="bg-gradient-to-b from-blue-500 from-5% to-gray-50 font-courgette font-semibold dark:from-cyan-500 dark:from-5% dark:to-gray-800 p-2 ml-1 dark:text-gray-100 text-gray-700 transition-colors duration-700 ease-in-out bg-blue-800 rounded-lg">Me</span>
            </span>
            <div class="lg:grid-cols-2 grid gap-12 row-gap-8">
                <div class="flex flex-col justify-center">
                    <div class="max-w-xl mb-6">
                        <h2 class="font-inter md:text-4xl text-left sm:leading-none max-w-lg md:mb-6 mb-3 mt-2 text-2xl font-semibold md:font-bold tracking-tight"
                            data-aos="fade-right" data-aos-duration="500"> Hi Dear, I'm Nath
                        </h2>
                        <p class="font-inter md:text-lg text-base text-justify" data-aos="fade-right"
                            data-aos-duration="500" data-aos-delay="200"> I am a developer with a deep love for
                            <span class="font-bold">UI/UX, Frontend, and Backend Web Development</span> powerful
                            digital experiences.
                        </p>
                        <p class="font-inter md:text-lg mt-6 text-base text-justify" data-aos="fade-right"
                            data-aos-duration="500" data-aos-delay="200">
                            I am someone who is obsessed with innovation and rigor. In my journey as a web
                            developer, I have created projects that
                            combine beautiful design with powerful code. I am committed to continuous learning
                            and
                            development in this ever-changing
                            world.

                        </p>
                    </div>
                    <h2 class="font-inter text-left md:text-4xl sm:leading-none max-w-lg mb-6 text-2xl font-semibold md:font-bold tracking-tight"
                        data-aos="fade-right" data-aos-duration="500"> My Skills
                    </h2>
                    <div class="md:flex-nowrap flex flex-wrap items-center gap-2">
                        <!-- techStack -->
                        <div v-for="tech in techStack" :key="tech.id">
                            <span class="group relative" v-if="tech.id != 9">
                                <div
                                    class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                    <div
                                        class="bottom-full whitespace-nowrap right-0 px-4 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                                        {{ tech.label}}
                                        <svg class="top-full absolute left-0 w-full h-2 text-gray-100" x="0px" y="0px"
                                            viewBox="0 0 255 255" xml:space="preserve">
                                            <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                                        </svg>
                                    </div>
                                </div>
                                <div id="object-tooltip"
                                    class="dark:bg-cyan-200 hover:ring-2 hover:ring-white dark:hover:ring-black p-2 bg-blue-300 rounded-full"
                                    data-aos="fade-right" data-aos-duration="200" data-aos-delay="200">
                                    <!-- techStack icon-->
                                    <component :is="tech.icon" />
                                </div>
                            </span>
                        </div>

                    </div>
                </div>
                <div class="lg:w-full relative mx-auto" data-aos="zoom-in-up" data-aos-duration="1000"
                    data-aos-delay="200">
                    <img class="lg:w-full object-cover h-auto border dark:border-cyan-300 border-blue-700 rounded-full"
                        src="/assets/img/profil.png" alt="" data-aos="zoom-in-up" data-aos-duration="1000"
                        data-aos-delay="200" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import techStack from '@/services/techStack';
</script>