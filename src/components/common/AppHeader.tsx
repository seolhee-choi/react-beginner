import { Separator } from "@/components/ui";

const AppHeader = () => {
  return (
    <header className="fixed top-0 z-10 w-full flex item-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/*로고 & 네비게이션 메뉴 UI*/}
        <div className="flex items-center gap-5">
          <img
            src="https://i.pinimg.com/1200x/1c/74/6f/1c746f12c6bc7a4ad8843384ef461405.jpg"
            alt="@LOGO"
            className="w-6 h-6 cursor-pointer"
          />
          <div className="flex items-center gap-5">
            <div className="font-semibold">토픽 인사이트</div>
            <Separator orientation="vertical" className="!h-4" />
            <div className="font-semibold">포트폴리오</div>
          </div>
        </div>
        {/*로그인 UI*/}
        <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500">
          로그인
        </div>
      </div>
    </header>
  );
};

export { AppHeader };
