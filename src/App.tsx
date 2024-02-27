import {
    Admin,
    Resource,
    defaultLightTheme,
    CustomRoutes,
    defaultDarkTheme,
} from 'react-admin';
import { PcList, PcCreate, PcEdit } from "./DataHandling/PC";
import { LaptopList, LaptopCreate, LaptopEdit } from "./DataHandling/Laptop";
import { PrintersList, PrintersCreate, PrintersEdit } from "./DataHandling/Printers";

import { LoginPage, SetPasswordPage, ForgotPasswordPage } from 'ra-supabase';
import authProvider from './supabase/authProvider';
import dataProvider from './supabase/dataProvider';
import { BrowserRouter, Route } from 'react-router-dom';


export const App = () => (
    <BrowserRouter>
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            loginPage={LoginPage}
            lightTheme={defaultLightTheme}
            darkTheme={defaultDarkTheme}
        >
            <CustomRoutes noLayout>
                <Route
                    path={SetPasswordPage.path}
                    element={<SetPasswordPage />}
                />
                <Route
                    path={ForgotPasswordPage.path}
                    element={<ForgotPasswordPage />}
                />
            </CustomRoutes>
            <Resource
                name="pc"
                list={PcList}
                create={PcCreate}
                edit={PcEdit}
             />
             <Resource
                name="laptop"
                list={LaptopList}
                create={LaptopCreate}
                edit={LaptopEdit}
             />
             <Resource
                name="printers"
                list={PrintersList}
                create={PrintersCreate}
                edit={PrintersEdit}
             />
        </Admin>
    </BrowserRouter>
);

export default App;
