export interface Course{
  id: string;
  listening: number;
  useOfEnglish: number;
  speaking: number;
  reading: number;
  writing: number;
  course: string;
  finalGrade: number;
  listeningNotes?: string;
  useOfEnglishNotes?: string;
  speakingNotes?: string;
  writingNotes?: string;
  readingNotes?: string;

}
