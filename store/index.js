import {
  useLocalStore,
  useStaticRendering
} from 'mobx-react'
import {
  createContext,
  useContext
} from 'react'

// Stores
import AccountStore from './accountStore'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

let store = null

const defaultData = {
  someStore: {},
}

export const initStore = (data = defaultData) => {

  if (isServer) {
    // Server stuff
    store = {
      accountStore: new AccountStore(data.accountStore),
    }
  } else if (!store) {
    // Client stuff
    store = {
      accountStore: new AccountStore(data.accountStore),
    }
  }

  // Otherwise we don't need to re-initialize the store
  return store
}

const storeContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const s = useLocalStore(initStore)
  return <storeContext.Provider value={s}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const s = useContext(storeContext)
  if (!s) {
    // this is especially useful in TypeScript so you don't need to
    // be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
