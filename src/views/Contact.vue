<template>
    <section id="contact"
        class="bg-gradient-to-t from-blue-500 from-5% to-gray-100 dark:from-cyan-500 dark:from-5% dark:to-gray-800">
        <div
            class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-b-2xl relative px-4 py-24 mx-auto">
            <div class="lg:mb-16 max-w-screen-sm mx-auto mb-8 text-center">
                <h1 class="font-poppins sm:text-6xl dark:text-gray-200 mb-8 text-4xl font-bold tracking-tight text-center text-gray-700"
                    data-aos="fade-up" data-aos-duration="500">
                    Contact <span
                        class="bg-gradient-to-b from-blue-500 from-5% to-gray-50 dark:from-cyan-500 dark:from-5% dark:to-gray-800 p-1 ml-1 font-courgette font-semibold dark:text-gray-100 text-gray-700 transition-colors duration-700 ease-in-out bg-blue-800 rounded-lg">Me</span>
                </h1>
                <p class="lg:mb-16 sm:text-xl leading-relaxed font-inter dark:text-gray-200 font-medium text-gray-700"
                    data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Want to chat
                    or ask more about my work? Please send me a message through this form or use one of the
                    list social media
                    below.</p>
            </div>
            <div class="md:flex-nowrap flex flex-row flex-wrap">
                <div class="w-full">
                    <img src="/assets/img/contact1.svg" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"
                        alt="ilustrasi-kontak" loading="eager" class="dark:block hidden w-full h-full">
                    <img src="/assets/img/contact2.svg" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"
                        alt="ilustrasi-kontak" loading="eager" class="dark:hidden w-full h-full">
                </div>
                <div class="w-full">
                    <form @submit.prevent="handleSubmit" id="myForm" class="font-inter space-y-8">
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="name"
                                class="dark:text-gray-200 block mb-2 text-base font-medium text-gray-700">Name</label>
                            <input type="text" id="name"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300 dark:shadow-sm-light"
                                placeholder="Your name" v-model="formData.name" required>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="email"
                                class="dark:text-gray-200 block mb-2 text-base font-medium text-gray-700">E-mail</label>
                            <input type="email" id="email"
                                class="bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300 dark:shadow-sm-light block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg shadow-sm"
                                placeholder="youremail@mail.com" v-model="formData.email" required>
                        </div>
                        <div class="sm:col-span-2" data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">
                            <label for="message"
                                class="dark:text-gray-200 block mb-2 text-base font-medium text-gray-700">Message</label>
                            <textarea id="message" rows="6"
                                class="block p-2.5 w-full text-base text-gray-700 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300"
                                placeholder="Your message..." v-model="formData.message" required></textarea>
                        </div>
                        <button aria-label="submit-form"type="submit"
                            class="bg-gradient-to-r from-blue-500 to-gray-200 dark:from-cyan-500 dark:to-gray-800 dark:hover:from-cyan-400 dark:hover:to-gray-600 dark:text-gray-200 font-poppins hover:transition-colors hover:brightness-110 hover:animate-pulse inline-flex p-2 font-semibold tracking-normal text-gray-900 border-2 border-gray-200 dark:border-gray-600 transition-all duration-1000 ease-in-out transform rounded-md shadow-lg"
                            data-aos="fade-up" data-aos-duration="500">Send Message</button>
                    </form>
                    <!-- Loading Overlay -->
                    <div v-if="isLoading"
                        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">

                        <div class="flex-col gap-4 w-full flex items-center justify-center">
                            <div
                                class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                                <img src="/logo.jpg" alt="logo" class="w-full h-full rounded-full">
                            </div>
                            <p class="text-gray-100 text-xl font-semibold">Sending message...</p>
                        </div>
                    </div>

                    <!-- Success/Failure Message -->
                    <div v-if="message"
                        class="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden">
                        <div class="bg-gray-100 dark:bg-gray-600 p-6 rounded-xl shadow-md text-center">
                            <div class="w-full p-4 mb-4 mx-auto">
                                <video autoplay loop muted playsinline class="mx-auto">
                                    <source :src="animationSrc" type="video/webm">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p
                                :class="{ 'text-gray-800 dark:text-gray-100 text-xl font-semibold': isSuccess, 'text-red-500 text-xl font-semibold': !isSuccess }">
                                {{ message }}</p>
                            <button aria-label="close-message" @click="message = ''"
                                class="mt-4 bg-gradient-to-r from-blue-500 to-gray-200 dark:from-cyan-500 dark:to-gray-800 dark:hover:from-cyan-400 dark:hover:to-gray-600 dark:text-gray-200 font-poppins hover:transition-colors hover:brightness-110 hover:animate-pulse inline-flex p-2 font-semibold tracking-normal text-gray-900 border-2 border-gray-50 dark:border-gray-800 transition-all duration-1000 ease-in-out transform rounded-md shadow-lg">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            isLoading: false,
            message: '',
            isSuccess: false
        };
    },
    computed: {
        animationSrc() {
            return this.isSuccess ? '/success.webm' : '/failure.webm';
        }
    },
    methods: {
        async handleSubmit() {
            this.isLoading = true;
            this.message = '';
            const url = 'https://api.sheetmonkey.io/form/';
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                });

                if (response.ok) {
                    this.isSuccess = true;
                    this.message = 'Form submitted successfully!';
                    // Reset form fields if needed
                    this.formData = {
                        name: '',
                        email: '',
                        message: ''
                    };
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                this.isSuccess = false;
                this.message = error.message;
            } finally {
                this.isLoading = false;
            }
        }
    }
};
</script>