import { LevelData } from '@dnd/class-view/types';
import React, { useCallback, useMemo, useState } from 'react';
import chevronRight from '@icons/chevron-right.svg';

import styles from '@dnd/class-view/class-dropdown.module.css';
import classNames from 'classnames';

interface ClassDropdownBlockProps {
    dropdownInfo: LevelData;
}

export const ClassDropdownBlock = ({
    dropdownInfo,
}: ClassDropdownBlockProps) => {
    const {
        level,
        proficiency,
        abilitiesGained,
        rageDamageString,
        weaponMasteryCount,
        secondaryResourceCount,
        secondaryResourceLabel,
        cantrips,
        preparedSpells,
        spellSlots,
    } = dropdownInfo;
    const [collapsed, setCollapsed] = useState(true);

    const noAbilities = abilitiesGained.length === 0;

    const formatedAbilityTitles = useMemo(() => {
        if (noAbilities) {
            return '—';
        }
        let abilityString = '';
        abilitiesGained.forEach((ability) => {
            abilityString += `${ability.title}, `;
        });

        return abilityString.slice(0, -2);
    }, [abilitiesGained]);

    const onClickHandler = useCallback(() => {
        if (noAbilities) {
            return;
        }
        setCollapsed(!collapsed);
    }, [collapsed]);

    return (
        <div className={styles.container}>
            <div className={styles.dropdown_parent} onClick={onClickHandler}>
                <div className={styles.left_block}>
                    <img
                        className={classNames(styles.expand_indicator, {
                            [styles.expand_indicator_collapsed]: !collapsed,
                            [styles.dropdown_invisible]: noAbilities,
                        })}
                        src={chevronRight}
                        alt={collapsed ? 'expand' : 'collapse'}
                    />

                    <div className={styles.level_block}>
                        <div
                            className={styles.level_label}
                        >{`Level ${level}`}</div>
                        <div className={styles.data_block_horizontal}>
                            <span
                                className={styles.data_block_header_horizontal}
                            >
                                Proficiency Bonus: {proficiency}
                            </span>
                        </div>
                    </div>
                    {collapsed && (
                        <div className={styles.data_block_horizontal}>
                            <i>{formatedAbilityTitles}</i>
                        </div>
                    )}
                </div>
                <div className={styles.number_data}>
                    <div className={styles.data_block}>
                        <div className={styles.data_block_header}>
                            {secondaryResourceLabel}
                        </div>
                        {secondaryResourceCount}
                    </div>

                    {!!cantrips && (
                        <div className={styles.data_block}>
                            <div className={styles.data_block_header}>
                                Cantrips
                            </div>
                            {cantrips}
                        </div>
                    )}
                    {!!preparedSpells && (
                        <div className={styles.data_block}>
                            <div className={styles.data_block_header}>
                                Prepared Spells
                            </div>
                            {preparedSpells}
                        </div>
                    )}
                    {!!rageDamageString && (
                        <div className={styles.data_block}>
                            <div className={styles.data_block_header}>
                                Rage Damage
                            </div>
                            {rageDamageString}
                        </div>
                    )}
                    {!!weaponMasteryCount && (
                        <div className={styles.data_block}>
                            <div className={styles.data_block_header}>
                                Weapon Mastery
                            </div>
                            {weaponMasteryCount}
                        </div>
                    )}
                </div>
            </div>
            {!collapsed && (
                <div className={styles.ability_list}>
                    {abilitiesGained.map((ability) => {
                        return (
                            <div>
                                <h2>{ability.title}</h2>
                                {ability.descriptionParagraphs.map((pgh) => (
                                    <p>{pgh}</p>
                                ))}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
