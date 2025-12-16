import { type SVGProps } from 'react'

import type { IconName } from './icons/name'
import { cn } from '@/utils/misc'

const sizeClassName = {
  '8px': 'w-2 h-2 min-w-2 min-h-2',
  '10px': 'w-2.5 h-2.5 min-w-2.5 min-h-2.5',
  '16px': 'w-4 h-4 min-w-4 min-h-4',
  '20px': 'w-5 h-5 min-w-5 min-h-5',
  '24px': 'w-6 h-6 min-w-6 min-h-6',
  '28px': 'w-7 min-w-7 h-7 min-h-7',
  '32px': 'w-8 h-8 min-w-8 min-h-8',
  '36px': 'w-9 h-9 min-w-9 min-h-9',
  '42px': 'w-[42px] h-[42px] min-w-[42px] min-h-[42px]',
  '52px': 'w-[52px] h-[52px] min-w-[52px] min-h-[52px]',
  '64px': 'w-16 h-16 min-w-16 min-h-16',
} as const

export type IconSize = keyof typeof sizeClassName

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: IconSize
  containerClassname?: string
}

/**
 * Renders an SVG icon. The icon defaults to the size of the font. To make it
 * align vertically with neighboring text, you can pass the text as a child of
 * the icon and it will be automatically aligned.
 * Alternatively, if you're not ok with the icon being to the left of the text,
 * you need to wrap the icon and text in a common parent and set the parent to
 * display "flex" (or "inline-flex") with "items-center" and a reasonable gap.
 */
export function Icon({
  name,
  size = '16px',
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName
  size?: IconSize
}) {
  return (
    <svg
      className={cn(sizeClassName[size], 'inline self-center', className)}
      {...props}
    >
      {/* <use href={`./sprite.svg#${name}`} /> */}
      <use href={`/images/icons/sprite.svg#${name}`} />
    </svg>
  )
}
