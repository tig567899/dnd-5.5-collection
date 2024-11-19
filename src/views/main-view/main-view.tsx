import React, { useCallback, useState } from 'react';
import { NavigationSidebar } from '@dnd/sidebar/navigation-sidebar';

import styles from '@dnd/main-view/main-view.module.css';
import { CharacterClass, ClassView } from '@dnd/class-view/class-view';

export enum PrimaryViewType {
    MAIN,
    CLASS,
}

interface PrimaryViewData {
    viewState: PrimaryViewType;
    data?: {
        id: CharacterClass; // TODO: Add more later
    };
}

export const MainView = () => {
    const [currentPrimaryView, setCurrentPrimaryView] =
        useState<PrimaryViewData>({
            viewState: PrimaryViewType.CLASS,
            data: {
                id: CharacterClass.BARD,
            }
        });

    const renderPrimaryView = useCallback(() => {
        switch (currentPrimaryView.viewState) {
            case PrimaryViewType.MAIN:
                return <div>Main view here</div>;
            case PrimaryViewType.CLASS:
                return (
                    <ClassView referencedClass={currentPrimaryView?.data?.id} />
                );
        }
    }, [currentPrimaryView]);

    const onSwitchPrimaryView = useCallback(
        (primaryView: PrimaryViewType, data: any) => {
            setCurrentPrimaryView({ viewState: primaryView, data });
        },
        []
    );

    return (
        <div className={styles.main}>
            <NavigationSidebar />
            {renderPrimaryView()}
        </div>
    );
};
