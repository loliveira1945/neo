<template>
    <div class="card">
        <img 
            :src="imageSrc" 
            :alt="article.title" 
            class="w-full h-48 object-cover"
        />
        <div class="flex flex-col justify-center items-center px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ article.title }}</div>
            <p class="text-base text-center py-4">
                {{ article.overview }}
            </p>
        </div>
        <div class="px-6 py-4">
            <Button>
                Ler mais {{ article.id }}
            </Button>
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue';
    import defaultImage from '../assets/images/spiderman2.webp';

    export default {
        name: 'ArticleCard',
        props: {
            article: {
                type: Object,
                required: true,
            },
        },

        components: {
            Button
        },

        computed: {
            imageSrc() {
                return this.article.poster_path || defaultImage;
            },
        },
    }
</script>