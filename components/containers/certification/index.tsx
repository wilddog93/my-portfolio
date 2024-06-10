import { certifications, degrees } from '@/config/portfolio';
import { ThemeProps } from '@/config/theme'
import { Card, CardBody, CardHeader, Image, Link, button } from '@nextui-org/react';
import clsx from 'clsx';
import React, { FC, Key } from 'react'
// import { EducationCard } from './education-card';

type Props = {
  theme: ThemeProps;
  key?: Key | undefined;
  className?: string | undefined;
}

export const Certifications: FC<Props> = ({ theme, ...props }) => {
  return (
    <div {...props} className="w-full flex flex-col gap-10" id="educations">
      <h1 className="text-4xl sm:text-6xl font-semibold text-center" style={{ color: theme.text }}>
        Certifications
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {certifications.certifications.map((certification, id) => {
          return (
            <Link
              key={id}
              isExternal
              href={certification.certificate_link}
              className='w-full max-w-max focus:outline-none'
            >
                <Image 
                  src={certification.logo_path} 
                  className='w-full h-[250px] border shadow-sm hover:shadow-medium transition-all duration-300 scale-95 hover:scale-100'
                  radius='lg'
                />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
