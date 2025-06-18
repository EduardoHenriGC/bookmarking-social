<script setup>
import { usePage } from '@inertiajs/vue3';
import { LayoutGrid, LogIn, Settings, UserPlus } from 'lucide-vue-next';
import { computed } from 'vue';

const page = usePage();
const posts = computed(() => page.props.posts || [
    { id: 1, title: 'Mahoraga', description: 'Jujutsu kaisen', image_url: 'https://i.pinimg.com/736x/d6/86/f4/d686f42ac751b83b3b0915be0eb7babf.jpg', aspectRatio: '9/16' },

    {id:2, title: 'Céu', description: 'Espaço', image_url: 'https://i.pinimg.com/736x/86/c8/b3/86c8b31540670be7da26c6a915497afa.jpg', aspectRatio: '1/1' },
    {id:3, title: 'Goku black e Trunks', description: 'DBS', image_url: 'https://i.pinimg.com/736x/b6/89/99/b68999b71ed5054617790d0b530a1f92.jpg' , aspectRatio: '4/3' },
    { id: 4, title: 'Mahoraga', description: 'Jujutsu kaisen', image_url: 'https://i.pinimg.com/736x/d6/86/f4/d686f42ac751b83b3b0915be0eb7babf.jpg', aspectRatio: '4/5' },
    {id:5, title: 'Céu', description: 'Espaço', image_url: 'https://i.pinimg.com/736x/86/c8/b3/86c8b31540670be7da26c6a915497afa.jpg' , aspectRatio: '16/9'},
    

]);
</script>

<template>
    <InertiaHead title="Welcome" />

    <div class="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200">
        <!-- Header -->
        <header class="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">
            <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Memories X</h1>
            <div class="flex items-center gap-3">
                <template v-if="page.props.auth.user">
                    <InertiaLink :href="route('dashboard')">
                        <Button label="Dashboard" class="mr-2">
                            <template #icon>
                                <LayoutGrid />
                            </template>
                        </Button>
                    </InertiaLink>
                 
                </template>
                <template v-else>
                   <InertiaLink :href="route('login')">
    <Button 
        label="Login" 
        class="mr-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out transform hover:scale-105">
        <template #icon>
            <LogIn />
        </template>
    </Button>
</InertiaLink>

<InertiaLink :href="route('register')">
    <Button 
        label="Register" 
        class="bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:scale-105">
        <template #icon>
            <UserPlus />
        </template>
    </Button>
</InertiaLink>
                </template>
            </div>
        </header>

 <div class="max-w-screen-2xl mx-auto px-6 mt-10">
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
    <div
      v-for="post in posts"
      :key="post.id"
      class="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-shadow duration-300"
    >
      <img
        :src="post.image_url"
        :alt="post.title"
        :class="[
          'w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105',
          `aspect-[${post.aspectRatio}]`
        ]"
      />
      <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-800 mb-1 truncate">{{ post.title }}</h2>
        <p class="text-sm text-gray-600 line-clamp-3">{{ post.description }}</p>
        </div>
    </div>
  </div>
</div>



    </div>
</template>

<style scoped>
.columns-1 > *,
.columns-2 > *,
.columns-3 > *,
.columns-4 > * {
    break-inside: avoid;
}
.break-inside-avoid {
  break-inside: avoid;
}

</style>