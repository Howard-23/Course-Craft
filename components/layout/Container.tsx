import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        paddingInline: 'var(--container-padding)',
      }}
    >
      {children}
    </div>
  );
}
