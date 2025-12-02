/**
 * Prophet Model - Represents a prophet in Islamic tradition
 */
export interface Prophet {
  id: number;
  name: string;
  arabicName: string;
  era: string;
  description: string;
  lifeSpan?: string;
  scripture?: string;  // Torah, Zabur, Injil, Quran, etc.
  majorEvents?: string[];
  tribe?: string;
  locationSent?: string;
  miracles?: string[];
  parentIds?: number[];  // Can have multiple ancestors to trace lineage
  
  // Educational resources
  resources?: {
    videos?: VideoResource[];
    books?: BookResource[];
    quranRefs?: string[];  // Quranic verse references
  };
  
  // Legacy support (will be deprecated)
  children?: Prophet[];
}

/**
 * Video resource for learning about a prophet
 */
export interface VideoResource {
  title: string;
  url: string;
  creator?: string;
}

/**
 * Book resource for learning about a prophet
 */
export interface BookResource {
  title: string;
  author?: string;
  description?: string;
}

/**
 * Relationship between prophets
 */
export interface ProphetRelationship {
  from: number;  // Source prophet ID
  to: number;    // Target prophet ID
  type: 'descendant' | 'contemporary' | 'lineage';  // Relationship type
}

/**
 * Complete data structure with separated prophets and relationships
 */
export interface ProphetData {
  prophets: Prophet[];
  relationships: ProphetRelationship[];
}

/**
 * Represents the complete prophet tree structure (legacy)
 */
export interface ProphetTree {
  root: Prophet;
}
