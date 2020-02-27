import {
  action,
  computed,
  observable,
} from 'mobx'

export default class SomeStore {
  @observable someVal = undefined
  @observable user = undefined
  @observable errors = {
    field1: '',
    field2: '',
  }

  constructor(data) {
    // Do something with seed data if necessary
  }

  @action
  setProperty(k, v) {
    this[k] = v
  }

  @action
  setError(k, v) {
    this.errors[k] = v
  }

  @action
  lynxInit = () => {
    window.addEventListener("lynxMobileLoaded", async () => {
      // lynx is on the window and ready!
      try {
          this.user = await window.lynxMobile.requestSetAccountName()
      } catch (err) {
          console.log('lynx error', err)
      }
    })
  }

  @computed
  get someComputedValue() {
    return `${this.someVal} is now changed!`
  }
}
