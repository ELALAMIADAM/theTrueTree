import { Injectable } from '@angular/core';
import { Prophet } from '../models/prophet.model';

/**
 * ProphetService - Manages prophet data
 * This service provides methods to fetch and manage data about prophets in Islamic tradition
 */
@Injectable({
  providedIn: 'root'
})
export class ProphetService {
  
  constructor() { }

  /**
   * Get the complete tree of prophets
   * Returns a hierarchical structure of prophets in Islamic tradition
   */
  getProphetTree(): Prophet {
    return {
      id: 1,
      name: 'Adam',
      arabicName: 'آدم',
      era: 'Ancient Times',
      description: 'The first prophet and first human created by Allah. He is considered the father of humanity.',
      children: [
        {
          id: 2,
          name: 'Noah',
          arabicName: 'نوح',
          era: '2104 BCE - 2004 BCE (approx.)',
          description: 'Preached for 950 years to his people. Survived the Great Flood.',
          children: [
            {
              id: 3,
              name: 'Abraham',
              arabicName: 'إبراهيم',
              era: '2166 BCE - 2071 BCE (approx.)',
              description: 'The Khalil (Friend) of Allah. Father of Ishmael and Isaac.',
              children: [
                {
                  id: 4,
                  name: 'Ishmael',
                  arabicName: 'إسماعيل',
                  era: '2081 BCE - 2000 BCE (approx.)',
                  description: 'Son of Abraham. Father of the Arab people. Ancestor of Prophet Muhammad.'
                },
                {
                  id: 5,
                  name: 'Isaac',
                  arabicName: 'إسحاق',
                  era: '2066 BCE - 1985 BCE (approx.)',
                  description: 'Son of Abraham. Father of Jacob.',
                  children: [
                    {
                      id: 6,
                      name: 'Jacob',
                      arabicName: 'يعقوب',
                      era: '2006 BCE - 1859 BCE (approx.)',
                      description: 'Also known as Israel. Father of the twelve tribes of Israel.',
                      children: [
                        {
                          id: 7,
                          name: 'Joseph',
                          arabicName: 'يوسف',
                          era: '1745 BCE - 1635 BCE (approx.)',
                          description: 'Known for his beautiful patience (sabr). Became a ruler in Egypt.'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 8,
          name: 'Hud',
          arabicName: 'هود',
          era: 'Ancient Times',
          description: 'Sent to the people of Ad. Warned them against idolatry.'
        },
        {
          id: 9,
          name: 'Saleh',
          arabicName: 'صالح',
          era: 'Ancient Times',
          description: 'Sent to the people of Thamud. Performed the miracle of the she-camel.'
        }
      ]
    };
  }

  /**
   * Find a prophet by ID
   */
  findProphetById(id: number, node: Prophet = this.getProphetTree()): Prophet | null {
    if (node.id === id) {
      return node;
    }
    if (node.children) {
      for (const child of node.children) {
        const found = this.findProphetById(id, child);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  /**
   * Get all prophets as a flat list
   */
  getAllProphets(node: Prophet = this.getProphetTree(), result: Prophet[] = []): Prophet[] {
    result.push(node);
    if (node.children) {
      for (const child of node.children) {
        this.getAllProphets(child, result);
      }
    }
    return result;
  }

  /**
   * Get the level (depth) of a prophet in the tree
   */
  getProphetLevel(id: number, node: Prophet = this.getProphetTree(), level: number = 0): number {
    if (node.id === id) {
      return level;
    }
    if (node.children) {
      for (const child of node.children) {
        const foundLevel = this.getProphetLevel(id, child, level + 1);
        if (foundLevel !== -1) {
          return foundLevel;
        }
      }
    }
    return -1;
  }
}
