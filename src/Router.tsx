import { Route, Routes } from "react-router-dom";
import { ResumoPage } from "./pages/ResumoPage";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { Sale } from "./pages/Sale";
import { Order } from "./pages/Order";

export function Router(){
    return(

            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/" element={<ResumoPage/>}/>
                    <Route path="/sale" element={<Sale/>}/>
                    <Route path="/order" element={<Order/>}/>
                </Route>
            </Routes>
    );
}