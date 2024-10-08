<template>
    <section id="about"
        class="bg-gradient-to-b from-blue-500 from-5% to-gray-100 dark:from-cyan-500 dark:from-5% dark:to-gray-800 pt-28 pb-2 md:pb-6 text-slate-700 dark:text-gray-200">
        <div
            class="px-4 pb-6 mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 md:pb-28">
            <span class="mb-8 text-4xl font-bold tracking-tight font-poppins md:text-6xl" data-aos="fade-up"
                data-aos-duration="500">About <span
                    class="bg-gradient-to-b from-blue-500 from-5% to-gray-50 font-courgette font-semibold dark:from-cyan-500 dark:from-5% dark:to-gray-800 p-2 ml-1 dark:text-gray-100 text-gray-700 transition-colors duration-700 ease-in-out bg-blue-800 rounded-lg">Me</span>
            </span>
            <div class="grid gap-16 row-gap-8 lg:grid-cols-2">
                <div class="flex flex-col items-start justify-center">
                    <div class="max-w-xl px-2 mb-6">
                        <h2 class="max-w-lg mt-4 mb-3 text-2xl font-semibold tracking-tight text-left font-inter md:text-4xl sm:leading-none md:mb-6 md:font-bold"
                            data-aos="fade-right" data-aos-duration="500"> Hi Dear, <span
                                class="font-semibold font-courgette">I'm Nath</span>
                        </h2>
                        <p class="text-base font-medium leading-relaxed text-justify font-roboto md:text-xl" data-aos="fade-right"
                            data-aos-duration="500" data-aos-delay="200"> I am a developer with a deep love for
                            <span class="font-bold">UI/UX, Frontend, and Backend Web Development</span> powerful
                            digital experiences.
                        </p>
                        <p class="mt-6 text-base font-medium leading-relaxed text-justify font-roboto md:text-xl"
                            data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
                            I am someone who is obsessed with innovation and rigor. In my journey as a web
                            developer, I have created projects that
                            combine beautiful design with powerful code. I am committed to continuous learning
                            and
                            development in this ever-changing
                            world.
                        </p>
                    </div>
                </div>
                <div class="relative mx-auto mt-12 lg:w-full" data-aos="zoom-in-up" data-aos-duration="1000"
                    data-aos-delay="200">
                    <div class="relative flex items-center justify-center w-full h-full">
                        <div
                            class="relative border-2 border-gray-700 border-dashed rounded-full profileCard_container xl:p-10 lg:p-4 border-spacing-4 dark:border-gray-200/50">
                            <!-- Iterasi untuk setiap icon di techStack -->
                            <button aria-label="tech-stack-tooltip" v-for="(tech, index) in techStack" :key="tech.id"
                                :style="{ animationDelay: `${index * 1}s` }"
                                class="profile_item rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
                                @mouseover="showTooltip(index)" @mouseleave="hideTooltip">
                                <span
                                    class="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 transition-all duration-500 rounded-full z-[2] dark:bg-gray-700 bg-gray-100"
                                    v-if="tech.id < 9">
                                    <component :is="tech.icon" />
                                </span>
                                <div v-if="tooltipIndex === index" class="tooltip">
                                    {{ tech.label }}
                                    <svg class="absolute left-0 w-full h-2 text-gray-100 top-full" x="0px" y="0px"
                                        viewBox="0 0 255 255" xml:space="preserve">
                                        <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
                                    </svg>
                                </div>
                            </button>
                            <div
                                class="flex items-center justify-center object-cover w-full h-full p-6 transition-all duration-500 bg-transparent rounded-full hover:scale-95">
                                <img class="object-cover border border-blue-700 rounded-full lg:w-max sm:w-full w-72 h-72 sm:h-auto dark:border-cyan-300"
                                    src="/assets/img/profil.png" alt="" data-aos="zoom-in-up" data-aos-duration="1000"
                                    data-aos-delay="200" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import techStack from '@/services/techStack';
export default {
    data() {
        return {
            techStack,
            tooltipIndex: null,
        };
    },
    methods: {
        positionClass(index) {
            const positions = [
                "left-6 top-10",
                "left-[45%] -top-6",
                "right-4 top-12",
                "-left-6 top-40",
                "-right-6 top-40",
                "bottom-12 left-4",
                "bottom-12 right-4",
                "right-[45%] -bottom-4",
            ];
            return positions[index];
        },
        showTooltip(index) {
            this.pauseAnimation();
            this.tooltipIndex = index;
        },
        hideTooltip() {
            this.resumeAnimation();
            this.tooltipIndex = null;
        },
        pauseAnimation() {
            const items = document.querySelectorAll('.profile_item');
            items.forEach(item => {
                item.style.animationPlayState = 'paused';
            });
        },
        resumeAnimation() {
            const items = document.querySelectorAll('.profile_item');
            items.forEach(item => {
                item.style.animationPlayState = 'running';
            });
        },
    },
};
</script>
<style scoped>
    @media (min-width: 1280px) {
        @keyframes move {
            0% {
                transform: rotate(0deg) translateX(290px) rotate(0deg);
            }

            12.5% {
                transform: rotate(45deg) translateX(290px) rotate(-45deg);
            }

            25% {
                transform: rotate(90deg) translateX(290px) rotate(-90deg);
            }

            37.5% {
                transform: rotate(135deg) translateX(290px) rotate(-135deg);
            }

            50% {
                transform: rotate(180deg) translateX(290px) rotate(-180deg);
            }

            62.5% {
                transform: rotate(225deg) translateX(290px) rotate(-225deg);
            }

            75% {
                transform: rotate(270deg) translateX(290px) rotate(-270deg);
            }

            87.5% {
                transform: rotate(315deg) translateX(290px) rotate(-315deg);
            }

            100% {
                transform: rotate(360deg) translateX(290px) rotate(-360deg);
            }
        }

        .profile_item {
            position: absolute;
            top: 45%;
            left: 45%;
            transform-origin: 0 0;
            animation: move 8s linear infinite;
            transform: translate(-45%, -45%);
            animation-play-state: running;
        }

        .profile_item :hover {
            animation-play-state: paused;
        }

        .tooltip {
            position: absolute;
            bottom: 100%;
            white-space: nowrap;
            right: 0;
            padding: 4px 8px;
            font-size: 0.75rem;
            color: #4a5568;
            background-color: #f7fafc;
            border-radius: 0.25rem;
            display: none;
        }

        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 5px;
            border-style: solid;
            border-color: #f7fafc transparent transparent transparent;
        }

        .profile_item:hover .tooltip {
            display: block;
        }

    }

    @media (max-width: 1280px) {
        @keyframes move {
            0% {
                transform: rotate(0deg) translateX(275px) rotate(0deg);
            }

            12.5% {
                transform: rotate(45deg) translateX(275px) rotate(-45deg);
            }

            25% {
                transform: rotate(90deg) translateX(275px) rotate(-90deg);
            }

            37.5% {
                transform: rotate(135deg) translateX(275px) rotate(-135deg);
            }

            50% {
                transform: rotate(180deg) translateX(275px) rotate(-180deg);
            }

            62.5% {
                transform: rotate(225deg) translateX(275px) rotate(-225deg);
            }

            75% {
                transform: rotate(270deg) translateX(275px) rotate(-270deg);
            }

            87.5% {
                transform: rotate(315deg) translateX(275px) rotate(-315deg);
            }

            100% {
                transform: rotate(360deg) translateX(275px) rotate(-360deg);
            }
        }

        .profile_item {
            position: absolute;
            top: 45%;
            left: 45%;
            transform-origin: 0 0;
            animation: move 8s linear infinite;
            transform: translate(-45%, -45%);
            animation-play-state: running;
        }

        .profile_item :hover {
            animation-play-state: paused;
        }

        .tooltip {
            position: absolute;
            bottom: 100%;
            white-space: nowrap;
            right: 0;
            padding: 4px 8px;
            font-size: 0.75rem;
            color: #4a5568;
            background-color: #f7fafc;
            border-radius: 0.25rem;
            display: none;
        }

        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 5px;
            border-style: solid;
            border-color: #f7fafc transparent transparent transparent;
        }

        .profile_item:hover .tooltip {
            display: block;
        }

    }

    @media (max-width: 640px) {
        @keyframes move {
            0% {
                transform: rotate(0deg) translateX(170px) rotate(0deg);
            }

            12.5% {
                transform: rotate(45deg) translateX(170px) rotate(-45deg);
            }

            25% {
                transform: rotate(90deg) translateX(170px) rotate(-90deg);
            }

            37.5% {
                transform: rotate(135deg) translateX(170px) rotate(-135deg);
            }

            50% {
                transform: rotate(180deg) translateX(170px) rotate(-180deg);
            }

            62.5% {
                transform: rotate(225deg) translateX(170px) rotate(-225deg);
            }

            75% {
                transform: rotate(270deg) translateX(170px) rotate(-270deg);
            }

            87.5% {
                transform: rotate(315deg) translateX(170px) rotate(-315deg);
            }

            100% {
                transform: rotate(360deg) translateX(170px) rotate(-360deg);
            }
        }

        .profile_item {
            position: absolute;
            top: 45%;
            left: 45%;
            transform-origin: 0 0;
            animation: move 8s linear infinite;
            transform: translate(-45%, -45%);
            animation-play-state: running;
        }

        .profile_item :hover {
            animation-play-state: paused;
        }

        .tooltip {
            position: absolute;
            bottom: 100%;
            white-space: nowrap;
            right: 0;
            padding: 4px 8px;
            font-size: 0.75rem;
            color: #4a5568;
            background-color: #f7fafc;
            border-radius: 0.25rem;
            display: none;
        }

        .tooltip::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 5px;
            border-style: solid;
            border-color: #f7fafc transparent transparent transparent;
        }

        .profile_item:hover .tooltip {
            display: block;
        }
    }
</style>



