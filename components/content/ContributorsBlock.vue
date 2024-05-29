<template>
  <div>
    <ProseH1 id="contributors"
      >Your support is the backbone of Sin City's success.</ProseH1
    >
    <ProseP
      style="
        color: var(--elements-text-secondary-color-static) !important;
        font-size: var(--text-lg-fontSize) !important;
      "
    >
      <ContentSlot :use="$slots.default" />
    </ProseP>
    <ClientOnly>
      <ProseP
        style="color: var(--elements-text-secondary-color-static) !important"
      >
        A special shoutout to the
        <ProseStrong> {{ data ? data.length : '' }} </ProseStrong> contributors
        of this site on
        <ProseA href="https://github.com/SinCity-RP/web-landing">GitHub</ProseA
        >.
      </ProseP>
      <div class="contributors">
        <div v-for="i in data">
          <a :href="i.html_url" target="_blank" rel="noopener noreferrer">
            <img :src="i.avatar_url" />
          </a>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('sincity-announcements', () =>
  $fetch('https://api.github.com/repos/SinCity-RP/web-landing/contributors')
);
</script>

<style>
.contributors {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 1rem;
}

.contributors img {
  border-radius: 50%;
}
</style>
