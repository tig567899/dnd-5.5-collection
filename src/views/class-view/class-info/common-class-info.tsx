import { CasterType, SpellSlots } from '@dnd/class-view/types';

export const getProficiencyBonusStringForLevel = (
    level: number
): string | null => {
    switch (true) {
        case level <= 4:
            return '+2';
        case level <= 8:
            return '+3';
        case level <= 12:
            return '+4';
        case level <= 16:
            return '+5';
        case level <= 20:
            return '+6';
    }
    return null;
};

const spellSlotsArray: SpellSlots[] = [
    [2, 0, 0, 0, 0, 0, 0, 0, 0], // Level 1
    [3, 0, 0, 0, 0, 0, 0, 0, 0], // Level 2
    [4, 2, 0, 0, 0, 0, 0, 0, 0], // Level 3
    [4, 3, 0, 0, 0, 0, 0, 0, 0], // Level 4
    [4, 3, 2, 0, 0, 0, 0, 0, 0], // Level 5
    [4, 3, 3, 0, 0, 0, 0, 0, 0], // Level 6
    [4, 3, 3, 1, 0, 0, 0, 0, 0], // Level 7
    [4, 3, 3, 2, 0, 0, 0, 0, 0], // Level 8
    [4, 3, 3, 3, 1, 0, 0, 0, 0], // Level 9
    [4, 3, 3, 3, 2, 0, 0, 0, 0], // Level 10
    [4, 3, 3, 3, 2, 1, 0, 0, 0], // Level 11
    [4, 3, 3, 3, 2, 1, 0, 0, 0], // Level 12
    [4, 3, 3, 3, 2, 1, 1, 0, 0], // Level 13
    [4, 3, 3, 3, 2, 1, 1, 0, 0], // Level 14
    [4, 3, 3, 3, 2, 1, 1, 1, 0], // Level 15
    [4, 3, 3, 3, 2, 1, 1, 1, 0], // Level 16
    [4, 3, 3, 3, 2, 1, 1, 1, 1], // Level 17
    [4, 3, 3, 3, 2, 1, 1, 1, 1], // Level 18
    [4, 3, 3, 3, 2, 2, 1, 1, 1], // Level 19
    [4, 3, 3, 3, 2, 2, 2, 1, 1], // Level 20
];

export const getSpellSlotCalculationForLevel = (
    level: number,
    casterType: CasterType
): SpellSlots | null => {
    if (level > 20 || level < 1) return null;
    let effectiveCasterLevel = level;
    switch (casterType) {
        case CasterType.FULL:
            break;
        case CasterType.HALF:
            effectiveCasterLevel = level; // 2;
            break;
        case CasterType.THIRD:
            effectiveCasterLevel = level; // 3;
            break;
    }
    return spellSlotsArray[effectiveCasterLevel];
};
