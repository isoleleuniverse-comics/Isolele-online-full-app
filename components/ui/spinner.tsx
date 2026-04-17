import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface SpinnerProps extends React.ComponentProps<'svg'> {
  variant?: 'icon' | 'logo'
}

function Spinner({ className, variant = 'icon', ...props }: SpinnerProps) {
  if (variant === 'logo') {
    return (
      <div className={cn('relative', className)} {...props}>
        <div className="animate-spin">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260311-WA0030-kydmLlQEI33of4mfyTaGi2r6TNvZWz.jpg"
            alt="Loading"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    )
  }

  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
