
export default function Header() {

  return (
    <nav
      className="w-full shadow-xl bg-white text-black"
      data-sso-domain="atvi"
      data-mobile-bp="1024"
    >
      
      <div className="flex justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="hidden lg:flex items-center h-16">
          <div className="text-2xl">
            <a href="/">
              Welcome {" "}
              {JSON.parse(localStorage.getItem("username"))}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-center h-16 px-4 ">
        

      Welcome {" "}
      {JSON.parse(localStorage.getItem("username"))}

        <div className="w-6" />
      </div>
    </nav>
  );
}
