/* eslint-disable react/display-name */
function withPageHeader<T extends unknown>(Component: React.FC<T>) {
  return (props: T) => {
    return (
      <div className="container mx-auto py-5">
        <h1 className="text-3xl font-bold text-center">Wyzesearch</h1>
        <Component {...props} />
      </div>
    );
  };
}

export default withPageHeader;
