"use client";

import React from "react";

type ErrorBoundaryProps = {
  fallback: React.ReactNode | ((error: Error | null) => React.ReactNode);
};

const withErrorBoundary = <P extends object>(
  WrappedComponent: React.FC<P>,
  fallback: ErrorBoundaryProps["fallback"]
) => {
  const ErrorBoundary: React.FC<P> = (props) => {
    const [error, setError] = React.useState<Error | null>(null);

    React.useEffect(() => {
      const errorHandler = (event: ErrorEvent) => {
        setError(event.error);
        event.preventDefault();
      };

      window.addEventListener("error", errorHandler);

      return () => {
        window.removeEventListener("error", errorHandler);
      };
    }, []);

    if (error) {
      if (typeof fallback === "function") {
        return <>{fallback(error)}</>;
      }
      return fallback;
    }

    return <WrappedComponent {...props} />;
  };

  return ErrorBoundary;
};

export default withErrorBoundary;
