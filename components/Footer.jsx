export default function () {
  return (
    <section id="footer" className="bg-black relative z-20 h-[150px] w-full">
      <div className="flex h-full w-full justify-center md:justify-between">
        <div className="text-white text-[45px] font-bold hidden md:inline-block align-text-bottom self-end p-8">
          KiwiKapers
        </div>
        <div className="align-text-bottom self-end flex-col gap-4">
          <div className="flex gap-7 p-8 lg:mr-8">
            <a href="">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </a>
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </a>
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </a>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </a>
          </div>

          <div className="text-slate-500 font-semibold text-center mb-5">
            Copyright 2023. All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
}
