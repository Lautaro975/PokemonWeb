import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState{
    hasError:boolean;
}
interface ErrorBoundaryProps{
    children:ReactNode
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props)
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error:ErrorBoundary):ErrorBoundaryState {
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: ErrorInfo) {
      console.log(error, info.componentStack);
    }
  

    render() {
      if (this.state.hasError) {
         console.error("Hubo un error");
         
      }
  
      return this.props.children;
    }
  }
