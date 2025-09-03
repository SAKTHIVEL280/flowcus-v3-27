import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-target inline-flex items-center justify-center gap-2 whitespace-nowrap font-kalam text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-paper hover:shadow-sketch transform hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-paper hover:shadow-sketch",
        outline:
          "border-2 border-paper-lines bg-paper-cream hover:bg-card hover:border-pencil-blue text-foreground hover:scale-105 shadow-paper",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-paper hover:shadow-sketch",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 border-2 border-transparent dark:border-transparent border-pencil-blue",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Paper theme specific variants
        sketch: "bg-pencil-blue text-white border-2 border-pencil-blue hover:border-pencil-purple shadow-sketch hover:shadow-float transform hover:scale-105 hover:rotate-1 font-medium",
        pencil: "bg-gradient-pencil text-white border-2 border-pencil-orange hover:border-pencil-red shadow-sketch hover:shadow-float transform hover:scale-105 hover:-rotate-1 font-medium",
        paper: "bg-gradient-paper text-pencil-graphite border-2 border-paper-lines hover:border-pencil-blue shadow-paper hover:shadow-sketch transform hover:scale-105 font-medium",
        hero: "bg-pencil-blue text-white border-2 border-pencil-blue hover:border-pencil-purple shadow-sketch hover:shadow-float transform hover:scale-102 font-bold text-base",
      },
      size: {
        default: "h-9 sm:h-10 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-sm",
        sm: "h-8 sm:h-9 rounded-lg px-2 sm:px-3 text-xs sm:text-sm",
        lg: "h-11 sm:h-12 rounded-xl px-6 sm:px-8 text-sm sm:text-base",
        xl: "h-12 sm:h-14 rounded-xl px-8 sm:px-10 text-base sm:text-lg",
        icon: "h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
