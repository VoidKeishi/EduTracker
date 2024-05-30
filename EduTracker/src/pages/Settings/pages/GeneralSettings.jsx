import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DesktopSettingV = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Desktop - KPI " to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-schemes-surface w-full overflow-x-auto flex flex-col items-start justify-start gap-[1px] leading-[normal] tracking-[normal] text-left text-sm text-m3-sys-light-on-surface-variant font-m3-body-medium">
      <img
        className="w-6 h-6 absolute !m-[0] bottom-[440px] left-[595px] z-[2]"
        loading="lazy"
        alt=""
        src="/iconsarrow-drop-down-24px.svg"
      />
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[1]"
        alt=""
        src="/icon.svg"
      />
      <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium hidden z-[2]">
        Chữ
      </div>
      <div className="w-[93px] relative tracking-[0.1px] leading-[20px] font-medium text-right hidden z-[3]">
        14h10 - 17h30
      </div>
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0 hidden z-[4]"
        loading="lazy"
        alt=""
        src="/icon-1.svg"
      />
      <b className="self-stretch relative tracking-[0.1px] leading-[20px] font-semibold text-m3-sys-light-on-secondary-container hidden z-[5]">
        Chủ để
      </b>
      <div className="w-[60px] relative tracking-[0.1px] leading-[20px] font-semibold text-m3-sys-light-on-secondary-container text-right hidden z-[6]">
        12 14h00
      </div>
      <header className="w-[1440px] h-14 bg-m3-sys-light-primary overflow-hidden shrink-0 flex flex-row items-start justify-between py-1 px-4 box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-center text-5xl text-m3-white font-icon-medium">
        <div className="h-12 w-[360px] bg-m3-sys-light-primary flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
          <div
            className="h-[50.8px] w-[213px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="rounded-21xl flex flex-row items-start justify-start p-3">
              <div className="relative leading-[100%] inline-block min-w-[24px]">
                menu
              </div>
              <div className="w-[23px] relative leading-[20px] font-m3-body-medium text-black-087 hidden">
                DI
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/track-achieve-excel-1@2x.png"
              />
            </div>
          </div>
          <div className="w-[360px] hidden flex-col items-start justify-end max-w-full">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-m3-sys-dark-inverse-surface" />
          </div>
        </div>
        <div className="self-stretch w-[498px] flex flex-row items-end justify-start gap-[28px] max-w-full text-[15px] text-m3-sys-light-primary font-m3-body-medium">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
            <div className="self-stretch rounded-21xl bg-whitesmoke flex flex-row items-start justify-start pt-[10.8px] px-3 pb-2.5 gap-[48px] whitespace-nowrap">
              <div className="h-[37px] w-[315px] relative rounded-21xl bg-whitesmoke hidden" />
              <img
                className="h-4 w-4 relative min-h-[16px] z-[1]"
                alt=""
                src="/search-icon.svg"
              />
              <div className="w-[157.5px] relative tracking-[0.5px] leading-[16px] font-medium inline-block shrink-0 z-[1] mq950:hidden">
                Tìm kiếm gì đó nào
              </div>
            </div>
          </div>
          <div className="self-stretch w-[155px] flex flex-row items-start justify-start gap-[12.9px] text-5xl text-black-087">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-1 pl-0">
              <div className="w-[44.3px] h-12 rounded-21xl flex flex-row items-center justify-center py-0 px-2.5 box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/notifications.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-[0.603] rounded-21xl flex flex-row items-center justify-center py-0 px-2.5">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/dark-mode.svg"
              />
              <div className="w-[23px] relative leading-[20px] hidden">DI</div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div
                className="rounded-21xl bg-m3-white flex flex-row items-start justify-start p-1.5 cursor-pointer"
                onClick={onButtonContainerClick}
              >
                <img
                  className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0"
                  alt=""
                  src="/user-imagesuser-images.svg"
                />
                <div className="w-[23px] relative leading-[20px] hidden">
                  DI
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-[1440px] flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full text-left text-sm text-m3-sys-light-on-surface-variant font-m3-body-medium">
        <div className="w-[360px] rounded-2xl bg-m3-sys-light-surface-container-low overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[52.5px] px-3 pb-[437px] box-border max-w-full z-[1] mq700:pt-[22px] mq700:pb-[185px] mq700:box-border mq975:pt-[34px] mq975:pb-[284px] mq975:box-border">
          <div className="w-[121px] flex flex-row items-start justify-start pt-0 pb-[2.5px] pr-5 pl-0 box-border text-schemes-outline">
            <img
              className="h-[25px] w-[25px] relative object-cover"
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
              <b className="self-stretch h-4 relative tracking-[0.1px] leading-[20px] font-semibold whitespace-pre-wrap inline-block shrink-0">
                {" "}
                Trở lại
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[18px] pr-2 pl-4 text-[25px]">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.1px] leading-[20px] font-medium font-inherit mq450:text-[20px] mq450:leading-[16px]">
              Cài đặt
            </h2>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start py-[18px] px-4 text-base">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                Chung
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl bg-m3-sys-light-primary-fixed overflow-hidden flex flex-row items-start justify-start max-w-full text-m3-sys-light-on-secondary-container">
            <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/icon-1.svg"
              />
              <div className="w-[260px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <b className="self-stretch relative tracking-[0.1px] leading-[20px] font-semibold">
                  Chủ để
                </b>
              </div>
              <div className="w-[60px] relative tracking-[0.1px] leading-[20px] font-semibold text-right hidden">
                12 14h00
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-4 pr-6 pl-4 box-border gap-[12px] max-w-full">
              <img className="h-6 w-6 relative" alt="" />
              <div className="h-5 flex-1 relative tracking-[0.1px] leading-[20px] font-medium inline-block">
                Charts
              </div>
              <div className="w-[93px] relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                19h30 - 21h00
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
                <input
                  className="m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  type="checkbox"
                />
                <div className="w-[260px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                    Chữ
                  </div>
                </div>
                <div className="w-[93px] relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                  14h10 - 17h30
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/icon-5.svg"
                />
                <div className="w-[260px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                    Ngôn ngữ
                  </div>
                </div>
                <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                  100+
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch h-px flex flex-row items-start justify-start pt-px px-4 pb-0 box-border">
                <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
              </div>
              <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[18px] px-4">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[52px]">
                    Cá nhân
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/icon-6.svg"
              />
              <div className="w-[260px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                  Hồ sơ
                </div>
              </div>
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                loading="lazy"
                alt=""
                src="/icon-7@2x.png"
              />
              <div className="w-[260px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                  Tài khoản
                </div>
              </div>
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-4 pr-6 pl-4 box-border gap-[12px] max-w-full">
              <img className="h-6 w-6 relative" alt="" />
              <div className="h-5 flex-1 relative tracking-[0.1px] leading-[20px] font-medium inline-block">
                Label
              </div>
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch h-px flex flex-row items-start justify-start pt-px px-4 pb-0 box-border">
              <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
            </div>
            <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[18px] px-[15px] z-[1]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[127px]">
                  Điều khoản sử dụng
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-4 pr-6 pl-4 box-border gap-[12px] max-w-full">
              <img className="h-6 w-6 relative" alt="" />
              <div className="h-5 flex-1 relative tracking-[0.1px] leading-[20px] font-medium inline-block">
                Label
              </div>
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-4 pr-6 pl-4 box-border gap-[12px] max-w-full">
              <img className="h-6 w-6 relative" alt="" />
              <div className="h-5 flex-1 relative tracking-[0.1px] leading-[20px] font-medium inline-block">
                Label
              </div>
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-4 pr-6 pl-4 box-border gap-[12px] max-w-full">
              <img className="h-6 w-6 relative" alt="" />
              <div className="h-5 flex-1 relative tracking-[0.1px] leading-[20px] font-medium inline-block">
                Label
              </div>
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[702px] max-w-full text-3xl text-black mq950:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[44px] max-w-full mq700:gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm text-black-06">
              <div className="w-[284px] flex flex-row items-start justify-start py-0 px-[65px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[18px] pr-3 pl-6 z-[1]">
                  <div className="flex-1 relative tracking-[0.25px] leading-[20px] text-m3-sys-light-primary inline-block min-w-[46px]">
                    Cài đặt
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-3">
                    <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[6px]">
                      \
                    </div>
                  </div>
                  <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-m3-sys-light-on-surface inline-block min-w-[42px]">
                    Chung
                  </a>
                  <div className="hidden flex-col items-center justify-center py-0 px-3">
                    <div className="relative tracking-[0.25px] leading-[20px]">
                      \
                    </div>
                  </div>
                  <div className="self-stretch w-[39px] relative tracking-[0.25px] leading-[20px] text-black-087 hidden items-center justify-center">
                    Link 2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-0 flex flex-row items-start justify-start pt-[0.5px] px-4 pb-0 box-border max-w-full">
                <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
              </div>
            </div>
            <div className="w-[1022px] flex flex-row items-start justify-end pt-0 px-[22px] pb-6 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
                <h3 className="m-0 w-[146px] h-[33px] relative text-inherit leading-[28px] font-normal font-inherit inline-block shrink-0 mq450:text-lg mq450:leading-[22px]">
                  Chủ đề
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-center text-xs text-m3-sys-light-on-surface">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                    <div className="w-[585px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-[calc(100%_-_24px)]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[47px] mq700:flex-wrap mq700:gap-[23px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[175px]">
                          <div className="self-stretch h-[68px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-m3-white flex flex-row items-start justify-start pt-0 px-2 pb-0 box-border gap-[8px]">
                            <div className="flex-1 flex flex-col items-center justify-center pt-3 px-0 pb-4 gap-[4px]">
                              <div className="rounded-2xl bg-black-highlight overflow-hidden flex flex-col items-center justify-center">
                                <div className="flex flex-row items-center justify-center py-1 px-5">
                                  <img
                                    className="h-6 w-6 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/icon-12.svg"
                                  />
                                </div>
                              </div>
                              <b className="self-stretch relative tracking-[0.5px] leading-[16px] font-semibold">
                                Label
                              </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center pt-3 px-0 pb-4 gap-[4px] text-m3-sys-light-on-surface-variant">
                              <div className="self-stretch rounded-2xl flex flex-row items-center justify-center py-0 px-[23px]">
                                <div className="flex flex-row items-center justify-center py-1 px-5">
                                  <img
                                    className="h-6 w-6 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/icon-13.svg"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch relative tracking-[0.5px] leading-[16px] font-medium">
                                Label
                              </div>
                            </div>
                            <div className="h-20 flex-1 flex flex-col items-center justify-center pt-3 px-0 pb-4 box-border gap-[4px] text-2xs text-m3-white">
                              <div className="flex-1 rounded-2xl flex flex-row items-center justify-center pt-0.5 px-[27px] pb-1 relative">
                                <div className="w-[25px] flex flex-row items-center justify-center">
                                  <img
                                    className="h-6 w-6 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/icon-13.svg"
                                  />
                                </div>
                                <div className="w-2 !m-[0] absolute top-[2px] left-[43.5px] rounded-81xl bg-m3-sys-light-primary overflow-hidden shrink-0 flex flex-row items-center justify-center min-w-[16px] max-w-[34px] z-[1]">
                                  <div className="flex-1 relative tracking-[0.5px] leading-[16px] font-medium inline-block min-w-[8px]">
                                    3
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch relative text-xs tracking-[0.5px] leading-[16px] font-medium text-m3-sys-light-on-surface-variant">
                                Label
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[71px] pl-[63px] text-sm text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] [debug_commit:bf4bc93]"
                                loading="lazy"
                                alt=""
                                src="/iconsradio-button-checked.svg"
                              />
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <div className="ml-[-3px] w-[114px] relative tracking-[0.25px] leading-[20px] flex items-center justify-center shrink-0 [debug_commit:bf4bc93]">
                                  Chế độ sáng
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-end justify-start gap-[10px] min-w-[175px] text-m3-sys-dark-inverse-surface">
                          <div className="self-stretch h-[68px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-m3-sys-dark-on-primary flex flex-row items-start justify-start pt-0 px-2 pb-0 box-border gap-[8px]">
                            <div className="flex-1 flex flex-col items-center justify-center pt-3 px-0 pb-4 gap-[4px]">
                              <div className="rounded-2xl bg-m3-white overflow-hidden flex flex-col items-center justify-center">
                                <div className="flex flex-row items-center justify-center py-1 px-5">
                                  <img
                                    className="h-6 w-6 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/icon-15.svg"
                                  />
                                </div>
                              </div>
                              <b className="self-stretch relative tracking-[0.5px] leading-[16px] font-semibold">
                                Label
                              </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center pt-3 px-0 pb-4 gap-[4px] text-m3-sys-light-outline-variant">
                              <div className="self-stretch rounded-2xl flex flex-row items-center justify-center py-0 px-[23px]">
                                <div className="flex flex-row items-center justify-center py-1 px-5">
                                  <img
                                    className="h-6 w-6 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/icon-16.svg"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch relative tracking-[0.5px] leading-[16px] font-medium">
                                Label
                              </div>
                            </div>
                            <div className="h-20 flex-1 flex flex-col items-center justify-center pt-3 px-0 pb-4 box-border gap-[4px] text-2xs text-m3-sys-dark-on-primary">
                              <div className="flex-1 rounded-2xl flex flex-row items-center justify-center pt-0.5 px-[27px] pb-1 relative">
                                <div className="w-[25px] flex flex-row items-center justify-center">
                                  <img
                                    className="h-6 w-6 relative"
                                    loading="lazy"
                                    alt=""
                                    src="/icon-16.svg"
                                  />
                                </div>
                                <div className="!m-[0] absolute top-[2px] left-[44px] rounded-81xl bg-m3-sys-dark-primary overflow-hidden flex flex-col items-center justify-center min-w-[16px] max-w-[34px] z-[1]">
                                  <div className="relative tracking-[0.5px] leading-[16px] font-medium inline-block min-w-[7px]">
                                    3
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch relative text-xs tracking-[0.5px] leading-[16px] font-medium text-m3-sys-light-outline-variant">
                                Label
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[65px] pl-[68px] text-sm text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] [debug_commit:bf4bc93]"
                                loading="lazy"
                                alt=""
                                src="/iconsradio-button-unchecked.svg"
                              />
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <div className="ml-[-2px] w-[114px] h-6 relative tracking-[0.25px] leading-[20px] flex items-center justify-center shrink-0 [debug_commit:bf4bc93]">
                                  Chế độ tối
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-11 w-1 relative rounded-sm bg-m3-sys-dark-primary overflow-hidden shrink-0 [transform:_rotate(-180deg)]">
                      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-m3-state-layers-light-on-primary-opacity-008 hidden" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1037px] flex flex-row items-start justify-end py-0 px-[22px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full mq700:gap-[16px]">
                <div className="self-stretch h-0 flex flex-row items-start justify-start pt-[0.5px] px-4 pb-0 box-border max-w-full">
                  <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
                </div>
                <div className="w-[154px] flex flex-row items-start justify-start py-0 px-[15px] box-border">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[28px] font-normal font-inherit mq450:text-lg mq450:leading-[22px]">
                    Chữ
                  </h3>
                </div>
                <div className="w-[609px] flex flex-row items-start justify-start pt-0 px-3.5 pb-[5px] box-border max-w-full text-base">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
                      <div className="w-[191px] h-[67px] relative">
                        <div className="absolute top-[0px] left-[0px] tracking-[0.15px] leading-[24px] font-medium inline-block w-[148px] h-[34px]">
                          Cỡ chữ
                        </div>
                        <div className="absolute top-[23px] left-[143px] rounded-81xl bg-m3-sys-dark-inverse-surface w-12 flex flex-row items-start justify-start py-3 px-[15px] box-border z-[1] text-center text-sm text-m3-sys-dark-inverse-on-surface">
                          <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[17px]">
                            18
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-4 flex flex-row items-start justify-end max-w-full">
                        <div className="self-stretch w-[532px] rounded-2xl overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
                          <div className="self-stretch flex-1 relative rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-2xl bg-m3-sys-light-primary max-w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1 box-border max-w-full text-center text-sm">
                      <div className="w-[527px] flex flex-row items-end justify-between gap-[20px] max-w-full mq450:flex-wrap">
                        <div className="w-[50px] relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center shrink-0">
                          Nhỏ
                        </div>
                        <h1 className="m-0 w-[89px] relative text-[30px] tracking-[0.1px] leading-[20px] font-medium font-inherit flex items-center justify-center shrink-0 mq950:text-5xl mq950:leading-[16px] mq450:text-lg mq450:leading-[12px]">
                          Lớn
                        </h1>
                      </div>
                    </div>
                    <div className="w-[163px] flex flex-row items-start justify-start pt-0 px-px pb-3 box-border">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
                        <div className="w-[148px] relative tracking-[0.15px] leading-[24px] font-medium inline-block">
                          Font chữ
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end text-mid">
                          <div className="flex flex-row items-start justify-start gap-[12px]">
                            <input
                              className="cursor-pointer m-0 h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                              type="radio"
                              name="radioGroup-1"
                            />
                            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                              <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[60px]">
                                Cổ điển
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer className="flex flex-row items-start justify-start py-0 px-[66px] text-left text-mid text-black font-ribeye mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <div className="flex flex-row items-start justify-start gap-[13px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <input
                            className="cursor-pointer m-0 w-6 h-6 relative overflow-hidden shrink-0"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="relative tracking-[0.1px] leading-[20px] inline-block min-w-[88px]">
                          Sáng tạo
                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
                <div className="self-stretch h-0 flex flex-row items-start justify-start pt-[0.5px] px-4 pb-0 box-border max-w-full">
                  <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
                </div>
                <section className="w-[401px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-center text-3xl text-black font-m3-body-medium">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <h3 className="m-0 relative text-inherit leading-[28px] font-normal font-inherit inline-block min-w-[97px] mq450:text-lg mq450:leading-[22px]">
                      Ngôn ngữ
                    </h3>
                    <div className="w-[200px] flex flex-col items-start justify-start text-left text-base text-m3-sys-light-on-surface">
                      <div className="self-stretch flex flex-row items-start justify-start py-4 px-3 gap-[12px]">
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/icon-5.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 relative tracking-[0.5px] leading-[24px]">
                            Tiếng việt
                          </div>
                          <div className="self-stretch w-[104px] relative text-sm tracking-[0.25px] leading-[20px] text-m3-sys-light-on-surface-variant hidden">
                            Supporting text
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/trailing-element.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[9px] px-0 pb-[7px]">
                        <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopSettingV;
