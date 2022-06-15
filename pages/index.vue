<template>
  <div>
    <section
      class="hidden lg:grid grid-cols-4 bg-[#121212] h-20 text-white items-center justify-items-center"
    >
      <button
        v-for="(item, index) in 4"
        :key="index"
        type="button"
        class="hover:text-primary-color-hover2 font-semibold text-sm"
      >
        {{
          index === 0
            ? 'Podcast'
            : index === 1
            ? 'Newsletter'
            : index === 2
            ? 'Topic & Tags'
            : 'More'
        }}
      </button>
    </section>
    <section class="grid grid-cols-1 lg:grid-cols-2 container px-5 lg:px-10">
      <div
        class="lg:order-last"
        style="
          will-change: transform;
          transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
        "
      >
        <img
          src="~assets/img/heroimg.png"
          class="w-full h-full"
          alt="hero image"
        />
      </div>
      <div class="self-center lg:pr-32">
        <div>
          <p
            class="text-2xl lg:text-3xl font-bold tracking-wide text-center lg:text-left"
          >
            Timeless insights for business and life.
          </p>
          <p
            class="lg:text-lg break-words mt-5 font-medium text-center lg:text-left"
          >
            Every week, I sit down with someone in the Top 1% of their field —
            from NYT bestselling authors to Oscar winners — to decode what
            they've mastered. Listen as I uncover the tactics, routines, and
            habits that will propel you to the top of your field.
          </p>
          <div class="lg:w-[388px] flex flex-col">
            <button
              type="button"
              class="flex flex-col lg:flex-row rounded-lg p-3 w-full font-semibold tracking-wide bg-primary-color/70 hover:bg-primary-color-hover border border-gray-800 mt-6 items-center mb-2 lg:mb-0"
            >
              <img
                src="~assets/img/herobuttonimg.jpg"
                alt="hero image button"
                class="w-[100px] h-[80px] rounded-lg"
              />
              <div class="lg:text-left text-xs ml-3 text-center">
                <p class="text-primary-color-hover2 my-1">LATEST EPISODE</p>
                <p class="leading-4">
                  #111 – 20 Minute Playbook: Illia Polosukhin of NEAR Protocol
                  and Unchain Fund
                </p>
              </div>
            </button>
            <div class="flex flex-col lg:flex-row mt-2 gap-2">
              <button
                type="button"
                class="flex rounded-lg p-2 px-8 lg:w-max font-medium tracking-wide bg-primary-color/70 hover:bg-primary-color-hover border border-gray-800 justify-center w-full"
              >
                Start Here
              </button>
              <button
                type="button"
                class="flex rounded-lg p-2 flex-1 font-medium tracking-wide bg-primary-color/70 hover:bg-primary-color-hover border border-gray-800 justify-center"
              >
                Listen to the Podcast
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="hidden lg:grid grid-cols-5 bg-[#121212] h-20 text-white items-center justify-items-center mb-5"
    >
      <img
        v-for="(item, index) in 5"
        :key="index"
        class="max-h-12"
        :src="
          require(`@/assets/img/${
            index === 0
              ? 'billboard.svg'
              : index === 1
              ? 'logo-nytimes.svg'
              : index === 2
              ? 'bloomberg.svg'
              : index === 3
              ? 'washpost.svg'
              : 'espn.svg'
          }`)
        "
        alt="logo banner"
      />
    </section>
    <section class="container lg:px-20 relative">
      <button
        type="button"
        class="hidden lg:block rounded-full absolute top-1/2 translate-y-1/2 left-4 h-[50px] w-[50px] bg-primary-color hover:bg-primary-color-hover border border-gray-800"
        @click="prev"
      >
        <svg
          width="7"
          height="14"
          viewBox="0 0 9 16"
          fill="none"
          class="stroke-[#ffff] group-hover:ml-2 inline duration-200 rotate-180"
        >
          <path
            d="M1 1L7.96317 7.96317L1 14.9263"
            stroke=""
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div>
        <slick ref="slick" :options="slickOptions">
          <div v-for="(item, index) in data" :key="index" class="p-3">
            <div
              class="bg-white rounded-2xl my-5 text-black overflow-hidden cursor-pointer lg:h-[620px] flex flex-col group"
            >
              <div
                class="h-[200px] max-h-[200px] z-0 relative overflow-hidden bg-[#050505]"
              >
                <p
                  class="z-10 absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 text-xs font-semibold py-1 px-2 rounded-md text-white"
                >
                  NEW EPISODE
                </p>
                <img
                  :src="require(`@/assets/img/${item.img}`)"
                  alt="carousel img"
                  class="absolute w-full -top-14"
                />
                <p
                  class="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 font-semibold py-1 px-2 rounded-3xl text-white text-sm tracking-wide"
                >
                  Listen Now
                </p>
              </div>
              <div class="p-6">
                <p class="font-bold text-lg tracking-wide hover:underline">
                  {{ item.title }}
                </p>
                <p class="mt-3">
                  {{ item.description }}
                </p>
              </div>
              <div
                class="mt-auto px-6 pb-6 font-semibold text-primary-color-hover2"
              >
                Show notes
                <svg
                  width="7"
                  height="14"
                  viewBox="0 0 9 16"
                  fill="none"
                  class="stroke-[#f90] group-hover:ml-2 inline duration-200"
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
            </div>
          </div>
        </slick>
      </div>

      <button
        type="button"
        class="hidden lg:block rounded-full absolute top-1/2 translate-y-1/2 right-4 h-[50px] w-[50px] bg-primary-color hover:bg-primary-color-hover border border-gray-800"
        @click="next"
      >
        <svg
          width="7"
          height="14"
          viewBox="0 0 9 16"
          fill="none"
          class="stroke-[#ffff] group-hover:ml-2 inline duration-200"
        >
          <path
            d="M1 1L7.96317 7.96317L1 14.9263"
            stroke=""
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </section>
    <section class="container lg:px-20 relative grid lg:grid-cols-3">
      <div v-for="(item, index) in 3" :key="index" class="p-3 w-full">
        <div
          class="bg-white rounded-2xl text-black cursor-pointer h-max flex flex-col group items-center py-4 px-10 lg:p-10"
        >
          <button
            type="button"
            class="rounded-full flex w-12 h-12 bg-primary-color group-hover:bg-primary-color-hover2 transition duration-300 ease-in-out"
          >
            <img
              :src="
                require(`@/assets/icon/${
                  index === 0
                    ? 'fire.svg'
                    : index === 1
                    ? 'clock.svg'
                    : 'archive.svg'
                }`)
              "
              class="w-6 h-6 m-auto"
              alt="logo banner"
            />
          </button>
          <p
            class="group-hover:text-primary-color-hover2 font-semibold tracking-wide mt-3 mb-1 transition duration-300 ease-in-out"
          >
            {{
              index === 0
                ? 'TRENDING NOW'
                : index === 1
                ? 'NEW RELEASES'
                : 'THE ARCHIVES'
            }}
          </p>
          <p
            class="group-hover:text-primary-color-hover2 tracking-wide text-center font-semibold text-sm transition duration-300 ease-in-out"
          >
            {{
              index === 0
                ? 'Find the interviews and articles that are trending now.'
                : index === 1
                ? 'Catch up on all of the latest interviews and articles.'
                : 'Explore the archives by browsing categories and tags.'
            }}
          </p>
        </div>
      </div>
    </section>
    <hr class="border-1 border-white/10 my-8 w-full" />
    <section class="container grid lg:grid-cols-2 gap-7">
      <div
        class="bg-[#171717] border border-gray-800 rounded-2xl overflow-hidden"
      >
        <div class="text-center p-16">
          <p
            class="text-primary-color-hover2 font-semibold tracking-wide text-sm"
          >
            LISTEN NOW
          </p>
          <p class="my-3 text-2xl lg:text-3xl font-semibold">
            Outliers Podcast
          </p>
          <p class="font-semibold text-sm lg:text-lg mb-3">
            Every week, I sit down with someone in the Top 1% of their field to
            decode what they've mastered and what they've learned along the way.
          </p>
          <button
            class="font-semibold bg-white rounded-3xl text-black py-3 px-6 mt-3 hover:bg-white/90 text-sm"
          >
            Explore Episodes
          </button>
        </div>
        <div class="grid grid-cols-3 gap-4 overflow-hidden">
          <div class="space-y-4">
            <img
              :src="require(`@/assets/img/img1.jpg`)"
              alt="img"
              class="rounded-r-xl"
            />
            <img
              :src="require(`@/assets/img/img2.jpg`)"
              alt="img"
              class="rounded-tr-xl"
            />
          </div>
          <div class="space-y-4 self-end">
            <img
              :src="require(`@/assets/img/img3.jpg`)"
              alt="img"
              class="rounded-xl"
            />
            <img
              :src="require(`@/assets/img/img4.jpg`)"
              alt="img"
              class="rounded-t-xl"
            />
          </div>
          <div class="space-y-4">
            <img
              :src="require(`@/assets/img/img5.jpg`)"
              alt="img"
              class="rounded-l-xl"
            />
            <img
              :src="require(`@/assets/img/img6.jpg`)"
              alt="img"
              class="rounded-tl-xl"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-[#171717] border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
      >
        <div class="text-center p-16">
          <p
            class="text-primary-color-hover2 font-semibold tracking-wide text-sm"
          >
            SUBSCRIBE NOW
          </p>
          <p class="my-3 text-2xl lg:text-3xl font-semibold">Friday 5 Email</p>
          <p class="font-semibold text-sm lg:text-lg mb-3">
            Every Friday, I share five things I've been reading, using, and
            loving—including articles, biohacks, gadgets, and more.
          </p>
          <button
            class="font-semibold bg-white rounded-3xl text-black py-3 px-6 mt-3 hover:bg-white/90 text-sm"
          >
            Subscribe Now
          </button>
        </div>
        <div class="grid grid-cols-3 gap-4 overflow-hidden mt-auto">
          <div class="space-y-4">
            <img
              :src="require(`@/assets/img/img7.jpg`)"
              alt="img"
              class="rounded-r-xl"
            />
            <img
              :src="require(`@/assets/img/img8.jpg`)"
              alt="img"
              class="rounded-tr-xl"
            />
          </div>
          <div class="space-y-4 self-end">
            <img
              :src="require(`@/assets/img/img9.jpg`)"
              alt="img"
              class="rounded-xl"
            />
            <img
              :src="require(`@/assets/img/img10.jpg`)"
              alt="img"
              class="rounded-t-xl"
            />
          </div>
          <div class="space-y-4">
            <img
              :src="require(`@/assets/img/img11.jpg`)"
              alt="img"
              class="rounded-l-xl"
            />
            <img
              :src="require(`@/assets/img/img12.jpg`)"
              alt="img"
              class="rounded-tl-xl"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="container my-20 items-center justify-center">
      <div class="lg:w-[600px] text-center mx-auto">
        <p class="text-lg lg:text-2xl font-bold tracking-wide">
          GET THE WEEKLY SUMMARY
        </p>
        <p class="font-semibold tracking-wide text-sm my-4 lg:my-5">
          Join 7,500+ including Fortune 500 CEOs, championship coaches, and
          bestselling authors who get my free weekly summary.
        </p>

        <form
          class="mx-auto mt-6 lg:mt-2 flex flex-col lg:flex-row justify-center h-max px-3 lg:px-0"
          @submit.prevent="email_send"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email..."
            required
            class="bg-black outline-none rounded-t-lg lg:rounded-t-none lg:rounded-l-lg pr-10 text-left pl-4 overflow-hidden py-4 border lg:w-96 border-white"
          />
          <button
            type="submit"
            class="bg-white text-black py-4 lg:py-0 px-8 text-sm font-semibold hover:bg-white/90 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg"
          >
            Try It
          </button>
        </form>
        <p class="text-[#7a7a7a] text-xs mt-4 leading-6">
          By subscribing, you agree to our <br class="lg:hidden" />
          <span
            class="underline cursor-pointer hover:text-white duration-300 transition ease-in-out"
            >privacy policy.</span
          >
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default {
  name: 'IndexPage',
  components: { Slick },
  data() {
    return {
      data: [
        {
          img: 'carousel1.jpeg',
          title: `#111 – 20 Minute Playbook: Illia Polosukhin of NEAR Protocol and Unchain Fund`,
          description: `In Episode #111, we deconstruct Illia Polosukhin's peak performance playbook—from his favorite book to the tiny habit that's had the biggest impact on his life. Illia is the co-founder of NEAR Protocol and Unchain Fund.`,
        },
        {
          img: 'carousel2.jpeg',
          title: `#110 Payload – Building a Media Brand to Cover the Business and Policy of Space | Mo Islam, Co-Founder`,
          description: `In Episode #110, we explore building a media brand to cover the business and policy of space. We’re joined by Mo Islam, Payload’s Co-Founder, who talks with us about becoming the number one resource for space industry news.`,
        },
        {
          img: 'carousel3.jpeg',
          title: `#20 Minute Playbook: Howie Schwab – Lead Portfolio Manager for Emerging Markets Growth at Driehaus Capital`,
          description: `Howie Schwab is Lead Portfolio Manager for Emerging Markets Growth at Driehaus Capital. In this episode, Howie and Daniel discuss regime shifts in the market and obsessing over failures.`,
        },
        {
          img: 'carousel4.jpeg',
          title: `20 Minute Playbook: Gokul Rajaram – Prolific Angel Investor and Product and Business Helper at DoorDash`,
          description: `Gokul Rajaram is an angel investor and Product and Business Helper at DoorDash. In this episode, Gokul and Daniel discuss crypto, international investing, and habits and routines.`,
        },
        {
          img: 'carousel5.jpeg',
          title: `Founder Spotlight: Elude – Building a New Search Engine and Brand for Global Travel with Alex Simon, Co-Founder and CEO`,
          description: `Alex Simon is CEO and Co-Founder of Elude, a travel app that allows users to discover new destinations based on timing and budget. Alex and Daniel dive deep into building and scaling a business in the notoriously difficult travel industry.`,
        },
        {
          img: 'carousel6.jpeg',
          title: `20 Minute Playbook: Howie Schwab – Lead Portfolio Manager for Emerging Markets Growth at Driehaus Capital`,
          description: `Howie Schwab is Lead Portfolio Manager for Emerging Markets Growth at Driehaus Capital. In this episode, Howie and Daniel discuss regime shifts in the market and obsessing over failures.`,
        },
        {
          img: 'carousel7.jpeg',
          title: `20 Minute Playbook: Gokul Rajaram – Prolific Angel Investor and Product and Business Helper at DoorDash`,
          description: `Gokul Rajaram is an angel investor and Product and Business Helper at DoorDash. In this episode, Gokul and Daniel discuss crypto, international investing, and habits and routines.`,
        },
        {
          img: 'carousel8.jpeg',
          title: `#110 Payload – Building a Media Brand to Cover the Business and Policy of Space | Mo Islam, Co-Founder`,
          description: `In Episode #110, we explore building a media brand to cover the business and policy of space. We’re joined by Mo Islam, Payload’s Co-Founder, who talks with us about becoming the number one resource for space industry news.`,
        },
        {
          img: 'carousel9.jpeg',
          title: `#111 – 20 Minute Playbook: Illia Polosukhin of NEAR Protocol and Unchain Fund`,
          description: `In Episode #111, we deconstruct Illia Polosukhin's peak performance playbook—from his favorite book to the tiny habit that's had the biggest impact on his life. Illia is the co-founder of NEAR Protocol and Unchain Fund.`,
        },
      ],
      email: '',
      slickOptions: {
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
        autoplay: true,
        arrows: false,
        draggable: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      },
    }
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },
    email_send() {},
  },
}
</script>

<style>
.slick-dots button:before {
  color: White !important;
}
.slick-dots li.slick-active button:before {
  color: White !important;
}

.scrollable {
  will-change: transform;
  transform: translate3d(0px, 9.6114px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}
.scrollable2 {
  will-change: transform;
  transform: translate3d(0px, -4.4171px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}
</style>
