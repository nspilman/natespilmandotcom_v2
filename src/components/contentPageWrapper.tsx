import React from "react";
import Layout from "./layout";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ContentPageWrapper = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <Layout>
      <Wrapper className="content-page-wrapper">{children}</Wrapper>
    </Layout>
  );
};

export default ContentPageWrapper;
