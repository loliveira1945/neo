<template>
    <div class="card h-fit w-full">
        <img 
            :src="imageSrc" 
            :alt="article.title" 
            class="w-full h-48 object-cover object-top"
        />
        <div class="flex flex-col justify-center items-center px-6 py-4 w-full h-48">
            <div class="font-bold text-center text-xl mb-2 h-16">{{ article.title }}</div>
            <p class="text-base text-center py-4">
                {{ overviewMovie }}
            </p>
        </div>
        <div class="px-6 py-4">
            <router-link :to="`/article/${article.id}`">
                <ButtonCustom class="button-card">
                    Ler mais
                </ButtonCustom>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ButtonCustom from './ButtonCustom.vue';
    import defaultImage from '../assets/images/not-image.png';

    export default {
        name: 'ArticleCard',
        props: {
            article: {
                type: Object,
                required: true,
            },
        },

        components: {
            ButtonCustom
        },

        computed: {
            imageSrc() {
                if (this.article.poster_path) {
                    return `https://image.tmdb.org/t/p/original/${this.article.poster_path}`;
                }
                return defaultImage;
            },

            overviewMovie() {
                if(this.article.overview) {
                    return this.article.overview
                }
                return 'FILME SEM DESCRIÇÃO'
            }
        }
    }
</script>