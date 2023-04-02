import React from "react";
import styles from "./Balance.module.css";
import '../../resetCSS.css';

export const Balance = () => {
    const logo = <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24" /><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" /></g></svg>
    const balance =
    {
        value: 921.48
    }

    const formattedBalance = balance.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <>
            <main className={styles.contentWrapper}>
                <div className={styles.balance}>
                    <p>My balance</p>
                    <p>{formattedBalance}</p>
                </div>
                <span> {logo} </span>
            </main>
        </>
    );
};
