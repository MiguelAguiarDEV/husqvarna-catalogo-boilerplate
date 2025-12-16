import { cn } from '@/utils/misc'
import { motion } from 'framer-motion'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'default' | 'outline-blue' | 'outline-white'
  animate?: boolean
}

export const Button = ({
  children,
  className,
  onClick,
  variant = 'default',
  animate = false,
}: ButtonProps) => {
  const baseStyles = `
    h-[30px] min-h-[30px] rounded-[8px] px-4 md:px-8 uppercase font-bold
    transition-colors duration-300
  `

  const variantStyles = {
    default: `
      bg-[#273A60] text-white
      hover:bg-[#1e2d4a]
    `,
    'outline-blue': `
      bg-transparent text-[#273A60] border border-[#273A60]
      hover:bg-[#273A60] hover:text-white
    `,
    'outline-white': `
      bg-transparent text-white border border-white
      hover:bg-white hover:text-[#273A60]
    `,
  }

  const animationProps = animate
    ? {
        animate: { scale: [1, 1.05, 1] },
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' as const },
      }
    : {}

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...animationProps}
    >
      {children}
    </motion.button>
  )
}
