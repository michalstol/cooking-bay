export interface Recipe {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  time: { h?: string; m?: string };
}
