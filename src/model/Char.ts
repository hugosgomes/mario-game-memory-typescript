export interface Char {
  id: string;
  imageUrl: string;
  status?: "closed" | "opened" | "completed";
}