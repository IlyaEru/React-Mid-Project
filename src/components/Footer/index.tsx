import { StyledFooter } from './style';
import githubIcon from '../../assets/github.svg';

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer__divider"></div>
      <div className="footer__content">
        <a href="https://github.com/IlyaEru">
          <img src={githubIcon} alt="Github" />
        </a>
        <a className="footer__github-link" href="https://github.com/IlyaEru">
          IlyaEru
        </a>
      </div>
    </StyledFooter>
  );
}
