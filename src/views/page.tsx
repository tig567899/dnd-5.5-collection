import React from 'react';

import { MainView } from '@dnd/main-view/main-view';
import { Header } from '@dnd/header/header';

import styles from '@dnd/page.module.css';

export const ApplicationPage = () => {

    return <div className={styles.page}>
        <Header />
        <MainView />
    </div>
}