import { getProficiencyBonusStringForLevel } from '@dnd/class-view/class-info/common-class-info';
import { LevelData, Ability, FeatureSource } from '@dnd/class-view/types';

export const getFighterInfoBlockForLevel = (
    level: number
): LevelData | null => {
    const proficiencyBonus = getProficiencyBonusStringForLevel(level);
    const secondWindCount = getSecondWindCountForLevel(level);
    const weaponMasteryCount = getWeaponMasteryCountForLevel(level);
    const abilitiesGained = getFighterAbilities(level);
    if (
        !proficiencyBonus ||
        secondWindCount < 0 ||
        weaponMasteryCount < 0 ||
        !abilitiesGained
    ) {
        return null;
    }
    return {
        level,
        proficiency: proficiencyBonus,
        abilitiesGained,
        secondaryResourceLabel: 'Second Wind',
        secondaryResourceCount: secondWindCount,
        weaponMasteryCount,
    };
};

export const getSecondWindCountForLevel = (level: number): number => {
    switch (true) {
        case level <= 3:
            return 2;
        case level <= 9:
            return 3;
        case level <= 20:
            return 4;
    }
    return -1;
};

export const getWeaponMasteryCountForLevel = (level: number): number => {
    switch (true) {
        case level <= 3:
            return 3;
        case level <= 9:
            return 4;
        case level <= 15:
            return 5;
        case level <= 20:
            return 6;
    }
    return -1;
};

export const getFighterAbilities = (level: number): Ability[] | null => {
    switch (level) {
        case 1:
            return [
                FighterInfoSet['Fighting Style'],
                FighterInfoSet['Second Wind'],
                FighterInfoSet['Weapon Mastery'],
            ];
        case 2:
            return [
                FighterInfoSet['Tactical Mind'],
                FighterInfoSet['Action Surge'],
            ];
        case 3: {
            return [FighterInfoSet['Fighter Subclass']];
        }
        case 4:
            return [FighterInfoSet['Ability Score Improvement-4']];
        case 5:
            return [
                FighterInfoSet['Extra Attack'],
                FighterInfoSet['Tactical Shift'],
            ];
        case 6:
            return [FighterInfoSet['Ability Score Improvement']];
        case 7:
            return [FighterInfoSet['Fighter Subclass']];
        case 8:
            return [FighterInfoSet['Ability Score Improvement']];
        case 9:
            return [
                FighterInfoSet['Indomitable'],
                FighterInfoSet['Tactical Master'],
            ];
        case 10:
            return [FighterInfoSet['Subclass Feature']];
        case 11:
            return [FighterInfoSet['Two Extra Attacks']];
        case 12:
            return [FighterInfoSet['Ability Score Improvement']];
        case 13:
            return [
                FighterInfoSet['Indomitable'],
                FighterInfoSet['Studied Attacks'],
            ];
        case 14: {
            return [FighterInfoSet['Ability Score Improvement']];
        }
        case 15:
            return [FighterInfoSet['Subclass Feature']];
        case 16:
            return [FighterInfoSet['Ability Score Improvement']];
        case 17:
            return [
                FighterInfoSet['Action Surge'],
                FighterInfoSet['Indomitable'],
            ];
        case 18:
            return [FighterInfoSet['Subclass Feature']];
        case 19:
            return [FighterInfoSet['Epic Boon']];
        case 20:
            return [FighterInfoSet['Three Extra Attacks']];
    }
    return null;
};

const FighterInfoSet: { [name: string]: Ability } = {
    'Fighting Style': {
        title: 'Fighting Style',
        descriptionParagraphs: [
            'You have honed your martial prowess and gain a Fighting Style feat of your choice. Defense is recommended.',
            'Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.',
        ],
        source: FeatureSource.CLASS,
    },
    'Second Wind': {
        title: 'Second Wind',
        descriptionParagraphs: [
            'You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.',
            'You can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.',
            'When you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table.',
        ],
        source: FeatureSource.CLASS,
    },
    'Weapon Mastery': {
        title: 'Weapon Mastery',
        descriptionParagraphs: [
            'Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons of your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.',
            'When you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table.',
        ],
        source: FeatureSource.CLASS,
    },
    'Action Surge': {
        title: 'Action Surge',
        descriptionParagraphs: [
            'You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.',
            "Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn.",
        ],
        source: FeatureSource.CLASS,
    },
    'Tactical Mind': {
        title: 'Tactical Mind',
        descriptionParagraphs: [
            "You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.",
        ],
        source: FeatureSource.CLASS,
    },
    'Fighter Subclass': {
        title: 'Fighter Subclass',
        descriptionParagraphs: [
            "You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Fighter levels. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower.",
        ],
        source: FeatureSource.MISSING_SUBCLASS,
    },
    'Ability Score Improvement-4': {
        title: 'Ability Score Improvement',
        descriptionParagraphs: [
            'You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16.',
        ],
        source: FeatureSource.CLASS,
    },
    'Ability Score Improvement': {
        title: 'Ability Score Improvement',
        descriptionParagraphs: [
            'You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.',
        ],
        source: FeatureSource.CLASS,
    },
    'Extra Attack': {
        title: 'Extra Attack',
        descriptionParagraphs: [
            'You can attack twice instead of once whenever you take the Attack action on your turn.',
        ],
        source: FeatureSource.CLASS,
    },
    'Tactical Shift': {
        title: 'Tactical Shift',
        descriptionParagraphs: [
            'Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks.',
        ],
        source: FeatureSource.CLASS,
    },
    'Subclass Feature': {
        title: 'Subclass Feature',
        descriptionParagraphs: [
            'You gain a feature from your Fighter subclass.',
        ],
        source: FeatureSource.MISSING_SUBCLASS,
    },
    Indomitable: {
        title: 'Indomitable',
        descriptionParagraphs: [
            "If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.",
            'You can use this feature twice before a Long Rest starting at level 13 and three times before a Long Rest starting at level 17.',
        ],
        source: FeatureSource.CLASS,
    },
    'Tactical Master': {
        title: 'Tactical Master',
        descriptionParagraphs: [
            'When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap, or Slow property for that attack.',
        ],
        source: FeatureSource.CLASS,
    },
    'Two Extra Attacks': {
        title: 'Two Extra Attacks',
        descriptionParagraphs: [
            'You can attack three times instead of once whenever you take the Attack action on your turn.',
        ],
        source: FeatureSource.CLASS,
    },
    'Studied Attacks': {
        title: 'Studied Attacks',
        descriptionParagraphs: [
            'You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn.',
        ],
        source: FeatureSource.CLASS,
    },
    'Epic Boon': {
        title: 'Epic Boon',
        descriptionParagraphs: [
            'You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Combat Prowess is recommended.',
        ],
        source: FeatureSource.CLASS,
    },
    'Three Extra Attacks': {
        title: 'Three Extra Attacks',
        descriptionParagraphs: [
            'You can attack four times instead of once whenever you take the Attack action on your turn.',
        ],
        source: FeatureSource.CLASS,
    },
};
