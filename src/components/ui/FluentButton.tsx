'use client'

import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface FluentButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

export const FluentButton = forwardRef<HTMLButtonElement, FluentButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-primary-foreground shadow-md hover:shadow-lg',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        }

        const sizes = {
            sm: 'h-9 px-3 rounded-md text-xs',
            md: 'h-11 px-6 rounded-lg text-sm',
            lg: 'h-14 px-8 rounded-xl text-base',
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className={cn(
                    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        )
    }
)

FluentButton.displayName = 'FluentButton'
