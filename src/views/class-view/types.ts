export enum FeatureSource {
    CLASS,
    MISSING_SUBCLASS,
    SUBCLASS,
    SPECIES,
    FEAT,
    OTHER,
}

export interface LevelData {
    level: number;
    proficiency: string;
    abilitiesGained: Ability[];
    secondaryResourceLabel?: string;
    secondaryResourceCount?: number | string;
    preparedSpells?: number;
    cantrips?: number;
    weaponMasteryCount?: number;
    rageDamageString?: string;
    spellSlots?: SpellSlots;
}

export interface Ability {
    title: string;
    descriptionParagraphs: (string | React.JSX.Element)[];
    source: FeatureSource,
}

export enum CasterType {
    FULL,
    HALF,
    THIRD,
}

export type SpellSlots = number[];