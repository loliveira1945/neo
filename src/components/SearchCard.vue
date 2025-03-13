<template>
  <form class="w-2/3 sm:w-1/2">   
    <div class="relative">
      <input type="search" id="default-search" class=" search block w-full p-4 ps-10 text-sm border rounded-lg focus:outline-none" placeholder="Pesquisar filme" required />
      <button type="submit" class="absolute end-2.5 bottom-2 font-medium rounded-lg text-sm px-4 py-2 button-search">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'SearchCard',
  }
</script>