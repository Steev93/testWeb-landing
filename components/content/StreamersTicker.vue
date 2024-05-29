<template>
  <div style="padding-bottom: 128px">
    <ContentSlot :use="$slots.default" />
    <ClientOnly>
      <MarqueeText
        :duration="40"
        :paused="isPaused"
        @mouseenter="isPaused = !isPaused"
        @mouseleave="isPaused = false"
      >
        <div style="display: flex">
          <div
            class="streamer-card"
            v-for="s in streamers"
            :key="s.href"
            @click="gotoStreamer(s.href)"
          >
            <div>
              <img :src="s.img" class="streamer-card-img" />
            </div>
            <div>
              <div class="streamer-card-title">
                <a :href="s.href"> {{ s.title }} </a>
              </div>
              <div class="streamer-card-subtitle">{{ s.subtitle }}</div>
            </div>
          </div>
        </div>
      </MarqueeText>
    </ClientOnly>
  </div>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component';

const isPaused = ref(false);

function gotoStreamer(href) {
  window.open(href);
}

const streamers = [
  {
    title: '@Deveraux',
    subtitle: 'Server Owner',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b2fd776a-6805-4c96-a348-df90ae1657f6-profile_image-70x70.png',
    href: 'https://www.twitch.tv/deveraux',
  },
  {
    title: '@METRITIS',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/49064db8-472d-4af5-af81-704ee67d2c45-profile_image-150x150.png',
    href: 'https://www.twitch.tv/metritis',
  },
  {
    title: '@brainlesstay',
    subtitle: 'FDG Stream Team',
    img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b539f252-67c2-44fe-a372-0d9f68fd55ec-profile_image-150x150.png',
    href: 'https://www.twitch.tv/brainlesstay',
  },
];
</script>

<style scoped lang="ts">
css({
  '.streamer-card': {
      position: 'relative',
      padding: '2rem',
      border: '1px solid #9146FF',
      background: '#9146FF33',
      borderRadius: '1rem',
      marginLeft: '2rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '&:hover': {
        background: '#9146FF88',
        cursor: 'pointer',
        transition: 'background 0.25s'
      }
  },
  '.streamer-card-title': {
      marginBottom: '0.5rem',
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: '600',
      // color: '#FBFBFB'
  },
  '.streamer-card-subtitle': {
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '500',
      color: '#ADA9A4'
  },
  '.streamer-card-img': {
      width: '50px',
      height: '50px',
      marginRight: '1rem',
      borderRadius: '50px'
  }

})
</style>
