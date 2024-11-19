import React from 'react';
import { getProficiencyBonusStringForLevel } from '@dnd/class-view/class-info/common-class-info';
import { LevelData, Ability, FeatureSource } from '@dnd/class-view/types';

export const getBarbarianInfoBlockForLevel = (
    level: number
): LevelData | null => {
    const proficiencyBonus = getProficiencyBonusStringForLevel(level);
    const rageCount = getRageCountForLevel(level);
    const weaponMasteryCount = getWeaponMasteryCountForLevel(level);
    const abilitiesGained = getBarbarianAbilities(level);
    const rageDamageString = getRageDamageForLevel(level);
    if (
        !proficiencyBonus ||
        rageCount < 0 ||
        weaponMasteryCount < 0 ||
        !abilitiesGained ||
        !rageDamageString
    ) {
        return null;
    }
    return {
        level,
        proficiency: proficiencyBonus,
        abilitiesGained,
        secondaryResourceLabel: 'Rages',
        secondaryResourceCount: rageCount,
        weaponMasteryCount,
        rageDamageString,
    };
};

export const getRageCountForLevel = (level: number): number => {
    switch (true) {
        case level <= 2:
            return 2;
        case level <= 5:
            return 3;
        case level <= 11:
            return 4;
        case level <= 16:
            return 5;
        case level <= 20:
            return 6;
    }
    return -1;
};

export const getWeaponMasteryCountForLevel = (level: number): number => {
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

export const getRageDamageForLevel = (level: number): string | null => {
    switch (true) {
        case level <= 8:
            return '+2';
        case level <= 15:
            return '+3';
        case level <= 20:
            return '+4';
    }
    return null;
};

export const getBarbarianAbilities = (level: number): Ability[] | null => {
    switch (level) {
        case 1:
            return [
                BarbarianInfoSet.Rage,
                BarbarianInfoSet['Unarmored Defense'],
                BarbarianInfoSet['Weapon Mastery'],
            ];
        case 2:
            return [
                BarbarianInfoSet['Danger Sense'],
                BarbarianInfoSet['Reckless Attack'],
            ];
        case 3: {
            return [
                BarbarianInfoSet['Barbarian Subclass'],
                BarbarianInfoSet['Primal Knowledge'],
            ];
        }
        case 4:
            return [BarbarianInfoSet['Ability Score Improvement-4']];
        case 5:
            return [
                BarbarianInfoSet['Extra Attack'],
                BarbarianInfoSet['Fast Movement'],
            ];
        case 6:
            return [BarbarianInfoSet['Subclass Feature']];
        case 7:
            return [
                BarbarianInfoSet['Feral Instinct'],
                BarbarianInfoSet['Instinctive Pounce'],
            ];
        case 8:
            return [BarbarianInfoSet['Ability Score Improvement']];
        case 9:
            return [BarbarianInfoSet['Brutal Strike']];
        case 10:
            return [BarbarianInfoSet['Subclass Feature']];
        case 11:
            return [BarbarianInfoSet['Relentless Rage']];
        case 12:
            return [BarbarianInfoSet['Ability Score Improvement']];
        case 13:
            return [BarbarianInfoSet['Improved Brutal Strike-13']];
        case 14: {
            return [BarbarianInfoSet['Subclass Feature']];
        }
        case 15:
            return [BarbarianInfoSet['Persistent Rage']];
        case 16:
            return [BarbarianInfoSet['Ability Score Improvement']];
        case 17:
            return [BarbarianInfoSet['Improved Brutal Strike-17']];
        case 18:
            return [BarbarianInfoSet['Indomitable Might']];
        case 19:
            return [BarbarianInfoSet['Epic Boon']];
        case 20:
            return [BarbarianInfoSet['Primal Champion']];
    }
    return null;
};

export const BarbarianInfoSet: { [name: string]: Ability } = {
    Rage: {
        title: 'Rage',
        descriptionParagraphs: [
            "You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience. You can enter it as a Bonus Action if you aren't wearing Heavy armor.",
            'You can enter your Rage the number of times shown for your Barbarian level in the Rages column of the Barbarian Features table. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.',
            'While active, your Rage follows the rules below.',
            <h3>Damage Resistance</h3>,
            'You have Resistance to Bludgeoning, Piercing, and Slashing damage.',
            <h3>Rage Damage</h3>,
            'When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus to the damage that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian Features table.',
            <h3>Strength Advantage</h3>,
            'You have Advantage on Strength checks and Strength saving throws.',
            <h3>No Concentration or Spells</h3>,
            "You can't maintain Concentration, and you can't cast spells.",
            <h3>Duration</h3>,
            'The Rage lasts until the end of your next turn, and it ends early if you don Heavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the Rage for another round by doing one of the following:',
            <ul>
                <li>Make an attack roll against an enemy.</li>
                <li>Force an enemy to make a saving throw.</li>
                <li>Take a Bonus Action to extend your Rage.</li>
            </ul>,
            'Each time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10 minutes.',
        ],
        source: FeatureSource.CLASS,
    },
    'Unarmored Defense': {
        title: 'Unarmored Defense',
        descriptionParagraphs: [
            "While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.",
        ],
        source: FeatureSource.CLASS,
    },
    'Weapon Mastery': {
        title: 'Weapon Mastery',
        descriptionParagraphs: [
            'Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons of your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.',
            'When you reach certain Barbarian levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Barbarian Features table.',
        ],
        source: FeatureSource.CLASS,
    },
    'Danger Sense': {
        title: 'Danger Sense',
        descriptionParagraphs: [
            "You gain an uncanny sense of when things aren't as they should be, giving you an edge when you dodge perils. You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.",
        ],
        source: FeatureSource.CLASS,
    },
    'Reckless Attack': {
        title: 'Reckless Attack',
        descriptionParagraphs: [
            'You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time.',
        ],
        source: FeatureSource.CLASS,
    },
    'Barbarian Subclass': {
        title: 'Barbarian Subclass',
        descriptionParagraphs: [
            "You gain a Barbarian subclass of your choice. A subclass is a specialization that grants you features at certain Barbarian levels. For the rest of your career, you gain each of your subclass's features that are of your Barbarian level or lower.",
        ],
        source: FeatureSource.MISSING_SUBCLASS,
    },
    'Primal Knowledge': {
        title: 'Primal Knowledge',
        descriptionParagraphs: [
            'You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1.',
            'In addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you make an ability check using one of the following skills, you can make it as a Strength check even if it normally uses a different ability: Acrobatics, Intimidation, Perception, Stealth, or Survival. When you use this ability, your Strength represents primal power coursing through you, honing your agility, bearing, and senses.',
        ],
        source: FeatureSource.CLASS,
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
            'You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.',
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
    'Fast Movement': {
        title: 'Fast Movement',
        descriptionParagraphs: [
            "Your speed increases by 10 feet while you aren't wearing Heavy armor.",
        ],
        source: FeatureSource.CLASS,
    },
    'Subclass Feature': {
        title: 'Subclass Feature',
        descriptionParagraphs: [
            'You gain a feature from your Barbarian subclass.',
        ],
        source: FeatureSource.MISSING_SUBCLASS,
    },
    'Feral Instinct': {
        title: 'Feral Instinct',
        descriptionParagraphs: [
            'Your instincts are so honed that you have Advantage on Initiative rolls.',
        ],
        source: FeatureSource.CLASS,
    },
    'Instinctive Pounce': {
        title: 'Instinctive Pounce',
        descriptionParagraphs: [
            'As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.',
        ],
        source: FeatureSource.CLASS,
    },
    'Brutal Strike': {
        title: 'Brutal Strike',
        descriptionParagraphs: [
            "If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your turn. The chosen attack roll mustn't have Disadvantage. If the chosen attack roll hits, the target takes an extra 1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of your choice. You have the following effect options.",
            <ul>
                <li>
                    <strong>Forceful Blow</strong>. The target is pushed 15 feet
                    straight away from you. You can then move up to half your
                    Speed straight toward the target without provoking
                    Opportunity Attacks.
                </li>
                <li>
                    <strong>Hamstring Blow</strong>. The target's Speed is
                    reduced by 15 feet until the start of your next turn. A
                    target can be affected by only one Hamstring Blow at a
                    time—the most recent one.
                </li>
            </ul>,
        ],
        source: FeatureSource.CLASS,
    },
    'Relentless Rage': {
        title: 'Relentless Rage',
        descriptionParagraphs: [
            "Your Rage can keep you fighting despite grievous wounds. If you drop to 0 Hit Points while your Rage is active and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, your Hit Points instead change to a number equal to twice your Barbarian level.",
            'Each time you use this feature after the first, the DC increases by 5. When you finish a Short or Long Rest, the DC resets to 10.',
        ],
        source: FeatureSource.CLASS,
    },
    'Improved Brutal Strike-13': {
        title: 'Improved Brutal Strike',
        descriptionParagraphs: [
            'You have honed new ways to attack furiously. The following effects are now among your Brutal Strike options.',
            <ul>
                <li>
                    <strong>Staggering Blow</strong>. The target has
                    Disadvantage on the next saving throw it makes, and it can't
                    make Opportunity Attacks until the start of your next turn.
                </li>
                <li>
                    <strong>Sundering Blow</strong>. Before the start of your
                    next turn, the next attack roll made by another creature
                    against the target gains a +5 bonus to the roll. An attack
                    roll can gain only one Sundering Blow bonus.
                </li>
            </ul>,
        ],
        source: FeatureSource.CLASS,
    },
    'Persistent Rage': {
        title: 'Persistent Rage',
        descriptionParagraphs: [
            "When you roll Initiative, you can regain all expended uses of Rage. After you regain uses of Rage in this way, you can't do so again until you finish a Long Rest.",
            'In addition, your Rage is so fierce that it now lasts for 10 minutes without you needing to do anything to extend it from round to round. Your Rage ends early if you have the Unconscious condition (not just the Incapacitated condition) or don Heavy armor.',
        ],
        source: FeatureSource.CLASS,
    },
    'Improved Brutal Strike-17': {
        title: 'Improved Brutal Strike',
        descriptionParagraphs: [
            'The extra damage of your Brutal Strike increases to 2d10. In addition, you can use two different Brutal Strike effects whenever you use your Brutal Strike feature.',
        ],
        source: FeatureSource.CLASS,
    },
    'Indomitable Might': {
        title: 'Indomitable Might',
        descriptionParagraphs: [
            'If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.',
        ],
        source: FeatureSource.CLASS,
    },
    'Epic Boon': {
        title: 'Epic Boon',
        descriptionParagraphs: [
            'You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Irresistible Offense is recommended.',
        ],
        source: FeatureSource.CLASS,
    },
    'Primal Champion': {
        title: 'Primal Champion',
        descriptionParagraphs: [
            'You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25.',
        ],
        source: FeatureSource.CLASS,
    },
};
