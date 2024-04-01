import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('store', () => {
  const account = reactive({ id: '' })

  const setAccount = data => {
    account.id = data
    console.log('account.id-->', data)
  }

  return { account, setAccount }
})
