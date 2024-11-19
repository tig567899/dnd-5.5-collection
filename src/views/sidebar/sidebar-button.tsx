import React from 'react';
import classNames from 'classnames';
import chevronRight from '@icons/chevron-right.svg';
import chevronLeft from '@icons/chevron-left.svg';
import styles from '@dnd/sidebar/navigation-sidebar.module.css';

export interface SidebarButtonProps {
    onClick: () => void;
    sidebarShown: boolean;
}

export const SidebarButton = ({
    onClick,
    sidebarShown,
}: SidebarButtonProps) => {
    return (
        <button
            className={classNames(styles.toggle_button, {
                [styles.sidebar_shown]: sidebarShown,
            })}
            onClick={onClick}
        >
            <img src={sidebarShown ? chevronLeft : chevronRight} alt={sidebarShown ? 'collapse' : 'expand'}></img>
        </button>
    );
};
