<template>
    <section id="project"
        class="bg-gradient-to-t from-gray-100 from-5% to-gray-100 dark:from-gray-800 dark:from-5% dark:to-gray-800">
        <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 px-4 py-24 mx-auto">
            <!-- judul halaman -->
            <div class="md:mx-auto lg:max-w-2xl md:mb-12 max-w-xl mb-10 text-center">
                <h1 class="font-poppins sm:text-6xl dark:text-gray-200 mb-8 text-4xl font-bold tracking-tight text-center text-gray-700"
                    data-aos="fade-up" data-aos-duration="500">
                    <span
                        class="bg-gradient-to-b from-blue-500 from-5% to-gray-50 dark:from-cyan-500 dark:from-5% dark:to-gray-800 font-courgette p-2 ml-1 dark:text-gray-100 text-gray-700 font-semibold transition-colors duration-700 ease-in-out bg-blue-800 rounded-lg">My</span>
                    Project
                </h1>
                <p class="md:text-xl dark:text-gray-100 leading-relaxed font-inter text-base font-medium text-gray-700"
                    data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">I'm excited to share some
                    of my best projects in the world of UI/UX design and web development. These projects are the
                    result of my collaboration and dedication to creating great digital experiences.
                </p>
            </div>
            <!-- akhir judul halaman -->
            <!-- content -->
            <div
                class="mb-4 flex items-center justify-center font-inter md:gap-3 gap-1 text-sm md:text-lg font-medium md:font-semibold">
                <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="{
                    'animate-pulse bg-gradient-to-r from-blue-500 to-gray-200 dark:from-cyan-500 dark:to-gray-800 dark:hover:from-cyan-400 dark:hover:to-gray-600 dark:text-gray-200 border border-blue-600 dark:border-cyan-200': activeTab === tab,
                    'bg-gray-200 text-gray-800': activeTab !== tab}" class="md:px-4 px-2 py-2 rounded-lg mr-2" aria-label="tab">
                    {{ tab }}
                </button>
            </div>
            <div v-if="filteredProjects.length"
                class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 grid-cols-1 md:mx-0 mx-4" data-aos="fade-right"
                data-aos-duration="700" data-aos-delay="700">
                <div v-for="project in filteredProjects" :key="project.id"
                    class="relative flex w-full max-w-[26rem] flex-col rounded-xl border border-blue-200 dark:border-cyan-200 text-gray-700 shadow-lg bg-gradient-to-b from-gray-100 via-slate-200 to-gray-300">
                    <div
                        class="relative md:mx-4 mx-1 mt-1 md:mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img :src="project.imgPath" loading="lazy" :alt="project.name" />
                    </div>
                    <div class="p-6 mb-20">
                        <div class="flex items-center justify-between mb-3">
                            <h1
                                class="block font-sans text-lg md:text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-800">
                                Project {{ project.title}} - {{project.name}}
                            </h1>
                        </div>
                        <div class="flex flex-wrap items-center gap-2 mt-2">
                            <div v-for="(tech, index) in project.techStack" :key="index"
                                class="cursor-pointer rounded-full p-1 text-gray-900 transition-colors hover:!opacity-100 group-hover:opacity-70">
                                <span class="group relative">
                                    <div
                                        class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                        <div
                                            class="bottom-full whitespace-nowrap right-0 px-4 py-1 text-xs text-gray-800 bg-gray-100 rounded">
                                            {{ tech.label }}
                                            <svg class="top-full absolute left-0 w-full h-2 text-gray-100" x="0px"
                                                y="0px" viewBox="0 0 255 255" xml:space="preserve">
                                                <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="object-tooltip"
                                        class="hover:ring-2 hover:ring-white dark:ring-black  p-2 bg-gray-200 dark:bg-gray-700 border-blue-700 dark:border-cyan-400 border rounded-full">
                                        <!-- techStack icon-->
                                        <component :is="tech.icon" />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="md:p-6 p-3 pt-3 absolute bottom-0 mt-4 left-0 right-0">
                        <button v-if="canVisitProject(project)" @click="visitProject(project)"
                            class="flex w-full select-none rounded-lg bg-gray-800 py-3.5 lg:px-7 px-2 hover:animate-pulse text-center justify-center gap-2 items-center font-inter text-base md:text-lg font-bold capitalize text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 bg-gradient-to-r from-blue-500 to-gray-200 dark:from-cyan-500 dark:to-gray-800 dark:hover:from-cyan-400 dark:hover:to-gray-600 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-600"
                            aria-label="visit-project">
                            {{project.status}}
                            <span>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <button v-else
                            class="flex w-full select-none rounded-lg bg-gray-800 py-3.5 lg:px-7 px-2 hover:animate-pulse text-center justify-center gap-2 items-center font-inter text-base md:text-lg font-bold capitalize text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 bg-gradient-to-r from-blue-500 to-gray-200 dark:from-cyan-500 dark:to-gray-800 dark:hover:from-cyan-400 dark:hover:to-gray-600 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-600"
                            aria-label="not-visit-project">{{
                            project.status }}
                            <span>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                        clip-rule="evenodd" />
                                </svg>

                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div v-else class="text-center text-gray-500">
                No projects available.
            </div>
            <!-- akhir content -->
        </div>
    </section>
</template>
<script>
import projects from '@/services/projects';
export default {
    data() {
        return {
            projects: projects,
            tabs: ['ALL', 'UI/UX', 'FRONTEND', 'FULL STACK'],
            activeTab: 'ALL',
        };
    },
    computed: {
        filteredProjects() {
            if (this.activeTab === 'ALL') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.activeTab);
        },
    },
    methods: {
        canVisitProject(project) {
            return project.status === 'preview' && project.url !== '';
        },
        visitProject(project) {
            window.open(project.url, '_blank');
        }
    }
}
</script>