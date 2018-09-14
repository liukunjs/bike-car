import React,{ Component } from "react"
import { Switch , Route ,HashRouter} from "react-router-dom"
import App from "./App"
import Admin from "./admin"
import Login from "./pages/login/login"
import Err from "./pages/err/err"
import Home from "./pages/home/home"
import Buttons from './pages/ui/button'
import Loading from './pages/ui/loading'
import Noticafition from './pages/ui/notification'
import Modals from "./pages/ui/modals"
import Message from "./pages/ui/message"
import  Tab from "./pages/ui/tabs"
import  Gallery from "./pages/ui/gallery"
import BaseTable from "./pages/table/baseTable"
import HeightTable from "./pages/table/hightTable"
import City from "./pages/city/city"
import Order from "./pages/order/order"
import BaseEcharts from "./pages/Echart/baseChart"
console.log(City)
export default  class Router extends Component {
     render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/" 
                        render={() => 
                             <Admin>
                                <Switch>
                                     <Route path="/home" component={Home}></Route>
                                     <Route path="/ui/buttons" component={Buttons}></Route>
                                     <Route path="/ui/modals" component={Modals}></Route>
                                     <Route path="/ui/loadings" component={Loading}></Route>
                                     <Route path="/ui/notification" component={Noticafition} />
                                     <Route path="/ui/messages" component={Message} />
                                     <Route path="/ui/tabs" component={Tab} />
                                     <Route path="/ui/gallery" component={Gallery} />
                                     <Route path="/table/basic" component={BaseTable}></Route>
                                     <Route path="/table/high" component={HeightTable}></Route>
                                     <Route path="/city" component={ City }></Route>
                                     <Route path="/order" component={Order}></Route>
                                     <Route path="/user" component={ BaseEcharts }></Route>
                                     <Route component={ Err }></Route>
                                </Switch>
                            </Admin>
                        }>
                        </Route>
                    </Switch>
                </App>
            </HashRouter>
            )
     }
}