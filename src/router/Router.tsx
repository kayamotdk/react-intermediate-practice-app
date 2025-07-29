import { Route, Switch } from "react-router-dom"
import { Login } from "../components/pages/Login"
import { FC, memo } from "react"
import { homeRoutes } from "./HomeRoutes"
import { HeaderLayout } from "../components/templates/Header_layout"

export const Router: FC = memo(()=>{
  return(
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home" render={({match: { url }}) =>(
        <Switch>
          {homeRoutes.map((route)=>(
            <Route 
              key={route.path} 
              exact={route.exact} 
              path={`${url}${route.path}`}
            >
              <HeaderLayout>{route.children}</HeaderLayout>
            </Route>
          ))}
        </Switch>
      )} />
    </Switch>
  )
})