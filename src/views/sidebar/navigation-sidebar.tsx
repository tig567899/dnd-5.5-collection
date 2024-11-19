import React, { useCallback, useState } from 'react';

import { SidebarContainer } from '@dnd/sidebar/sidebar-container';
import { SidebarButton } from '@dnd/sidebar/sidebar-button';

import styles from '@dnd/sidebar/navigation-sidebar.module.css';

export const NavigationSidebar = () => {
    const [sidebarHidden, setSidebarHidden] = useState(true);

    const onSidebarToggle = useCallback(() => {
        setSidebarHidden(!sidebarHidden);
    }, [sidebarHidden]);

    return (
        <div className={styles.parent}>
            {!sidebarHidden && <SidebarContainer />}
            <SidebarButton
                onClick={onSidebarToggle}
                sidebarShown={!sidebarHidden}
            />
        </div>
    );
};
