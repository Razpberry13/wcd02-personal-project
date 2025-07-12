"use client";

const FooterTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className="bg-transparent text-white py-2 px-4 rounded-md mb-4"
    >
      Back to Top
    </button>
  );
};

export default FooterTopButton;
