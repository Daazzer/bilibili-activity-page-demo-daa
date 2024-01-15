import classNames from 'classnames';
import logoImg from '../assets/logo.png';
import './index.scss';

type P = {
  isActive: boolean
};

export default function FooterBar(props: P) {
  return (
    <div className={classNames('footer-bar', { active: props.isActive })}>
      <img
        className="logo"
        src={logoImg}
        alt="logo"
      />
      <a href="https://www.bilibili.com">
        <button className="app-button">App 内打开</button>
      </a>
    </div>
  );
};
