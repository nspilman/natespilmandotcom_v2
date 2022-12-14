type Music = {
  html: string;
  id: string;
  frontmatter: {
    date: string;
    description: string;
    favorite: boolean;
    title: string;
    published: boolean;
  };
};

export default Music;
