import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { LuAlertTriangle } from 'react-icons/lu';
import {
  CSSIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from '../../../public/assets/icons';

const Display = ({
  label,
  icon,
  src,
  background = '#172135',
  color = 'white',
}: {
  label: string;
  icon?: string | ReactNode;
  src?: StaticImport;
  background?: string;
  color?: string;
}) => {
  return (
    <div
      className='all__trans flex w-fit items-center gap-2 rounded px-3 py-1 hover:-translate-y-1.5'
      style={{ background: background, color: color }}
    >
      {icon ? (
        <div className='text-lg'>{icon}</div>
      ) : src ? (
        <Image src={src} width={14} height={14} alt='icon' />
      ) : null}
      <span className='text-sm capitalize'>{label}</span>
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
      case 'Git':
        component = <Display label={key} src={GithubIcon} />;
        break;
      case 'Next':
        component = <Display label={key} src={NextIcon} />;
        break;

      default:
        component = <div>No Badge</div>;
        break;
    }

    return component;
  };

  return <div>{DisplayStatus(status)}</div>;
};

export default GetSkillsBadge;
