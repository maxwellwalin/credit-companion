import styled from "styled-components";

const SignInPage = styled.section`
  background-color: #f5f5f5;
  .sign-in-detail {
    color: #fff;
    padding: 6.25rem;
    height: 100vh;
  }
  section.sign-in-page {
    height: 100vh;
    background: #50b5ff;
    background: #50b5ff;
    background: linear-gradient(135deg, #50b5ff 0, #0076e5 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba($primary, 80)', endColorstr='#0076e5', GradientType=1);
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding: 0 auto;
    div.container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  .sign-in-page .sign-in-logo {
    display: inline-block;
    width: 100%;
  }
  .sign-in-logo img {
    height: 3.125rem;
  }
  .sign-in-from {
    padding: 0 3.75rem;
  }
  .sign-info {
    border-top: 1px solid #f1f1f1;
    margin-top: 1.875rem;
    padding-top: 1.25rem;
  }
`;

export { SignInPage };
