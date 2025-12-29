'use client'

import { cn } from '@/lib/utils'
import { motion, useMotionValue } from 'framer-motion'
import { MouseEvent, PropsWithChildren } from 'react'

interface FluentCardProps extends PropsWithChildren {
    className?: string
    variant?: 'mica' | 'acrylic' | 'default'
}

export function FluentCard({ children, className, variant = 'default' }: FluentCardProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    const baseStyles = 'relative overflow-hidden group fluent-card'
    const variants = {
        default: 'bg-card/50',
        mica: 'fluent-mica',
        acrylic: 'fluent-acrylic',
    }

    return (
        <div
            className={cn(baseStyles, variants[variant], 'fluent-reveal-container', className)}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="fluent-reveal-glint opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'transparent', // Gradient removed
                }}
            />

            <motion.div
                className="fluent-reveal-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'transparent', // Gradient removed
                }}
            />

            <div className="relative z-10">{children}</div>
        </div>
    )
}
