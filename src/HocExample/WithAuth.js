const WithAuth = (WrappedCompo) => {
  const isAuth = false;
  return function AuthComponet(props) {
    if (!isAuth) {
      return <h1>user is authenticated</h1>;
    }
    return <WrappedCompo {...props} />;
  };
};

export default WithAuth;
