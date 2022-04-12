export interface Char {
  id: string;
  imageUrl: string;
  status?: status;
}

export type status = "closed" | "opened" | "completed"