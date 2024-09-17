import React from 'react';

const WithLoadingIndicator = (WrappedComponent) => {
  return class LoadingIndicator extends React.Component {
    render() {
      const { isLoading, ...props } = this.props;

      if (isLoading) {
        return (
          <div className="loading-indicator">
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        );
      }

      return <WrappedComponent {...props} />;
    }
  };
};

export default WithLoadingIndicator;