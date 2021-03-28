<template>  
    <div>
        <div class="h-2 w-full bg-yellow-300"></div>
        <div class="w-full h-12 flex items-center justify-between px-6 mt-2">
            <router-link to="/" class="text-4xl text-yellow-300 font-semibold">Mevn</router-link>
            <div>
                <router-link class="text-2xl font-medium text-yellow-900" to="/auth/login">Sign In</router-link>
                <router-link class="text-2xl font-medium text-yellow-900 border-2 px-3 py-2 hover:text-yellow-500 hover:border-yellow-500 rounded-full border-yellow-900 ml-3" to="/auth/register">Join Now</router-link>
            </div>
        </div>
        

        <router-view></router-view>
    </div>
</template>
