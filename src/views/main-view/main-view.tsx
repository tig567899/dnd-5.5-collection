import React, { useCallback, useState } from "react";
import { SidebarButton } from "@dnd/sidebar/sidebar-button";
import { NavigationSidebar } from "@dnd/sidebar/navigation-sidebar";

import styles from '@dnd/main-view/main-view.module.css';


enum PrimaryViewState {
    MAIN,
    CLASS,
}

export const MainView = () => {
    const [currentPrimaryView, setCurrentPrimaryView] = useState<PrimaryViewState>(PrimaryViewState.MAIN);

    const renderPrimaryView = useCallback(() => {
        switch (currentPrimaryView) {
            case PrimaryViewState.MAIN:
                return <div>Main view here</div>
            case PrimaryViewState.CLASS:
                return null;
        }
    }, [currentPrimaryView]);

    return <div className={styles.main}>
        <NavigationSidebar />
        {renderPrimaryView()}
    </div>;
}