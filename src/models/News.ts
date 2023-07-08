export interface IResponceNews {
  articles: INews[];
  status: string;
  totalResults: number;
}

export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}
