'use client'

import ErrorBoundary from './ErrorBoundary'

export default function SafeComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}

