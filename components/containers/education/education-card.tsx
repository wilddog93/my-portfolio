import { ThemeProps } from '@/config/theme';
import { Card, CardBody, CardHeader, Image, Link, button } from '@nextui-org/react';
import clsx from 'clsx';
import React, { FC, Key } from 'react'
import { Fade } from 'react-awesome-reveal';

type EducationProps = {
  title: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

type Props = {
  key?: Key | undefined;
  className?: string | undefined;
  education: EducationProps;
  theme: ThemeProps;
}

export const EducationCard: FC<Props> = ({ education, theme, ...props }) => {
  return (
    <div {...props} className='flex flex-col sm:flex-row gap-6 items-center'>
      <Fade duration={1000} direction='left' className='w-full max-w-fit' triggerOnce>
        <Image
          alt={education.alt_name}
          radius='full'
          className={clsx(
            "border dark:border-none p-2 object-contain object-center shadow-sm hover:shadow-medium transition-all duration-300 scale-95 hover:scale-100 h-[200px] w-[300px]"
          )}
          height={200}
          src={education.logo_path}
          width={200}
        />
      </Fade>
      <Fade duration={1000} direction='right' className='w-full' triggerOnce>
        <Card radius='lg' className='w-full h-full min-h-[200px] transition-all duration-300 scale-95 hover:scale-100'>
          <CardHeader className='border-b py-5 px-4 text-white' style={{
            backgroundColor: theme.accentColor,
            borderColor: theme.accentColor,
            boxShadow: `0px 0px 5px ${theme.accentColor}`
          }} >
            <div className='w-full flex flex-col gap-4'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-lg sm:text-lg font-semibold'>{education.title}</h1>
                <p>{education.duration}</p>
              </div>
              <h3>{education.subtitle}</h3>
            </div>
          </CardHeader>

          <CardBody className='flex flex-col gap-6 py-5 px-4'>
            {education.descriptions.map((sentence, id) => {
              return (
                <p
                  key={id}
                  className=""
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}

            <Link
              href={education.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className={button({
                variant: "bordered",
                color: "primary",
                size: "lg",
                className: "w-full max-w-fit ml-auto"
              })}
            >
              <span>Visit Website</span>
            </Link>
          </CardBody>
        </Card>
      </Fade>
    </div>
  )
}
