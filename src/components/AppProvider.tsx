'use client'
import React from "react"
import { ThemeProvider } from "./ThemeProvider"
import classNames from "classnames"
import { usePathname } from "next/navigation"
import { Focus } from "lucide-react"

type Props = {
    children: React.ReactNode
}

const AppProvider = ({ children }: Props) => {

    const [zenMode, setZenMode] = React.useState(false);
    const path = usePathname();
    const isMainPage = path === '/'


    const toggleZenMode = () => {
        setZenMode(z => !z)
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
        >
            <div id="app" className={classNames({
                'zen-mode': zenMode
            })}>
                <header>
                    <div id="breadcrumb">
                        <a id="avatar" href="https://amirhosseinalibakhshi.com" aria-label="Amirhossein's Website">
                            <img src="https://avatars.githubusercontent.com/u/44297246?s=96&v=4" alt="Amirhossein's Profile Picture" />
                        </a>
                        {!isMainPage && (
                            <>
                                <span>/</span>
                                <a href="/">Blog</a>
                            </>
                        )}
                    </div>
                    {!isMainPage && (
                        <button id='zen-button' aria-label="this button will hide some elements in the screen and only the main content will be visible. you can ignore this button in case you are using a screen reader" onClick={toggleZenMode}>
                            <span id="zen-button-text">Zen Mode</span>
                            <Focus id="zen-button-icon" />
                        </button>
                    )}
                    {/* <DarkModeToggle /> */}
                </header>
                <main>
                    {children}
                </main>

                <footer className="text-center">
                    <small>© 2024 Amirhossein Alibakhshi. All rights reserved.</small>
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default AppProvider