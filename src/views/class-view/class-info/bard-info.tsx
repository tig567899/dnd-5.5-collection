import React from 'react';
import {
    getProficiencyBonusStringForLevel,
    getSpellSlotCalculationForLevel,
} from '@dnd/class-view/class-info/common-class-info';
import {
    LevelData,
    Ability,
    FeatureSource,
    CasterType,
} from '@dnd/class-view/types';

export const getBardInfoBlockForLevel = (level: number): LevelData | null => {
    const proficiencyBonus = getProficiencyBonusStringForLevel(level);
    const spellSlots = getSpellSlotCalculationForLevel(level, CasterType.FULL);
    const bardicDie = getBardicDieForLevel(level);
    const cantrips = getCantripsForLevel(level);
    const preparedSpells = getPreparedSpellsForLevel(level);
    const abilitiesGained = getBardAbilities(level);
    if (
        !proficiencyBonus ||
        !spellSlots ||
        !bardicDie ||
        cantrips < 0 ||
        preparedSpells < 0 ||
        !abilitiesGained
    ) {
        return null;
    }
    return {
        level,
        proficiency: proficiencyBonus,
        abilitiesGained,
        secondaryResourceLabel: 'Bardic Die',
        secondaryResourceCount: bardicDie,
        cantrips,
        preparedSpells,
        spellSlots,
    };
};

export const getBardicDieForLevel = (level: number): string | null => {
    switch (true) {
        case level <= 4:
            return 'D6';
        case level <= 9:
            return 'D8';
        case level <= 14:
            return 'D10';
        case level <= 20:
            return 'D12';
    }
    return null;
};

export const getCantripsForLevel = (level: number): number => {
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

export const getPreparedSpellsForLevel = (level: number): number => {
    switch (level) {
        case 1:
            return 4;
        case 2:
            return 5;
        case 3:
            return 6;
        case 4:
            return 7;
        case 5:
            return 9;
        case 6:
            return 10;
        case 7:
            return 11;
        case 8:
            return 12;
        case 9:
            return 14;
        case 10:
            return 15;
        case 11:
            return 16;
        case 12:
            return 16;
        case 13:
            return 17;
        case 14:
            return 17;
        case 15:
            return 18;
        case 16:
            return 18;
        case 17:
            return 19;
        case 18:
            return 20;
        case 19:
            return 21;
        case 20:
            return 22;
    }
    return -1;
};

export const getBardAbilities = (level: number): Ability[] | null => {
    switch (level) {
        case 1:
            return [
                BardInfoSet['Bardic Inspiration'],
                BardInfoSet['Spellcasting'],
            ];
        case 2:
            return [
                BardInfoSet['Expertise-2'],
                BardInfoSet['Jack of All Trades'],
            ];
        case 3: {
            return [BardInfoSet['Bard Subclass']];
        }
        case 4:
            return [BardInfoSet['Ability Score Improvement-4']];
        case 5:
            return [BardInfoSet['Font of Inspiration']];
        case 6:
            return [BardInfoSet['Subclass Feature']];
        case 7:
            return [BardInfoSet.Countercharm];
        case 8:
            return [BardInfoSet['Ability Score Improvement']];
        case 9:
            return [BardInfoSet['Expertise-9']];
        case 10:
            return [BardInfoSet['Magical Secrets']];
        case 11:
            return [];
        case 12:
            return [BardInfoSet['Ability Score Improvement']];
        case 13:
            return [];
        case 14:
            return [BardInfoSet['Subclass Feature']];

        case 15:
            return [];
        case 16:
            return [BardInfoSet['Ability Score Improvement']];
        case 17:
            return [];
        case 18:
            return [BardInfoSet['Superior Inspiration']];
        case 19:
            return [BardInfoSet['Epic Boon']];
        case 20:
            return [BardInfoSet['Words of Creation']];
    }
    return null;
};

export const BardInfoSet: { [name: string]: Ability } = {
    'Bardic Inspiration': {
        title: 'Bardic Inspiration',
        descriptionParagraphs: [
            'You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.',
            <h3>Using Bardic Inspiration</h3>,
            'As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.',
            "Once within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.",
            <h3>Number of Uses</h3>,
            'You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.',
            <h3>At Higher Levels</h3>,
            'Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column. The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15.',
        ],
        source: FeatureSource.CLASS,
    },
    Spellcasting: {
        title: 'Spellcasting',
        descriptionParagraphs: [
            <span>
                You have learned to cast spells through your bardic arts. See{' '}
                <a href="#">this page</a> for the rules on spellcasting. The
                information below details how you use those rules with Bard
                spells, which appear in the Bard spell list.
            </span>,
            <h3>Cantrips</h3>,
            'Whenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.',
            'When you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.',
            <h3>Spell Slots</h3>,
            'The Spell Slots button on each level shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.',
            <h3>Prepared Spells of Level 1+</h3>,
            'You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Charm Person, Color Spray, Dissonant Whispers, and Healing Word are recommended.',
            "The number of spells on your list increases as you gain Bard levels, as shown under the 'Prepared Spells' header of each level. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Bard, your list of prepared spells can include six spells of levels 1 and 2 in any combination.",
            "If another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.",
            <span>
                <strong>Changing Your Prepared Spells.</strong> Whenever you
                gain a Bard level, you can replace one spell on your list with
                another Bard spell for which you have spell slots.
            </span>,
            <h3>Other Information</h3>,
            <span>
                <strong>Spellcasting Ability</strong> Charisma is your
                spellcasting ability for your Bard spells.
            </span>,
            <span>
                <strong>Spellcasting Focus</strong> You can use a Musical
                Instrument as a Spellcasting Focus for your Bard spells.
            </span>,
        ],
        source: FeatureSource.CLASS,
    },
    'Expertise-2': {
        title: 'Expertise',
        descriptionParagraphs: [
            'You gain Expertise in two of your skill proficiencies of your choice. Performance and Persuasion are recommended if you have proficiency in them.',
            'At Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice.',
        ],
        source: FeatureSource.CLASS,
    },
    'Expertise-9': {
        title: 'Expertise',
        descriptionParagraphs: [
            'You gain Expertise in two of your skill proficiencies of your choice.',
        ],
        source: FeatureSource.CLASS,
    },
    'Jack of All Trades': {
        title: 'Jack of All Trades',
        descriptionParagraphs: [
            "You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency Bonus.",
            'For example, if you make a Strength (Athletics) check and lack Athletics proficiency, you can add half your Proficiency Bonus to the check.',
        ],
        source: FeatureSource.CLASS,
    },
    'Bard Subclass': {
        title: 'Bard Subclass',
        descriptionParagraphs: [
            "You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.",
        ],
        source: FeatureSource.MISSING_SUBCLASS,
    },
    'Ability Score Improvement-4': {
        title: 'Ability Score Improvement',
        descriptionParagraphs: [
            'You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16.',
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
    'Font of Inspiration': {
        title: 'Font of Inspiration',
        descriptionParagraphs: [
            'You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest.',
            'In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration.',
        ],
        source: FeatureSource.CLASS,
    },
    'Subclass Feature': {
        title: 'Subclass Feature',
        descriptionParagraphs: ['You gain a feature from your Bard subclass.'],
        source: FeatureSource.MISSING_SUBCLASS,
    },
    Countercharm: {
        title: 'Countercharm',
        descriptionParagraphs: [
            'You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage.',
        ],
        source: FeatureSource.CLASS,
    },
    'Magical Secrets': {
        title: 'Magical Secrets',
        descriptionParagraphs: [
            "You've learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and the Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you (see a class's section for its spell list). In addition, whenever you replace a spell prepared for this class, you can replace it with a spell from those lists.",
        ],
        source: FeatureSource.CLASS,
    },
    'Superior Inspiration': {
        title: 'Superior Inspiration',
        descriptionParagraphs: [
            'When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than that.',
        ],
        source: FeatureSource.CLASS,
    },
    'Epic Boon': {
        title: 'Epic Boon',
        descriptionParagraphs: [
            'You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Spell Recall is recommended.',
        ],
        source: FeatureSource.CLASS,
    },
    'Words of Creation': {
        title: 'Words of Creation',
        descriptionParagraphs: [
            'You have mastered two of the Words of Creation: the words of life and death. You therefore always have the Power Word Heal and Power Word Kill spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target.',
        ],
        source: FeatureSource.CLASS,
    },
};
