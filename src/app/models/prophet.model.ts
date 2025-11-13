/**
 * Prophet Model - Represents a prophet in Islamic tradition
 */
export interface Prophet {
  id: number;
  name: string;
  arabicName?: string;
  era: string; // Time period in history
  description: string;
  children?: Prophet[]; // For descendants or related prophets
}

/**
 * Represents the complete prophet tree structure
 */
export interface ProphetTree {
  root: Prophet;
}
