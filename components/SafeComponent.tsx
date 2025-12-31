'use client'

import ErrorBoundary from './ErrorBoundary'

export default function SafeComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div suppressHydrationWarning>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  )
}


