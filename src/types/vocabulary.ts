export interface VocabularyItem {
    id: number;
    words: string;
    class: string;
    japanese: string;
    sentence: string;
    level: string;
    userNotes?: string; // 可選
    category: string;
  }
  