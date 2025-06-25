"use client";

import classNames from "classnames";
import { Focus } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { ThemeProvider } from "./ThemeProvider.tsx";

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [zenMode, setZenMode] = React.useState(false);
  const path = usePathname();
  const isMainPage = !path.startsWith("/post");

  const toggleZenMode = () => {
    setZenMode(z => !z);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ryxjupgqcu");`;
      document.head.appendChild(script);
    }
  }, []);

  const renderMobileHeader = () => (
    <header id="mobile-header">
      <div id="breadcrumb">
        <a
          id="avatar"
          href="https://amirhosseinalibakhshi.com"
          aria-label="Amirhossein's Website"
        >
          <img
            src="https://avatars.githubusercontent.com/u/44297246?s=96&v=4"
            alt="Amirhossein's Profile Picture"
          />
        </a>
        {!isMainPage && (
          <>
            <span>/</span>
            <a href="/">Blog</a>
          </>
        )}
      </div>
      {!isMainPage && (
        <div className="row">
          {/* <button
            id="toc-button"
            aria-label="click to show the table of contents"
          >
            <TableOfContents id="toc-button-icon" />
          </button> */}
          <button
            id="zen-button"
            aria-label="this button will hide some elements in the screen and only the main content will be visible. you can ignore this button in case you are using a screen reader"
            onClick={toggleZenMode}
          >
            <span id="zen-button-text">Zen Mode</span>
            <Focus id="zen-button-icon" />
          </button>
        </div>
      )}
    </header>
  );

  const renderDesktopHeader = () => (
    <header id="desktop-header">
      <div id="breadcrumb">
        <a
          id="avatar"
          href="https://amirhosseinalibakhshi.com"
          aria-label="Amirhossein's Website"
        >
          <img
            src="https://avatars.githubusercontent.com/u/44297246?s=96&v=4"
            alt="Amirhossein's Profile Picture"
          />
        </a>
      </div>
      {!isMainPage && (
        <button
          id="zen-button"
          aria-label="this button will hide some elements in the screen and only the main content will be visible. you can ignore this button in case you are using a screen reader"
          onClick={toggleZenMode}
        >
          <Focus id="zen-button-icon" />
          <span id="zen-button-text">Toggle Zen Mode</span>
        </button>
      )}
    </header>
  );

  const mainSectionId = "main-content";

  return (
    <>
      <a
        className="skip-link"
        href={`#${mainSectionId}`}
      >
        skip to the main content
      </a>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <div
          id="app"
          className={classNames({
            "zen-mode": zenMode,
          })}
        >
          {renderMobileHeader()}
          {renderDesktopHeader()}
          <main id={mainSectionId}>{children}</main>

          <footer className="text-center">
            <small>
              © {new Date().getFullYear()} Amirhossein Alibakhshi. All rights
              reserved.
            </small>
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;
