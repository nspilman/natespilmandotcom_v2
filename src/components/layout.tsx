/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react";

import Icons from "./icons";
import Link from "next/link";
import Script from "next/script";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <div id="app">
        <Script
          async
          id="google-tag-manager"
          src="https://www.googletagmanager.com/gtag/js?id=UA-136137654-1"
        ></Script>
        <Script id="config-google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-136137654-1');`}
        </Script>
        <header id="header">
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div>X</div>
            </div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/music">Music</Link>
                    </li>
                    <li>
                      <Link href="https://natespilman.tech/media/pdfs/Resume_Aug_2020.pdf">
                        Resume
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="layout-wrapper">{children}</div>
        <footer className="footer">
          <Icons />
        </footer>
      </div>
    </>
  );
};

export default Layout;
