<template>
    <div class="container my-16 w-full h-12 mx-auto">
        <div class="max-w-xs mx-auto h-12">
        <h1 class="text-center text-yellow-500 text-2xl">Register</h1>
        <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
            <text-input 
            name="name"
            :value="model.name" 
            :error="errors.first('name')"
            v-model="model.name" 
            v-validate="'required'"
            placeholder="Enter Your name" />

            <text-input 
            name="email"
            v-validate="'required|email'"
            :value="model.email" 
            :error="errors.first('email')"
            v-model="model.email" 
            placeholder="Enter Your email" />

            <text-input 
            name="password"
            v-validate="'required|min:6'"
            :error="errors.first('password')"
            type="password"
            :value="model.password" 
            v-model="model.password" 
            placeholder="Enter Your password" />

            
            <btn
                    label="Sign Up"
                    :disabled="loading"
                    :loading="loading"
                    @click="register"
                />
        </div>
        </div>
    </div>
</template>

<script>
    import {POST_REGISTER} from '@store/auth/actions'

    export default {
        data: () => ({
            loading: false,
            model: {
                name: '',
                email: '',
                password: ''
            }
        }),

        methods: {
            register() {
                this.$validator.validate().then(isValid => {
                    if(!isValid) {
                        return
                    }

                    this.toggleLoading()

                    this.$store.dispatch(POST_REGISTER, this.model)
                        .then(() => {
                            this.toggleLoading()

                            this.$router.push('/')
                        })
                })
            },

            toggleLoading() {
                this.loading = !this.loading
            }
        }
    }
</script>