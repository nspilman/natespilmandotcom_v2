import { GetStaticProps } from "next";
import React from "react";
import { ContentType } from "../data/content";
import { MusicPage, MusicProps } from "../src/components/Music";
import { getContentFromMarkdown } from "../utils/getContentFromMarkdown";

const Music = ({ music }: MusicProps) => {
  return <MusicPage music={music} />;
};

export const getStaticProps: GetStaticProps<MusicProps> = async () => {
  const { getAll } = getContentFromMarkdown(ContentType.Music);
  const music = getAll();

  return {
    props: { music },
  };
};

export default Music;
