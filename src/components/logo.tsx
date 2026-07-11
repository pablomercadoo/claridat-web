import logoHorizontalDark from '#/assets/claridat-logo-horizontal-dark.png'
import logoHorizontalLight from '#/assets/claridat-logo-horizontal-light.png'
import iconDark from '#/assets/claridat-icon-dark.png'
import iconLight from '#/assets/claridat-icon-light.png'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
  showWordmark?: boolean
}

/**
 * variant "dark": logo oscuro (navy) para usar sobre fondos claros (header).
 * variant "light": logo claro (blanco) para usar sobre fondo navy (footer).
 */
export function Logo({ variant = 'dark', className = '', showWordmark = true }: LogoProps) {
  if (!showWordmark) {
    return (
      <img
        src={variant === 'dark' ? iconDark : iconLight}
        alt="Claridat"
        className={`h-8 w-auto ${className}`}
      />
    )
  }

  return (
    <img
      src={variant === 'dark' ? logoHorizontalDark : logoHorizontalLight}
      alt="Claridat"
      className={`h-8 w-auto ${className}`}
    />
  )
}
