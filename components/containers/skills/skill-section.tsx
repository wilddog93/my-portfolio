import { skills } from '@/config/portfolio'
import { ThemeProps } from '@/config/theme'
import React, { FC } from 'react'
import { FullStackImage } from './fullstack-image'
import SoftwareSkill from '@/components/common/software-skills'
import { Icon } from '@/components/common/icons'
import { FaFire, FaStar } from 'react-icons/fa'

type Props = {
  theme: ThemeProps
}

export const SkillSection: FC<Props> = ({ theme }) => {
  return (
    <div className='w-full flex flex-col gap-10'>
      {skills.data.map((skill, index) => (
        <div key={index} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FullStackImage className='w-full max-w-full' theme={theme} />

          <div className="w-full flex flex-col items-center gap-10 mx-auto">
            <h1 className="text-2xl sm:text-4xl font-medium text-center" style={{ color: theme.text }}>
              {skill.title}
            </h1>
            <div className='w-full sm:w-2/3 flex mx-auto'>
              <SoftwareSkill logos={skill.softwareSkills} className='flex-wrap items-center justify-center gap-4' />
            </div>
            <div className='w-full flex flex-col gap-4 tracking-wider'>
              {skill.skills.map((text, index) => (
                <div
                  key={index}
                  className="flex items-start gap-x-2 text-base sm:text-lg"
                  style={{ color: theme.secondaryText }}
                >
                  <span><Icon icon={FaFire} className='text-warning size-5' /></span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
