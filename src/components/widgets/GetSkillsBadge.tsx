import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import {
  CSSIcon,
  GithubIcon,
  GitlabIcon,
  HtmlIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  VueIcon,
} from '../../../public/assets/icons';

const Display = ({
  label,
  icon,
  src,
  background = '#172135',
  color = '#FFFFFF',
}: {
  label: string;
  icon?: string | ReactNode;
  src?: StaticImport;
  background?: string;
  color?: string;
}) => {
  return (
    <div
      className='all__trans flex w-fit items-center gap-2 rounded-xl border border-slate-200/80 px-3.5 py-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)] dark:border-white/10'
      style={{ background: background, color: color }}
    >
      {icon ? (
        <div className='text-base'>{icon}</div>
      ) : src ? (
        <Image
          src={src}
          width={14}
          height={14}
          alt='icon'
          style={{ width: '14px', height: '14px' }}
        />
      ) : null}
      <span className='text-sm font-medium capitalize'>{label}</span>
    </div>
  );
};

const GetSkillsBadge = ({ status }: { status: string }) => {
  const DisplayStatus = (key: string) => {
    let component;

    switch (key) {
      case 'HTML':
        component = <Display label={key} src={HtmlIcon} />;
        break;
      case 'CSS':
        component = <Display label={key} src={CSSIcon} />;
        break;
      case 'Tailwind':
        component = <Display label={key} src={TailwindIcon} />;
        break;
      case 'JavaScript':
        component = <Display label={key} src={JavascriptIcon} />;
        break;
      case 'TypeScript':
        component = <Display label={key} src={TypescriptIcon} />;
        break;
      case 'React':
        component = <Display label={key} src={ReactIcon} />;
        break;
      case 'Github':
        component = <Display label={key} src={GithubIcon} />;
        break;
      case 'Next':
        component = <Display label={key} src={NextIcon} />;
        break;
      case 'Vue':
        component = <Display label={key} src={VueIcon} />;
        break;
      case 'Gitlab':
        component = <Display label={key} src={GitlabIcon} />;
        break;

      default:
        component = null;
        break;
    }

    return component;
  };

  return <div>{DisplayStatus(status)}</div>;
};

export default GetSkillsBadge;
