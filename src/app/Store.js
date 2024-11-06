import { configureStore } from '@reduxjs/toolkit'
import getallLocation from './features/getAllLocationSlice'
import statusDetails from './features/statusDetails'

export default configureStore({
  reducer: {
    statusLocs:getallLocation,
    statusdetails:statusDetails
  }
})