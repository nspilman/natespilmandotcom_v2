import { Content } from "../../types/content";
import ContentPageWrapper from "../contentPageWrapper";

export type MusicProps = {
  music: Content[];
};

export const MusicPage = ({ music }: MusicProps) => {
  return (
    <ContentPageWrapper>
      <div id="music-page">
        <h1 id="music-title">{"Nate's Music"}</h1>
        <hr />
        {music.map((song) => (
          <article key={`${song.id}`} className="music-post">
            <h3>{song.frontmatter.title}</h3>
            <h4>{song.frontmatter.description}</h4>
            <div dangerouslySetInnerHTML={{ __html: song.html }} />
          </article>
        ))}
      </div>
    </ContentPageWrapper>
  );
};
