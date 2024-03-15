import { Route, Routes } from "react-router-dom";
import { ResumePage } from "./pages/ResumePage";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { Sale } from "./pages/Sale";
import { Order } from "./pages/Order";

export function Router(){
    return(

            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/" element={<ResumePage/>}/>
                    <Route path="/sale" element={<Sale/>}/>
                    <Route path="/order" element={<Order/>}/>
                </Route>
            </Routes>
    );
}