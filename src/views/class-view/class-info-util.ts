import { CharacterClass } from '@dnd/class-view/class-view';
import { getBarbarianInfoBlockForLevel } from '@dnd/class-view/class-info/barbarian-info';
import { LevelData } from '@dnd/class-view/types';
import { getFighterInfoBlockForLevel } from '@dnd/class-view/class-info/fighter-info';
import { getBardInfoBlockForLevel } from '@dnd/class-view/class-info/bard-info';

export const getClassInfoBlockForLevel = (
    chararcterClass: CharacterClass,
    level: number
): LevelData | null => {
    if (level > 20 || level < 0) {
        return null;
    }
    switch (chararcterClass) {
        case CharacterClass.BARBARIAN:
            return getBarbarianInfoBlockForLevel(level);
        case CharacterClass.BARD:
            return getBardInfoBlockForLevel(level);
        case CharacterClass.CLERIC:
        case CharacterClass.DRUID:
        case CharacterClass.FIGHTER:
            return getFighterInfoBlockForLevel(level);
        case CharacterClass.MONK:
        case CharacterClass.PALADIN:
        case CharacterClass.RANGER:
        case CharacterClass.ROGUE:
        case CharacterClass.SORCERER:
        case CharacterClass.WARLOCK:
        case CharacterClass.WIZARD:
    }
    return null;
};
