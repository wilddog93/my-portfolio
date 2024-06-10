import { degrees } from '@/config/portfolio';
import { ThemeProps } from '@/config/theme'
import { Card, CardBody, CardHeader, Image, Link, button } from '@nextui-org/react';
import clsx from 'clsx';
import React, { FC, Key } from 'react'
import { EducationCard } from './education-card';

type Props = {
  theme: ThemeProps;
  key?: Key | undefined;
  className?: string | undefined;
}

export const Educations: FC<Props> = ({ theme, ...props }) => {
  return (
    <div {...props} className="w-full flex flex-col gap-10" id="educations">
      <h1 className="text-2xl sm:text-4xl font-semibold text-center" style={{ color: theme.text }}>
        Educations
      </h1>
      <div className="flex flex-col gap-10">
        {degrees.degrees.map((degree, id) => {
          return (
            <EducationCard key={id} theme={theme} education={degree} />
          )
        })}
      </div>
    </div>
  )
}
