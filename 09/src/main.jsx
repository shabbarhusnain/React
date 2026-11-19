import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AddPost,AllPost,EditPost,Home,Login,Signup,MyPosts,Post} from './Pages/index'
import {Protection} from './components'
const routes = createBrowserRouter([
  {path :"/",
  element:<App/>,
  children:[
              {path:"/",
                element:<Home/>
              },
              {path:'/login',
                element :(
                  <Protection authentication={false} >
                    <Login/>
                  </Protection>)},
              {path:'/Signup',
                element :(
                  <Protection authentication={false} >
                    <Signup/>
                  </Protection>)},
              {path:'/add-post',
                element :(
                  <Protection authentication >
                    <AddPost/>
                  </Protection>)},
              {path:'/all-post',
                element :(
                  <Protection authentication >
                    <AllPost/>
                  </Protection>)}, 
              {path:'/my-post/',
                element :(
                  <Protection authentication >
                    <MyPosts/>
                  </Protection>)},

              {path:'/edit-post/:slug',
                element :(
                  <Protection authentication >
                    <EditPost/>
                  </Protection>)}, 

              {path:'/post/:slug',
                element :(
                  <Protection authentication >
                    <Post/>
                  </Protection>)},  

            ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
  </StrictMode>
  
)
