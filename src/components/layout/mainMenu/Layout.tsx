import React from 'react'
import Navbar from "./NavBar";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
type Props = {
    title?: String,
    icon?: String,
    back?: Boolean,
    homePlus?: Boolean,
    children: React.ReactNode;
}
const Layout = (props: Props) => {
    const mainTitle = props.title ?? 'BTS'
    const mainIcon = props.icon ?? ''
    const btnBack = props.back ?? true
    const btnClose = props.homePlus ?? true
    const children = props.children
    return (
        <main className="bg-gradient-to-r from-orange-dark via-orange-dark to-orange-light ">
            <Navbar icon={mainIcon} title={mainTitle} back={btnBack} close={btnClose}>
            </Navbar>
            <PrimeReactProvider>
                <div className="min-h-screen p-1 text-black bg-white rounded-t-xl">
                    {children}
                </div>
            </PrimeReactProvider>
        </main>
    )
}

export default Layout