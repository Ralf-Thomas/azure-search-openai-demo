import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import question from "../../assets/Question.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

import evidenlogowhite from "../../assets/EvidenLogo.png";
import { useMenuSplitGroupStyles_unstable } from "@fluentui/react-components";

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
                            width="90px"
                            height="32px"
                            className={styles.evidenLogo}
                        />
                        <h3 className={styles.headerTitle}>OneCloudGPT-4</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink
                                    to="https://atos365.sharepoint.com/sites/600003960/SitePages/OneCloudGPT---Compliancy-Officer-bot.aspx"
                                    className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                                >
                                    Help?
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Link to="https://github.com/Azure-Samples/azure-search-openai-demo" className={styles.headerRightText}>
                        <h4 className={styles.headerRightText}> Azure OpenAI GPT-4 + Cognitive Search</h4>
                    </Link>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
