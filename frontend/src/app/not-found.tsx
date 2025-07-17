const NotFoundPage = () => {
  return (
    <article className="flex flex-col items-center justify-center text-center  min-h-[calc(100vh-490px)] w-full">
      <div className="text-[128px] font-bold ">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <p className="text-[24px] my-15">
        Sorry, we couldn’t find the page you were looking for. Let’s take you
        back home.
      </p>
      <p className=" underline cursor-pointer">Back to homepage</p>
    </article>
  );
};

export default NotFoundPage;
