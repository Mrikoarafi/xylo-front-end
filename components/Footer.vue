<template>
  <footer class="container text-sm">
    <section class="grid lg:grid-cols-6 gap-10 lg:gap-5">
      <div class="lg:col-span-2 lg:pr-20 text-center lg:text-left">
        <p class="leading-6 px-5 lg:px-0">
          Daniel Scrivner is an entreprenuer and investor focused on building
          enduring companies and breakthrough products.
        </p>
        <div
          class="flex items-center group cursor-pointer justify-center lg:justify-start"
        >
          <p class="text-[#B0B0B0] mr-2 group-hover:text-primary-color-hover2">
            See what he’s working on now
          </p>
          <svg
            width="5"
            height="8"
            viewBox="0 0 9 16"
            fill="none"
            class="stroke-[#B0B0B0] group-hover:stroke-[#f90] group-hover:ml-2 inline duration-200 mt-1"
          >
            <path
              d="M1 1L7.96317 7.96317L1 14.9263"
              stroke=""
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="text-white font-Markscript hover:text-primary-color-hover2 cursor-pointer text-2xl my-5 lg:my-14"
        >
          Riko Arafi
        </div>
      </div>
      <div
        class="space-y-5 tracking-wider text-[#B8B8B8] flex flex-col items-center lg:items-start"
      >
        <p class="font-semibold text-white">Explore</p>
        <button type="button" class="block hover:text-white">
          Most Popular
        </button>
        <button type="button" class="block hover:text-white">
          Most Recent
        </button>
        <button type="button" class="block hover:text-white">
          Topics & Tags
        </button>
        <button type="button" class="block hover:text-white">
          Friday Five
        </button>
      </div>
      <div
        class="space-y-5 tracking-wider text-[#B8B8B8] flex flex-col items-center lg:items-start"
      >
        <p class="font-semibold text-white">Outliers</p>
        <button type="button" class="block hover:text-white">Episodes</button>
        <button type="button" class="block hover:text-white">
          Subscribe Now
        </button>
        <button type="button" class="block hover:text-white">
          About the Show
        </button>
        <button type="button" class="block hover:text-white">Sponsors</button>
      </div>
      <div
        class="space-y-5 tracking-wider text-[#B8B8B8] flex flex-col items-center lg:items-start"
      >
        <p class="font-semibold text-white">Articles</p>
        <button type="button" class="block hover:text-white">Show Notes</button>
        <button type="button" class="block hover:text-white">
          Transcripts
        </button>
        <button type="button" class="block hover:text-white">Essays</button>
        <button type="button" class="block hover:text-white">Snippets</button>
      </div>
      <div
        class="space-y-5 tracking-wider text-[#B8B8B8] flex flex-col items-center lg:items-start"
      >
        <p class="font-semibold text-white">More</p>
        <button type="button" class="block hover:text-white">
          About Daniel
        </button>
        <button type="button" class="block hover:text-white">
          Business Card
        </button>
        <button type="button" class="block hover:text-white">Newsroom</button>
        <button type="button" class="block hover:text-white">Contact</button>
      </div>
    </section>
    <hr class="border-1 border-white/10 my-8 w-full" />
    <section
      class="flex flex-col items-center lg:flex-row justify-between text-xs text-[#525252] pb-5"
    >
      <p class="cursor-default text-center lg:text-left">
        Copyright © 2020 Daniel Scrivner.<br class="lg:hidden" />All rights
        reserved.
      </p>
      <div class="flex items-center space-x-4 mt-5 lg:mt-0">
        <button class="hover:text-white">Privacy & Terms</button>
        <button class="hover:text-white">Disclosures</button>
        <button class="hover:text-white">Sitemap</button>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponents',
}
</script>

<style></style>
