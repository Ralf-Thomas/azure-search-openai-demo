import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

import evidenlogowhite from "../../assets/EvidenLogo.png";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link
                        to="https://atos365.sharepoint.com/sites/600003960/SitePages/OneCloudGPT---Compliancy-Officer-bot.aspx"
                        className={styles.headerTitleContainer}
                    >
                        <img
                            src={evidenlogowhite}
                            alt="Eviden logo"
                            aria-label="Link to OneCloud SharePoint for help"
                            width="95px"
                            height="35px"
                            className={styles.evidenLogo}
                        />

                        <h3 className={styles.headerTitle}>OneCloudGPT-4</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat &nbsp;
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="https://atos365.sharepoint.com/sites/600003960/SitePages/OneCloudGPT---Compliancy-Officer-bot.aspx"
                                    className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                                >
                                    &nbsp; Help?
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI GPT-4 + Cognitive Search</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
