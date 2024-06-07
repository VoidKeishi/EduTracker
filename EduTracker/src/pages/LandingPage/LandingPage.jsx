import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const onButtonContainerClick = useCallback(() => {
    navigate('/sign-in');
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Desktop - KPI " to the project
  }, []);

  

  return (
    <div className="relative bg-schemes-surface-variant w-full overflow-x-auto flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[2.687rem] box-border gap-[2rem] leading-[normal] tracking-[normal] mq750:gap-[1rem]">
      <div className="w-[90rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.375rem] box-border top-[0] z-[99] sticky max-w-full">
        <header className="flex-1 bg-m3-sys-light-primary overflow-hidden flex flex-row items-start justify-between pt-[0.25rem] px-[1rem] pb-[0.212rem] box-border max-w-full gap-[1.25rem] text-center text-[0.875rem] text-m3-sys-light-on-primary font-m3-title-large">
          <img
            className="h-[3.038rem] w-[9.063rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/svgA/group-28@2x.png"
          />
          <div className="w-[22.5rem] hidden flex-col items-start justify-end max-w-full">
            <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-m3-sys-light-surface-container-highest" />
          </div>
          <div className="w-[18.563rem] flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-row items-start justify-start">
            <div
                className="rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-start justify-start cursor-pointer"
                onClick={onButtonContainerClick}
              >
                <div className="flex flex-row items-start justify-start py-[0.531rem] px-[1.437rem]">
                  <a className="[text-decoration:none] relative tracking-[0.1px] leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[4.313rem] whitespace-nowrap">
                    Đăng nhập
                  </a>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[0.656rem] px-[0.687rem] bg-whitesmoke flex-1 rounded-21xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro" onClick={() => {
                  navigate('/sign-up');
                }}>
                <div className="h-[2.313rem] w-[11.313rem] relative rounded-21xl bg-whitesmoke hidden" />
                <a className="[text-decoration:none] flex-1 relative text-[0.938rem] tracking-[0.5px] leading-[1rem] font-medium font-m3-title-large text-m3-sys-light-primary text-center whitespace-nowrap z-[1] mq450:hidden">
                  Tạo tài khoản mới
                </a>
              </button>
            </div>
          </div>
        </header>
      </div>
      <section className="flex flex-row items-start justify-start py-[0rem] px-[2.625rem] box-border max-w-full text-left text-[1.75rem] text-m3-sys-light-on-surface font-m3-title-large mq750:pl-[1.313rem] mq750:pr-[1.313rem] mq750:box-border">
        <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-xl bg-m3-sys-light-on-primary overflow-x-auto flex flex-row items-start justify-start py-[1.781rem] px-[1.875rem] box-border max-w-full">
          <div className="w-[20.5rem] relative leading-[2.25rem] inline-block shrink-0 mq450:text-[1.375rem] mq450:leading-[1.813rem]">{`Tổng tiến độ: `}</div>
          <div className="h-[1.781rem] w-[62.5rem] shrink-0 flex flex-col items-start justify-start pt-[0.468rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_287px)] ml-[-2.938rem]">
            <div className="w-[55.063rem] flex-1 rounded-xl flex flex-row items-start justify-start relative max-w-full">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-teal" />
              <div className="self-stretch w-[22.025rem] relative bg-m3-sys-light-primary max-w-full z-[1]" />
            </div>
          </div>
          <div className="relative leading-[2.25rem] text-black inline-block min-w-[3.313rem] ml-[-2.938rem] mq450:text-[1.375rem] mq450:leading-[1.813rem]">
            40%
          </div>
        </div>
      </section>
      <section className="w-[90rem] flex flex-row items-start justify-center pt-[0rem] pb-[1.875rem] pr-[0rem] pl-[2.625rem] box-border max-w-full [row-gap:20px] text-center text-[1rem] text-m3-sys-light-surface font-m3-title-large mq750:pl-[1.313rem] mq750:box-border mq1125:flex-wrap">
        <div className="ml-[-3rem] flex flex-col items-start justify-start pt-[9rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[3rem] h-[3rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border min-w-[14rem] max-w-full text-left text-m3-sys-light-on-surface">
          <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-mini flex flex-row items-start justify-start">
            <div className="h-[24.313rem] flex-1 relative rounded-xl bg-m3-sys-light-on-primary box-border overflow-hidden z-[4] border-[1px] border-solid border-m3-sys-light-on-primary">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden" />
              <img
                className="h-full w-full object-cover relative shrink-0"
                  alt=""
                    src="/svgA/giang-day.png"
                />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border min-w-[14rem] max-w-full text-left text-m3-sys-light-on-surface">
          <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-mini flex flex-row items-start justify-start">
            <div className="h-[24.313rem] flex-1 relative rounded-xl bg-m3-sys-light-on-primary box-border overflow-hidden z-[4] border-[1px] border-solid border-m3-sys-light-on-primary">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden" />
              <img
                className="h-full w-full object-cover relative shrink-0"
                  alt=""
                    src="/svgA/nghien-cuu.png"
                />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border min-w-[14rem] max-w-full text-left text-m3-sys-light-on-surface">
          <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-mini flex flex-row items-start justify-start">
            <div className="h-[24.313rem] flex-1 relative rounded-xl bg-m3-sys-light-on-primary box-border overflow-hidden z-[4] border-[1px] border-solid border-m3-sys-light-on-primary">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden" />
              <img
                className="h-full w-full object-cover relative shrink-0"
                  alt=""
                    src="/svgA/phuc-vu.png"
                />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[1.687rem] pl-[0rem] box-border min-w-[14rem] max-w-full text-left text-m3-sys-light-on-surface">
          <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-mini flex flex-row items-start justify-start">
            <div className="h-[24.313rem] flex-1 relative rounded-xl bg-m3-sys-light-on-primary box-border overflow-hidden z-[4] border-[1px] border-solid border-m3-sys-light-on-primary">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden" />
              <img
                className="h-full w-full object-cover relative shrink-0"
                  alt=""
                    src="/svgA/ca-nhan.png"
                />
            </div>
          </div>
        </div>
      </section>
      <section className="w-[88.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.75rem] text-black font-m3-title-large">
        <div className="w-[43.5rem] flex flex-col items-end justify-start gap-[6.812rem] max-w-full mq450:gap-[1.688rem] mq750:gap-[3.375rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.562rem] max-w-full mq750:gap-[1.25rem]">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[1.75rem] box-border max-w-full">
              <div className="w-[36.75rem] relative leading-[2.25rem] inline-block shrink-0 max-w-full mq450:text-[1.375rem] mq450:leading-[1.813rem]">{`Quá mệt mỏi với việc theo dõi hàng chục KPI? `}</div>
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-sm bg-whitesmoke flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.75rem] box-border max-w-full gap-[1.25rem] text-center text-[1.5rem] text-m3-sys-light-primary mq750:flex-wrap mq750:pl-[1.25rem] mq750:pr-[1.25rem] mq750:pb-[1.25rem] mq750:box-border">
              <div className="self-stretch w-[43.5rem] relative rounded-sm bg-whitesmoke hidden max-w-full" />
              <div className="w-[22.044rem] flex flex-col items-start justify-start pt-[2rem] px-[0rem] pb-[0rem] box-border max-w-full">
              <input
                type="email"
                className="-ml-5 -mt-7 w-[30.044rem] h-[4.5rem] text-[2rem] relative tracking-[0.5px] leading-[1rem] font-medium inline-block shrink-0 z-[1] mq450:text-[1.188rem] mq450:leading-[0.813rem]"
                placeholder="Nhập email của bạn tại đây"
            />
              </div>
              <div
                className="flex flex-row items-start justify-start cursor-pointer z-[2] text-[1.25rem] text-m3-sys-light-on-primary"
                onClick={onGroupContainerClick}
              >
                <div className="rounded-sm bg-m3-sys-light-primary overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start py-[1.25rem] px-[2.75rem]">
                    <div className="w-[8.563rem] relative tracking-[0.1px] leading-[1.25rem] font-medium flex items-center mq450:text-[1rem] mq450:leading-[1rem]">
                      <span className="w-full">
                        <p className="m-0">{`Để EduTracker `}</p>
                        <p className="m-0">giúp bạn</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[42.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[1.375rem] text-schemes-tertiary">
            <div className="w-[15rem] relative leading-[1.75rem] flex items-center justify-center shrink-0 [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
              Trải nghiệm EduTracker
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
