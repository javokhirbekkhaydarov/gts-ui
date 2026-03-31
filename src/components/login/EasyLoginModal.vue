<script setup lang="ts">
import { catcher } from '@/utils/catcher'
import { reactive, ref } from 'vue'
import { useFetch } from '@/composables/useFetch'
import EasyModal from '@/components/modal/EasyModal.vue'
import EasyInput from '@/components/input/EasyInput.vue'
import EasyButton from '@/components/button/EasyButton.vue'
import { IResponse, ISignInResponse } from '@/types'

const { post } = useFetch()

const open = ref(true)
const loading = ref(false)
const form = reactive({
  email: '',
  password: '',
})

const login = catcher(
  async () => {
    loading.value = true
    const { data } = await post<IResponse<ISignInResponse>>('/v1/auth/signin/', form)
    localStorage.setItem('uid', data.user.uid)
    localStorage.setItem('userType', data.user.user_type)
    localStorage.setItem('apis', JSON.stringify(data.user.apis))
    loading.value = false
    window.location.reload()
  },
  () => {
    loading.value = false
  }
)

</script>

<template>
  <EasyModal :hideClose="false" maxWidth="500px" v-model="open" noScroll title="Авторизация" class="easy-login">
    <EasyInput v-model="form.email" label="Логин" />
    <EasyInput v-model="form.password" label="Пароль" type="password" @keydown.enter="login" />

    <EasyButton
      label="Войти"
      :disabled="!form.email || !form.password"
      @click="login"
      :loading="loading"
    />
  </EasyModal>
</template>

<style lang="scss">
.easy-login {
  .easy-input {
    margin-top: 20px;
  }
  .easy-button {
    margin-top: 30px;
    width: 100%;
  }
}
</style>
