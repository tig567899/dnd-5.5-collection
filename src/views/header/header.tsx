import React from "react";

import styles from '@dnd/header/header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                Tiger's D&D 5.5e Reference Page
            </div>
            <div>
                Welcome to D&D! This is a reference page under construction for the 5.5th edition of Dungeons and Dragons.
            </div>
            <div>
                For the 5th edition reference page, please visit <a href='https://tigerkong.me/dnd'>this website</a> instead.
            </div>
        </div >
    );
}