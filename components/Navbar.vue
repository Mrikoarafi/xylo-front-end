<template>
  <div
    v-click-outside="
      () => {
        dropdownOpen = false
      }
    "
    class="fixed top-0 w-full flex flex-col z-20"
  >
    <nav
      class="bg-[#161616] h-[56px] max-h-[56px] w-full py-3 z-10"
      :class="{ scroll: scroll }"
    >
      <div
        class="container flex items-center justify-between flex-row-reverse lg:flex-row"
      >
        <button
          class="bg-[#262626] border border-gray-600 p-1.5 rounded-md group"
          @click="modals_search = true"
        >
          <svg
            class="w-4 h-4 stroke-[#ffffff] group-hover:stroke-[#f90] duration-200 ease-in-out transition"
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
        </button>
        <div
          class="text-white font-Markscript hover:text-primary-color-hover2 cursor-default text-2xl"
        >
          Riko Arafi
        </div>
        <button
          aria-label="buttonHp"
          class="lg:hidden w-5 h-6 relative focus:outline-none dark:text-gray-300 dark:hover:text-custom-yellow-color z-10"
          @click="dropdownOpen = !dropdownOpen"
        >
          <span
            :class="dropdownOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'"
            class="block transition w-full h-0.5 rounded-lg bg-white absolute"
          ></span>

          <span
            :class="dropdownOpen ? 'opacity-0 ' : 'opacity-100'"
            class="block transition w-full h-0.5 rounded bg-white absolute"
          ></span>

          <span
            :class="dropdownOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'"
            class="block transition w-full h-0.5 rounded bg-white absolute"
          ></span>
        </button>
        <a
          href="https://www.instagram.com/rikoarafi/?hl=en"
          target="_blank"
          class="hidden lg:flex text-white bg-primary-color hover:bg-primary-color-hover text-sm rounded-lg py-1 px-4 border border-gray-600"
          >Subscribe</a
        >
      </div>
      <Modals-globalSearch
        :modals="modals_search"
        @close-modals="modals_search = null"
      />
    </nav>

    <Transition name="dropdown">
      <div
        v-if="dropdownOpen"
        class="lg:hidden px-[20px] flex flex-col text-sm w-full bg-[#111111] h-max py-3 space-y-3"
      >
        <button
          v-for="item in menu"
          :key="item.name"
          type="button"
          class="tracking-wide py-1 px-2 rounded text-white hover:text-primary-color-hover2 duration-100"
          @click.native="dropdownOpen = !dropdownOpen"
        >
          {{ item.name }}
        </button>
        <a
          href="https://www.instagram.com/rikoarafi/?hl=en"
          target="_blank"
          class="text-white bg-primary-color hover:bg-primary-color-hover text-sm rounded-lg py-2 text-center px-4 border border-gray-600"
          >Subscribe</a
        >
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponents',
  data() {
    return {
      scroll: false,
      modals_search: false,
      dropdownOpen: false,
      payload: {
        search: '',
      },
      menu: [
        {
          name: 'Podcast',
        },

        {
          name: 'Newsletter',
        },

        {
          name: 'Topic & Tags',
        },

        {
          name: 'About',
        },
        {
          name: 'Newsroom',
        },
        {
          name: 'Contact',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY > 0
    },
  },
}
</script>

<style scoped>
/* shadow ketika scroll */
.scroll {
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
}
</style>
