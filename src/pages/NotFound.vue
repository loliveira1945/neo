<template>
  <div class="flex flex-col items-center h-full pt-[120px]">
    <p class="text-black font-bold text-2xl">
      ERROR 404 - Página não encontrada 😵‍💫
    </p>

    <router-link :to="`/`" class="pt-5">
      <ButtonCustom class="button-detail">
        Voltar
      </ButtonCustom>
    </router-link>
  </div>
</template>

<script>
  import ButtonCustom from '../components/ButtonCustom.vue';

  export default {
    name: 'NotFound',
  }
</script>
