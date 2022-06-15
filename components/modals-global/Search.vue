<template>
  <Transition name="modals">
    <div
      v-if="modals"
      class="fixed z-30 inset-0 h-screen max-h-screen flex flex-col items-center justify-center"
    >
      <!-- click close -->
      <div
        type="button"
        class="absolute w-full h-full bg-[#121212]"
        @click="$emit('close-modals')"
      ></div>
      <form
        class="content flex items-center flex-col z-10 py-10 px-10 lg:w-3/12 m-auto h-max bg-[#171717] rounded-xl overflow-y-auto ring-1 ring-white/10"
        @submit.prevent="what"
      >
        <div class="text-center">
          <p class="text-white tracking-wider">
            Quickly find episodes, articles,<br />
            and pages across the website.
          </p>
        </div>
        <div class="relative mt-5 w-full">
          <input
            v-model="search"
            type="text"
            class="rounded-[30px] pl-12 w-full pr-5 py-4 bg-transparent text-white ring-1 ring-white/10 outline-none focus:bg-black ease-in-out duration-300"
            placeholder="Search..."
            required
          />
          <svg
            class="absolute top-1/2 -translate-y-1/2 z-10 left-5 w-4 h-4 stroke-[#ffffff]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L18 18"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-if="search.length"
            class="absolute top-1/2 -translate-y-1/2 z-10 right-5 w-4 h-4 stroke-[#ffffff] cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            @click="search = ''"
          >
            <path
              d="M6 6L18.7742 18.7742"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 18.7742L18.7742 5.99998"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <button
          type="submit"
          class="rounded-[30px] w-full py-4 text-white bg-primary-color mt-3 hover:bg-primary-color-hover"
        >
          Search
        </button>
        <hr class="border-1 border-white/10 my-8 w-full" />
        <div class="flex justify-between w-full space-x-5">
          <div class="text-center group">
            <button
              type="button"
              class="rounded-full flex w-16 h-16 bg-primary-color group-hover:bg-primary-color-hover"
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="28"
                class="m-auto"
                viewBox="0 0 39.9 50"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: #fff;
                      fill-rule: evenodd;
                    }
                  </style>
                </defs>
                <title>popular-white</title>
                <path
                  class="cls-1"
                  d="M26.3,48.6h0a15.8,15.8,0,0,0,4.7-7h0c.1-.3-.1-.6-.3-.6h-.1a26,26,0,0,0-6.8,1h0a.5.5,0,0,1-.7-.3v-.4h0a19.9,19.9,0,0,0,1-7.3c0-5.3-3.2-9.4-4.4-10.8h0a.5.5,0,0,0-.7-.1l-.2.2C17.3,28.1,11,35,11,42c0,4.2,2.8,6,3,6.9s-.2,1.2-1,1C7.9,48.3,0,41,0,32,0,15.5,16,12.3,16,4h0a6.3,6.3,0,0,0-1-3h0a.9.9,0,0,1,.5-1h.4c5.1,1.4,17,8.6,17,23h0a25.6,25.6,0,0,1-2,9s3.4-.6,7.9-1h0a1,1,0,0,1,1.1,1v.2c0,6.9-5.4,14.9-13.1,17.8-.6.2-1.1-.9-.5-1.4Z"
                />
              </svg>
            </button>
            <p
              class="text-white group-hover:text-primary-color-hover2 text-sm mx-auto mt-2 cursor-default"
            >
              Popular
            </p>
          </div>
          <div class="text-center group">
            <button
              type="button"
              class="rounded-full flex w-16 h-16 bg-primary-color group-hover:bg-primary-color-hover"
            >
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                class="m-auto"
                width="28"
                height="28"
                viewBox="0 0 60 60"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: #fff;
                      fill-rule: evenodd;
                    }
                  </style>
                </defs>
                <title>latest-posts-white</title>
                <path
                  class="cls-1"
                  d="M30,60h0A30,30,0,1,1,60,30h0A30,30,0,0,1,30,60ZM41.9,35.6l-8.3-7.5L31.9,11.7h0a1.9,1.9,0,0,0-3.8,0c0,.2-1.8,18.1-1.9,18.3h0A3,3,0,0,0,28,33l11.9,5.6h0a1.8,1.8,0,0,0,2.4-.9,1.8,1.8,0,0,0-.4-2.1Z"
                />
              </svg>
            </button>
            <p
              class="text-white group-hover:text-primary-color-hover2 text-sm mx-auto mt-2 cursor-default"
            >
              Recent
            </p>
          </div>
          <div class="text-center group">
            <button
              type="button"
              class="rounded-full flex w-16 h-16 bg-primary-color group-hover:bg-primary-color-hover"
            >
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width="23"
                class="h-full m-auto"
                viewBox="0 0 46 52"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: #fff;
                      fill-rule: evenodd;
                    }
                  </style>
                </defs>
                <title>topics-and-tags-white</title>
                <path
                  class="cls-1"
                  d="M46,17.2V48.6h0A3.4,3.4,0,0,1,42.6,52H3.5A3.4,3.4,0,0,1,0,48.6H0V17.2H0a3.5,3.5,0,0,1,3.4-3.5H42.5A3.5,3.5,0,0,1,46,17.2ZM8.1,4.6h0A1.2,1.2,0,0,1,6.9,3.4h0A3.4,3.4,0,0,1,10.3,0H35.7a3.4,3.4,0,0,1,3.4,3.4h0A1.1,1.1,0,0,1,38,4.6H8.1Zm34.4,5.7h0a1.1,1.1,0,0,1-1.1,1.1H4.6a1.1,1.1,0,0,1-1.1-1.1h0A3.4,3.4,0,0,1,6.9,6.9H39.1a3.4,3.4,0,0,1,3.4,3.4Z"
                  transform="translate(0 0)"
                />
              </svg>
            </button>
            <p
              class="text-white group-hover:text-primary-color-hover2 text-sm mx-auto mt-2 cursor-default"
            >
              Browse All
            </p>
          </div>
        </div>
      </form>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'SearchComponents',
  props: ['modals'],
  data() {
    return {
      search: '',
    }
  },
  methods: {
    what() {},
  },
}
</script>

<style scoped></style>
