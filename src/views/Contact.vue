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
                <p class="lg:mb-16 sm:text-xl font-inter dark:text-gray-200 font-medium text-gray-700"
                    data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Want to chat
                    or ask more about my work? Please send me a message through this form or use one of the
                    list social media
                    below.</p>
            </div>
            <div class="md:flex-nowrap flex flex-row flex-wrap">
                <div class="w-full">
                    <img src="/assets/img/contact1.svg" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"
                        alt="ilustrasi-kontak" class="dark:block hidden">
                    <img src="/assets/img/contact2.svg" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000"
                        alt="ilustrasi-kontak" class="dark:hidden">
                </div>
                <div class="w-full">
                    <form action="" id="myForm" class="font-inter space-y-8">
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="name"
                                class="dark:text-gray-200 block mb-2 text-base font-medium text-gray-700">Name</label>
                            <input type="text" id="name"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300 dark:shadow-sm-light"
                                placeholder="Your name" required>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">
                            <label for="email"
                                class="dark:text-gray-200 block mb-2 text-base font-medium text-gray-700">E-mail</label>
                            <input type="text" id="email"
                                class="bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300 dark:shadow-sm-light block w-full p-3 text-base text-gray-900 border border-gray-300 rounded-lg shadow-sm"
                                placeholder="youremail@mail.com" required>
                        </div>
                        <div class="sm:col-span-2" data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">
                            <label for="message"
                                class="dark:text-gray-200 block mb-2 text-base font-medium text-gray-700">Message</label>
                            <textarea id="message" rows="6"
                                class="block p-2.5 w-full text-base text-gray-700 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-300 dark:focus:border-cyan-300"
                                placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit"
                            class="bg-gradient-to-r from-blue-500 to-gray-200 dark:from-cyan-500 dark:to-gray-800 dark:hover:from-cyan-400 dark:hover:to-gray-600 dark:text-gray-200 font-poppins hover:transition-colors hover:brightness-110 hover:animate-pulse inline-flex p-2 font-semibold tracking-normal text-gray-900 border-2 border-gray-200 dark:border-gray-600 transition-all duration-1000 ease-in-out transform rounded-md shadow-lg"
                            data-aos="fade-up" data-aos-duration="500">Send
                            Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>