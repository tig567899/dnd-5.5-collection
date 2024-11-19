import { ClassDropdownBlock } from '@dnd/class-view/class-dropdown-block';
import { getClassInfoBlockForLevel } from '@dnd/class-view/class-info-util';
import React from 'react';

import styles from '@dnd/class-view/class-view.module.css';

export enum CharacterClass {
    BARBARIAN,
    BARD,
    CLERIC,
    DRUID,
    FIGHTER,
    MONK,
    PALADIN,
    RANGER,
    ROGUE,
    SORCERER,
    WARLOCK,
    WIZARD,
}

interface ClassViewProps {
    referencedClass?: CharacterClass;
}

export const ClassView = ({ referencedClass }: ClassViewProps) => {
    if (referencedClass === undefined) {
        return null;
    }

    const classLevelingInfo = Array.from({ length: 20 }, (_, index) => index + 1).map((value) => getClassInfoBlockForLevel(referencedClass, value));

    return (
        <div className={styles.container}>
            {classLevelingInfo.filter((info) => !!info).map((info) => <ClassDropdownBlock dropdownInfo={info} />)}
        </div>
    )
};
