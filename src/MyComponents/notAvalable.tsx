const NotAvailable = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-black text-white/90 text-3xl">
      <h3 className="font-bold">Page Not Found</h3>
      <p className="flex md:block flex-col justify-center items-center text-lg sm:text-xl italic text-gray-300">
        Please Contact CodeWithAli at: <span>unfold@codewithali.com</span>
      </p>
    </div>
  );
};

export default NotAvailable;
