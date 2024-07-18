export interface CustomCard {
  customId: string;
  title: string;
  description?: string | null;
  img: string;
  linkVideo: string;
  tags?: string[];
  date: string;
}
