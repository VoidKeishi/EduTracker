import { Icon } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onSectionHeader1Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  return (
    <div className="relative bg-schemes-surface w-full overflow-x-auto flex flex-col items-start justify-start gap-[0.062rem] leading-[normal] tracking-[normal] text-left text-[0.875rem] text-m3-sys-light-on-surface-variant font-m3-body-medium">
      <div className="w-[25.2rem] !m-[0] absolute bottom-[24rem] left-[27.6rem] rounded box-border flex flex-col items-start justify-start z-[2] border-[1px] border-solid border-schemes-outline">
        <div className="self-stretch rounded-t rounded-b-none flex flex-row flex-wrap items-start justify-start py-1 px-0 [row-gap:20px]">
          <div className="flex flex-col items-center justify-center p-1">
            <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center p-2">
                <img className="h-6 w-6 relative" alt="" src="/svgA/icon1.svg" />
              </div>
            </div>
          </div>
          <input
            className="w-[calc(100%_-_48px)] [border:none] [outline:none] bg-[transparent] h-12 flex-1 flex flex-col items-start justify-center py-3 px-0 box-border font-m3-body-medium text-base text-m3-sys-light-on-surface-variant min-w-[199px]"
            placeholder="Mật khẩu hiện tại*"
            type="text"
          />
          <div className="flex flex-col items-center justify-center p-1">
            <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center p-2 gap-[10px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/svgA/visibility-off.svg"
                />
                <img className="h-6 w-6 relative hidden min-h-[24px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="w-[1440px] flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full text-left text-sm text-m3-sys-dark-inverse-on-surface font-m3-body-medium">
        <div className="w-[360px] rounded-2xl bg-m3-sys-light-surface-container-low overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[52.5px] px-3 pb-[617px] box-border max-w-full z-[1] lg:pt-[34px] lg:pb-[401px] lg:box-border mq450:pt-[22px] mq450:pb-[261px] mq450:box-border">
          <div className="w-[121px] flex flex-row items-start justify-start pt-0 pb-[2.5px] pr-5 pl-0 box-border text-schemes-outline">
            <img
              className="h-[25px] w-[25px] relative object-cover"
              loading="lazy"
              alt=""
              src="/svgA/image-5@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
              <b className="self-stretch h-4 relative tracking-[0.1px] leading-[20px] font-semibold whitespace-pre-wrap inline-block shrink-0">
                {" "}
                Trở lại
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[18px] pr-2 pl-4 text-xl">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.1px] leading-[20px] font-medium font-inherit mq750:text-xl mq750:leading-[16px]">
              Cài đặt
            </h2>
          </div>
          <div
            className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[18px] px-4 cursor-pointer text-base"
            onClick={onSectionHeader1Click}
          >
            <div className="flex flex-row items-start justify-start">
              <a className="[text-decoration:none] relative tracking-[0.1px] leading-[20px] font-medium text-[inherit] inline-block min-w-[47px]">
                Chung
              </a>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/svgA/icon-theme.svg"
              />
              <div className="w-[260px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                  Chủ để
                </div>
              </div>
              <div className="w-[60px] relative tracking-[0.1px] leading-[20px] font-medium text-m3-sys-light-on-surface-variant text-right hidden">
                12 14h00
              </div>
            </div>
          </div>
          <div className="w-[294px] rounded-81xl overflow-hidden flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
            <div className="flex-1 flex flex-row items-start justify-start p-4 gap-[12px]">
              <img className = "h-[1.563rem] w-[1.563rem]" alt="" src="/svgA/icon-word.svg" />
              <div className="w-[198px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                  Chữ
                </div>
              </div>
              <div className="w-[93px] relative tracking-[0.1px] leading-[20px] font-medium text-m3-sys-light-on-surface-variant text-right hidden">
                14h10 - 17h30
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full text-m3-sys-light-on-surface-variant">
            <div className="flex-1 flex flex-row items-center justify-start py-4 pr-6 pl-4 box-border gap-[12px] max-w-full">
              <input className="m-0 h-6 w-6 relative" type="checkbox" />
              <div className="h-5 flex-1 relative tracking-[0.1px] leading-[20px] font-medium inline-block">
                Charts
              </div>
              <div className="w-[93px] relative tracking-[0.1px] leading-[20px] font-medium text-right hidden">
                19h30 - 21h00
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/svgA/icon-language.svg"
              />
              <div className="w-[260px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                  Ngôn ngữ
                </div>
              </div>
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-medium text-m3-sys-light-on-surface-variant text-right hidden">
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
          <div className="self-stretch rounded-81xl bg-m3-sys-light-primary-fixed overflow-hidden flex flex-row items-start justify-start max-w-full text-right text-m3-sys-light-on-secondary-container">
            <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/svgA/icon-51.svg"
              />
              <input
                className="w-[260px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-m3-body-medium font-semibold text-sm text-m3-sys-light-primary"
                placeholder="Hồ sơ"
                type="text"
              />
              <div className="w-8 relative tracking-[0.1px] leading-[20px] font-semibold hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start p-4 box-border gap-[12px] max-w-full">
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                alt=""
                src="/svgA/icon-61@2x.png"
              />
              <div className="w-[20rem] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[20px] font-medium">
                  Tài khoản
                </div>
              </div>
              <div className="w-20 relative tracking-[0.1px] leading-[20px] font-medium text-m3-sys-light-on-surface-variant text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full text-m3-sys-light-on-surface-variant">
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
            <div className="self-stretch h-px flex flex-row items-start justify-start pt-px px-4 pb-0 box-border z-[1]">
              <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
            </div>
            <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[18px] px-[15px] z-[2]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[127px]">
                  Điều khoản sử dụng
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full text-m3-sys-light-on-surface-variant">
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
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full text-m3-sys-light-on-surface-variant">
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
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full text-m3-sys-light-on-surface-variant">
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
        <section className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[702px] max-w-full text-center text-sm text-black-06 font-m3-body-medium mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq450:gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="w-[295px] flex flex-row items-start justify-start py-0 px-[65px] box-border mq750:pl-5 mq750:pr-5 mq750:box-border">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[18px] pr-3 pl-6">
                  <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-m3-sys-light-primary inline-block min-w-[46px]">
                    Cài đặt
                  </a>
                  <div className="flex flex-row items-start justify-start py-0 px-3">
                    <div className="relative tracking-[0.25px] leading-[20px] inline-block min-w-[6px]">
                      \
                    </div>
                  </div>
                  <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[20px] text-m3-sys-light-on-surface inline-block min-w-[53px]">
                    Cá nhân
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
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[22px] pb-2.5 box-border max-w-full text-left text-3xl text-black">
              <div className="w-[993px] flex flex-col items-end justify-start gap-[28px] max-w-full">
                <div className="w-[978px] flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <a className="[text-decoration:none] w-[146px] h-[33px] relative leading-[28px] text-[inherit] inline-block shrink-0 mq750:text-lg mq750:leading-[22px]">
                    Hồ sơ
                  </a>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-xs text-m3-sys-light-primary">
                    <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
                      <div className="w-[457px] flex flex-row items-start justify-start gap-[40px] max-w-[calc(100%_-_24px)] mq750:flex-wrap mq750:gap-[20px]">
                        <div className="h-14 w-[191px] rounded-t rounded-b-none flex flex-col items-start justify-start relative">
                          <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start border-[3px] border-solid border-m3-sys-light-primary">
                            <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-start justify-start py-1 pr-0 pl-4">
                              <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-0 pb-3 px-0 relative">
                                <div className="w-[57px] flex flex-row items-center justify-start py-0 px-0 box-border">
                                  <input
                                    className="w-full [border:none] [outline:none] font-m3-body-medium text-base bg-[transparent] h-6 flex-1 relative tracking-[0.5px] leading-[24px] text-m3-sys-light-on-surface text-left flex items-center min-w-[34px] p-0"
                                    placeholder="Nguyễn"
                                    type="text"
                                  />
                                  <img
                                    className="h-4 w-px relative"
                                    alt=""
                                    src="/svgA/caret.svg"
                                  />
                                </div>
                                <div className="w-6 !m-[0] absolute top-[-12px] left-[-4px] bg-schemes-surface flex flex-row items-center justify-start py-0 px-[3px] box-border">
                                  <div className="relative tracking-[0.4px] leading-[16px] inline-block min-w-[17px]">
                                    Họ
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] h-5 hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border z-[1] text-m3-sys-light-on-surface-variant">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[16px]">
                              Supporting text
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-t rounded-b-none flex flex-col items-start justify-start relative min-w-[147px] text-m3-sys-light-on-surface-variant">
                          <div className="self-stretch h-14 rounded box-border flex flex-col items-start justify-start border-[1px] border-solid border-schemes-outline">
                            <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-start justify-start py-1 pr-0 pl-4">
                              <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-0 pb-3 px-0 relative">
                                <input
                                  className="w-[73px] [border:none] [outline:none] bg-[transparent] h-6 flex flex-row items-center justify-start font-m3-body-medium text-base text-m3-sys-light-on-surface"
                                  placeholder="Đình Hiếu"
                                  type="text"
                                />
                                <div className="!m-[0] absolute top-[-12px] left-[-4px] bg-schemes-surface flex flex-row items-center justify-start py-0 px-1">
                                  <div className="relative tracking-[0.4px] leading-[16px] inline-block min-w-[21px]">
                                    Tên
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] h-5 hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border z-[1]">
                            <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[16px]">
                              Supporting text
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                        <div className="w-1 h-11 relative rounded-sm bg-m3-sys-dark-primary overflow-hidden shrink-0 [transform:_rotate(-180deg)]">
                          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-m3-state-layers-light-on-primary-opacity-008 hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[551px] relative max-w-full text-xs text-m3-sys-light-on-surface-variant mq750:h-auto mq750:min-h-[551]">
                  <h3 className="m-0 absolute top-[359px] left-[15px] text-3xl leading-[28px] font-normal font-inherit text-black inline-block w-[124px] h-7 mq750:text-lg mq750:leading-[22px]">
                    Tài Khoản
                  </h3>
                  <div className="absolute top-[327px] left-[0px] w-[993px] h-0 flex flex-row items-start justify-start pt-[0.5px] px-4 pb-0 box-border max-w-full">
                    <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
                  </div>
                  <div className="absolute top-[8px] left-[15px] rounded-t rounded-b-none w-[210px] h-14 flex flex-col items-start justify-start">
                    <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start border-[1px] border-solid border-schemes-outline">
                      <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-start justify-start py-1 pr-0 pl-4">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-0 pb-3 px-0 relative">
                          <input
                            className="w-[76px] [border:none] [outline:none] bg-[transparent] h-6 flex flex-row items-center justify-start font-m3-body-medium text-base text-m3-sys-light-on-surface"
                            placeholder="20215049"
                            type="text"
                          />
                          <div className="w-[43px] !m-[0] absolute top-[-12px] left-[-4px] bg-schemes-surface flex flex-row items-center justify-start py-0 px-[3px] box-border whitespace-nowrap">
                            <div className="relative tracking-[0.4px] leading-[16px] inline-block min-w-[36px]">
                              Mã số
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] h-5 hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border z-[1]">
                      <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[16px]">
                        Supporting text
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[249px] w-[360px] flex flex-row items-start justify-start pt-2 px-0 pb-[487px] box-border max-w-full z-[1] text-center text-sm">
                    <div className="rounded-2xl bg-m3-sys-light-surface-container-high overflow-hidden hidden flex-col items-start justify-start max-w-full">
                      <div className="w-[360px] flex flex-row items-center justify-between min-h-[64px] max-w-full gap-[20px] mq750:flex-wrap">
                        <div className="flex flex-row items-center justify-center">
                          <div className="h-12 flex flex-col items-center justify-center">
                            <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1">
                              <div className="flex flex-row items-center justify-center p-2">
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="h-10 flex flex-col items-start justify-start">
                            <div className="w-16 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-2.5 pr-1 pl-2 box-border gap-[8px]">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Aug
                              </div>
                              <input
                                className="m-0 h-[18px] w-[18px] relative"
                                type="checkbox"
                              />
                            </div>
                          </div>
                          <div className="h-12 flex flex-col items-center justify-center">
                            <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1">
                              <div className="flex flex-row items-center justify-center p-2">
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                          <div className="h-12 flex flex-col items-center justify-center">
                            <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1">
                              <div className="flex flex-row items-center justify-center p-2">
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="h-10 flex flex-col items-start justify-start">
                            <div className="w-[71px] flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-2.5 pr-1 pl-2 box-border gap-[8px]">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                2023
                              </div>
                              <img
                                className="h-[18px] w-[18px] relative"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="h-12 flex flex-col items-center justify-center">
                            <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1">
                              <div className="flex flex-row items-center justify-center p-2">
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[360px] flex flex-col items-end justify-start pt-0 px-3 pb-1 box-border max-w-full text-base text-m3-sys-light-on-surface">
                        <div className="flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
                          <div className="w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                            <div className="relative tracking-[0.5px] leading-[24px]">
                              S
                            </div>
                          </div>
                          <div className="w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                            <div className="relative tracking-[0.5px] leading-[24px]">
                              M
                            </div>
                          </div>
                          <div className="w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                            <div className="relative tracking-[0.5px] leading-[24px]">
                              T
                            </div>
                          </div>
                          <div className="w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                            <div className="relative tracking-[0.5px] leading-[24px]">
                              W
                            </div>
                          </div>
                          <div className="w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                            <div className="relative tracking-[0.5px] leading-[24px]">
                              T
                            </div>
                          </div>
                          <div className="w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                            <div className="relative tracking-[0.5px] leading-[24px]">
                              F
                            </div>
                          </div>
                          <div className="w-12 rounded-81xl h-12 flex flex-row items-center justify-center">
                            <div className="relative tracking-[0.5px] leading-[24px]">
                              S
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-m3-sys-light-on-surface-variant mq750:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center p-2.5 box-border">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  26
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center p-2.5 box-border">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  27
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center p-2.5 box-border">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  28
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center p-2.5 box-border">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  29
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center p-2.5 box-border">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  30
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center p-2.5 box-border">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  31
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px] text-m3-sys-light-on-surface">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  1
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  2
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  3
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  4
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  5
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  6
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  7
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  8
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  9
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  10
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  11
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  12
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  13
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  14
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  15
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  16
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-center justify-center relative gap-[10px] min-w-[47px] max-w-[48px] min-h-[48px] text-m3-sys-light-on-primary">
                            <div className="w-4/5 h-10 absolute !m-[0] top-[calc(50%_-_20px)] right-[48.75%] left-[-28.75%] bg-lavender hidden z-[0]" />
                            <div className="w-4/5 h-10 absolute !m-[0] top-[calc(50%_-_20px)] right-[-31.25%] left-[51.25%] bg-lavender hidden z-[1]" />
                            <div className="w-10 h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden shrink-0 flex flex-row items-start justify-start z-[2]">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  17
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  18
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  19
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  20
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  21
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  22
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  23
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  24
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  25
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  26
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  27
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  28
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  29
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-m3-sys-light-on-surface-variant mq750:flex-wrap">
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px] text-m3-sys-light-on-surface">
                            <div className="h-10 flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-0 px-1 box-border">
                              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                                <div className="relative tracking-[0.5px] leading-[24px]">
                                  30
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center py-2.5 px-[9px] box-border">
                                <div className="h-6 relative tracking-[0.5px] leading-[24px] inline-block">
                                  1
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center py-2.5 px-[9px] box-border">
                                <div className="h-6 relative tracking-[0.5px] leading-[24px] inline-block">
                                  2
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center py-2.5 px-[9px] box-border">
                                <div className="h-6 relative tracking-[0.5px] leading-[24px] inline-block">
                                  3
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center py-2.5 px-[9px] box-border">
                                <div className="h-6 relative tracking-[0.5px] leading-[24px] inline-block">
                                  4
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center py-2.5 px-[9px] box-border">
                                <div className="h-6 relative tracking-[0.5px] leading-[24px] inline-block">
                                  5
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-center min-w-[47px] max-w-[48px] min-h-[48px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 px-1">
                              <div className="h-10 flex-1 flex flex-row items-center justify-center py-2.5 px-[9px] box-border">
                                <div className="h-6 relative tracking-[0.5px] leading-[24px] inline-block">
                                  6
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[360px] flex flex-row items-start justify-between py-2 px-3 box-border max-w-full gap-[0px] [row-gap:20px] text-m3-sys-light-primary mq750:flex-wrap">
                        <div className="h-10 rounded-81xl overflow-hidden flex flex-col items-center justify-center">
                          <div className="w-[58px] flex-1 flex flex-row items-center justify-center py-2.5 px-3 box-border">
                            <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                              Clear
                            </div>
                          </div>
                        </div>
                        <div className="h-10 w-[278px] flex flex-row items-end justify-end gap-[8px]">
                          <div className="self-stretch rounded-81xl overflow-hidden flex flex-col items-center justify-center">
                            <div className="w-[68px] flex-1 flex flex-row items-center justify-center py-2.5 px-3 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Cancel
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch rounded-81xl overflow-hidden flex flex-col items-center justify-center">
                            <div className="w-[43px] flex-1 flex flex-row items-center justify-center py-2.5 px-3 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                OK
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-14 w-[312px] rounded-t rounded-b-none flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border relative text-left text-base text-m3-sys-light-on-surface">
                      <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start border-[3px] border-solid border-m3-sys-light-primary">
                        <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-start justify-start py-1 pr-0 pl-4">
                          <div className="self-stretch flex-1 flex flex-col items-start justify-center pt-0 pb-3 px-0 relative">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative tracking-[0.5px] leading-[24px] inline-block min-w-[91px]">
                                20/05/2003
                              </div>
                              <img className="h-4 w-0 relative hidden" alt="" />
                            </div>
                            <div className="!m-[0] absolute top-[-12px] left-[-4px] bg-schemes-surface flex flex-row items-center justify-start py-0 px-[3px] whitespace-nowrap text-xs text-m3-sys-light-primary">
                              <div className="relative tracking-[0.4px] leading-[16px] inline-block min-w-[57px]">
                                Ngày sinh
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center p-1">
                            <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                              <div className="bg-m3-state-layers-light-on-surface-variant-opacity-012 flex flex-row items-center justify-center p-2">
                                <img
                                  className="h-6 w-6 relative"
                                  loading="lazy"
                                  alt=""
                                  src="/svgA/iconstoday-24px.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] flex flex-row items-start justify-start pt-1 px-4 pb-0 box-border text-xs text-m3-sys-light-on-surface-variant">
                        <div className="flex-1 relative tracking-[0.4px] leading-[16px]">
                          DD/MM/YYYY
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[100px] left-[15px] rounded-t rounded-b-none w-[342px] h-14 flex flex-col items-start justify-start z-[2]">
                    <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start border-[1px] border-solid border-schemes-outline">
                      <div className="self-stretch flex-1 rounded-t rounded-b-none flex flex-row items-start justify-start py-1 px-4">
                        <div className="self-stretch w-[199px] flex flex-col items-start justify-center pt-0 pb-3 px-0 box-border relative">
                          <input
                            className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-center justify-start font-m3-body-medium text-base text-m3-sys-light-on-surface min-w-[119px]"
                            placeholder="Đại học Bách Khoa Hà Nội"
                            type="text"
                          />
                          <div className="!m-[0] absolute top-[-12px] left-[-4px] bg-schemes-surface flex flex-row items-center justify-start py-0 px-[3px] whitespace-nowrap">
                            <div className="relative tracking-[0.4px] leading-[16px] inline-block min-w-[73px]">
                              Nơi công tác
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] h-5 hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border z-[1]">
                      <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[16px]">
                        Supporting text
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[188px] left-[16px] rounded-lg bg-m3-sys-light-on-primary w-[146px] overflow-hidden flex flex-row items-start justify-start text-center text-sm text-m3-sys-light-secondary">
                    <div className="flex-1 flex flex-row items-start justify-start py-1.5 px-2 gap-[8px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-[18px] h-[18px] relative"
                          alt=""
                          src="/svgA/icon-131.svg"
                        />
                      </div>
                      <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[100px]">
                        Bạn là sinh viên
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-m3-sys-light-primary absolute top-[246px] left-[15px] rounded-81xl w-[90px] overflow-hidden flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 gap-[7px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-[18px] h-[18px] relative"
                          alt=""
                          src="/svgA/icon-14.svg"
                        />
                      </div>
                      <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-m3-body-medium text-m3-sys-light-on-primary text-center inline-block min-w-[25px]">
                        Lưu
                      </div>
                    </div>
                  </button>
                  <div className="absolute top-[428px] left-[16px] rounded-t rounded-b-none w-[406px] flex flex-col items-start justify-start max-w-full z-[2] text-base text-m3-sys-light-on-surface">
                    <div className="self-stretch rounded box-border flex flex-col items-start justify-start max-w-full border-[3px] border-solid border-m3-sys-light-primary">
                      <div className="self-stretch rounded-t rounded-b-none flex flex-row items-start justify-start py-1 pr-4 pl-0 box-border max-w-full [row-gap:20px] mq750:flex-wrap">
                        <div className="flex flex-col items-center justify-center p-1">
                          <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                            <div className="flex flex-row items-center justify-center p-2">
                              <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/svgA/icon-151.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-center pt-0 pb-3 px-0 box-border relative min-w-[222px] min-h-[48px] max-w-full">
                          <div className="flex flex-row items-center justify-start py-0 px-0">
                            <div className="relative tracking-[0.5px] leading-[24px] whitespace-nowrap">
                              nguyendinhhieu123456789@gmail.com
                            </div>
                            <img
                              className="h-4 w-px relative"
                              alt=""
                              src="/svgA/caret.svg"
                            />
                          </div>
                          <div className="w-[45px] !m-[0] absolute top-[-12px] left-[-36px] bg-m3-sys-light-on-primary flex flex-row items-center justify-start py-0 px-[3px] box-border text-xs text-m3-sys-light-primary">
                            <div className="relative tracking-[0.4px] leading-[16px] inline-block min-w-[38px]">
                              Email*
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full !m-[0] absolute right-[0px] bottom-[-20px] left-[0px] hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border max-w-full z-[1] text-xs text-m3-sys-light-on-surface-variant">
                      <div className="h-4 flex-1 relative tracking-[0.4px] leading-[16px] inline-block max-w-full">
                        *required
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[561px] flex flex-row items-start justify-start py-0 px-[78px] box-border max-w-full mq450:pl-[39px] mq450:pr-[39px] mq450:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                        <div className="self-stretch rounded flex flex-col items-start justify-start border-[1px] border-solid border-schemes-outline">
                          <div className="self-stretch rounded-t rounded-b-none flex flex-row items-start justify-start py-1 px-0 [row-gap:20px] mq750:flex-wrap">
                            <div className="flex flex-col items-center justify-center p-1">
                              <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <div className="flex flex-row items-center justify-center p-2">
                                  <img
                                    className="h-6 w-6 relative"
                                    alt=""
                                    src="/svgA/icon1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <input
                              className="w-[calc(100%_-_48px)] [border:none] [outline:none] bg-[transparent] h-12 flex-1 flex flex-col items-start justify-center py-3 px-0 box-border font-m3-body-medium text-base text-m3-sys-light-on-surface-variant min-w-[199px]"
                              placeholder="Mật khẩu mới*"
                              type="text"
                            />
                            <div className="flex flex-col items-center justify-center p-1">
                              <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <div className="flex flex-row items-center justify-center p-2 gap-[10px]">
                                  <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0"
                                    alt=""
                                    src="/svgA/visibility-off.svg"
                                  />
                                  <img
                                    className="h-6 w-6 relative hidden min-h-[24px]"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded flex flex-col items-start justify-start border-[1px] border-solid border-schemes-outline">
                          <div className="self-stretch rounded-t rounded-b-none flex flex-row items-start justify-start py-1 px-0 [row-gap:20px] mq750:flex-wrap">
                            <div className="flex flex-col items-center justify-center p-1">
                              <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <div className="flex flex-row items-center justify-center p-2">
                                  <img
                                    className="h-6 w-6 relative"
                                    alt=""
                                    src="/svgA/icon1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <input
                              className="w-[calc(100%_-_48px)] [border:none] [outline:none] bg-[transparent] h-12 flex-1 flex flex-col items-start justify-center py-3 px-0 box-border font-m3-body-medium text-base text-m3-sys-light-on-surface-variant min-w-[199px]"
                              placeholder="Nhập lại mật khẩu mới*"
                              type="text"
                            />
                            <div className="flex flex-col items-center justify-center p-1">
                              <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <div className="flex flex-row items-center justify-center p-2 gap-[10px]">
                                  <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0"
                                    alt=""
                                    src="/svgA/visibility-off.svg"
                                  />
                                  <img
                                    className="h-6 w-6 relative hidden min-h-[24px]"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-m3-sys-light-primary w-[90px] rounded-81xl overflow-hidden flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-4 gap-[7px]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <img
                            className="w-[18px] h-[18px] relative"
                            alt=""
                            src="/svgA/icon-14.svg"
                          />
                        </div>
                        <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-m3-body-medium text-m3-sys-light-on-primary text-center inline-block min-w-[25px]">
                          Lưu
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-m3-sys-light-error w-[308px] rounded-81xl overflow-hidden flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-[110px] gap-[8px] mq750:pl-5 mq750:pr-5 mq750:box-border">
                    <img className="h-[18px] w-[18px] relative hidden" alt="" />
                    <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-m3-body-medium text-m3-sys-light-on-primary text-center inline-block min-w-[79px]">
                      ĐĂNG XUẤT
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileSettings;
