import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GeneralSettings = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Desktop - KPI " to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-schemes-surface w-full overflow-x-auto flex flex-col items-start justify-start gap-[0.062rem] leading-[normal] tracking-[normal] text-left text-[0.875rem] text-m3-sys-light-on-surface-variant font-m3-body-medium">
      <img
        className="w-[1.5rem] h-[1.5rem] absolute !m-[0] bottom-[27.5rem] left-[37.188rem] z-[2]"
        loading="lazy"
        alt=""
        src="/svgA/iconsarrow-drop-down-24px.svg"
      />
      <img
        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden z-[1]"
        alt=""
        src="/svgA/icon.svg"
      />
      <div className="self-stretch relative tracking-[0.1px] leading-[1.25rem] font-medium hidden z-[2]">
        Chữ
      </div>
      <div className="w-[5.813rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden z-[3]">
        14h10 - 17h30
      </div>
      <img
        className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 hidden z-[4]"
        alt=""
        src="/svgA/icon1.svg"
      />
      <div className="self-stretch relative tracking-[0.1px] leading-[1.25rem] font-semibold text-m3-sys-light-on-secondary-container hidden z-[5]">
        Chủ để
      </div>
      <div className="w-[3.75rem] relative tracking-[0.1px] leading-[1.25rem] font-semibold text-m3-sys-light-on-secondary-container text-right hidden z-[6]">
        12 14h00
      </div>
      <main className="w-[90rem] flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-full text-left text-[0.875rem] text-m3-sys-light-on-surface-variant font-m3-body-medium">
        <div className="bg-[#EFF5F6] w-[22.5rem] rounded-2xl bg-m3-sys-light-surface-container-low overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[3.281rem] px-[0.75rem] pb-[27.312rem] box-border max-w-full z-[1] mq700:pt-[1.375rem] mq700:pb-[11.563rem] mq700:box-border mq975:pt-[2.125rem] mq975:pb-[17.75rem] mq975:box-border">
          <div className="w-[7.563rem] flex flex-row items-start justify-start pt-[0rem] pb-[0.156rem] pr-[1.25rem] pl-[0rem] box-border text-schemes-outline">
            <img
              className="h-[1.563rem] w-[1.563rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/svgA/image-5@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.281rem] px-[0rem] pb-[0rem]">
              <b className="self-stretch h-[1rem] relative tracking-[0.1px] leading-[1.25rem] font-semibold whitespace-pre-wrap inline-block shrink-0">
                {" "}
                Trở lại
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[1.125rem] pr-[0.5rem] pl-[1rem] text-[1.563rem]">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.1px] leading-[1.25rem] font-medium font-inherit mq450:text-[1.25rem] mq450:leading-[1rem]">
              Cài đặt
            </h2>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start py-[1.125rem] px-[1rem] text-[1rem]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch relative tracking-[0.1px] leading-[1.25rem] font-medium">
                Chung
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xl bg-m3-sys-light-primary-fixed overflow-hidden flex flex-row items-start justify-start max-w-full bg-[#9EEFFD]">
            <div className="flex-1 flex flex-row items-start justify-start p-[1rem] box-border gap-[0.75rem] max-w-full">
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                alt=""
                src="/svgA/icon1.svg"
              />
              <div className="w-[16.25rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                <b className="self-stretch relative tracking-[0.1px] leading-[1.25rem] font-semibold">
                  Chủ để
                </b>
              </div>
              <div className="w-[3.75rem] relative tracking-[0.1px] leading-[1.25rem] font-semibold text-right hidden">
                12 14h00
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-[1rem] pr-[1.5rem] pl-[1rem] box-border gap-[0.75rem] max-w-full">
              <img className="h-[1.5rem] w-[1.5rem] relative" alt="" />
              <div className="h-[1.25rem] flex-1 relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block">
                Charts
              </div>
              <div className="w-[5.813rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                19h30 - 21h00
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start p-[1rem] box-border gap-[0.75rem] max-w-full">
                <input
                  className="m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                  type="checkbox"
                />
                <div className="w-[16.25rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch relative tracking-[0.00625rem] leading-[1.25rem] font-medium">
                    Chữ
                  </div>
                </div>
                <div className="w-[5.813rem] relative tracking-[0.00625rem] leading-[1.25rem] font-medium text-right hidden">
                  14h10 - 17h30
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start p-[1rem] box-border gap-[0.75rem] max-w-full">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                  alt=""
                  src="/svgA/icon-3.svg"
                />
                <div className="w-[16.25rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch relative tracking-[0.1px] leading-[1.25rem] font-medium">
                    Ngôn ngữ
                  </div>
                </div>
                <div className="w-[2rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                  100+
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch h-[0.063rem] flex flex-row items-start justify-start pt-[0.062rem] px-[1rem] pb-[0rem] box-border">
                <div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
              </div>
              <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[1.125rem] px-[1rem]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block min-w-[3.25rem]">
                    Cá nhân
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start p-[1rem] box-border gap-[0.75rem] max-w-full">
              <img
                className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                alt=""
                src="/svgA/icon-4.svg"
              />
              <div className="w-[16.25rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[1.25rem] font-medium">
                  Hồ sơ
                </div>
              </div>
              <div className="w-[2rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start p-[1rem] box-border gap-[0.75rem] max-w-full">
              <img
                className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
                alt=""
                src="/svgA/icon-5@2x.png"
              />
              <div className="w-[16.25rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative tracking-[0.1px] leading-[1.25rem] font-medium">
                  Tài khoản
                </div>
              </div>
              <div className="w-[2rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-[1rem] pr-[1.5rem] pl-[1rem] box-border gap-[0.75rem] max-w-full">
              <img className="h-[1.5rem] w-[1.5rem] relative" alt="" />
              <div className="h-[1.25rem] flex-1 relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block">
                Label
              </div>
              <div className="w-[2rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch h-[0.063rem] flex flex-row items-start justify-start pt-[0.062rem] px-[1rem] pb-[0rem] box-border">
              <div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
            </div>
            <div className="self-stretch rounded-81xl overflow-hidden flex flex-row items-start justify-start py-[1.125rem] px-[0.937rem] z-[1]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block min-w-[7.938rem]">
                  Điều khoản sử dụng
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-[1rem] pr-[1.5rem] pl-[1rem] box-border gap-[0.75rem] max-w-full">
              <img className="h-[1.5rem] w-[1.5rem] relative" alt="" />
              <div className="h-[1.25rem] flex-1 relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block">
                Label
              </div>
              <div className="w-[2rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-[1rem] pr-[1.5rem] pl-[1rem] box-border gap-[0.75rem] max-w-full">
              <img className="h-[1.5rem] w-[1.5rem] relative" alt="" />
              <div className="h-[1.25rem] flex-1 relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block">
                Label
              </div>
              <div className="w-[2rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-81xl overflow-hidden hidden flex-row items-center justify-start max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start py-[1rem] pr-[1.5rem] pl-[1rem] box-border gap-[0.75rem] max-w-full">
              <img className="h-[1.5rem] w-[1.5rem] relative" alt="" />
              <div className="h-[1.25rem] flex-1 relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block">
                Label
              </div>
              <div className="w-[2rem] relative tracking-[0.1px] leading-[1.25rem] font-medium text-right hidden">
                100+
              </div>
            </div>
          </div>
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border min-w-[43.875rem] max-w-full text-left text-[1.375rem] text-black font-m3-body-medium mq950:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[2.75rem] max-w-full mq700:gap-[1.375rem]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-[0.875rem] text-black-06">
              <div className="w-[17.75rem] flex flex-row items-start justify-start py-[0rem] px-[4.062rem] box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[1.125rem] pr-[0.75rem] pl-[1.5rem] z-[1]">
                  <div className="flex-1 relative tracking-[0.25px] leading-[1.25rem] text-m3-sys-light-primary inline-block min-w-[2.875rem]">
                    Cài đặt
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                    <div className="relative tracking-[0.25px] leading-[1.25rem] inline-block min-w-[0.375rem]">
                      \
                    </div>
                  </div>
                  <a className="[text-decoration:none] flex-1 relative tracking-[0.25px] leading-[1.25rem] text-m3-sys-light-on-surface inline-block min-w-[2.625rem]">
                    Chung
                  </a>
                  <div className="hidden flex-col items-center justify-center py-[0rem] px-[0.75rem]">
                    <div className="relative tracking-[0.25px] leading-[1.25rem]">
                      \
                    </div>
                  </div>
                  <div className="self-stretch w-[2.438rem] relative tracking-[0.25px] leading-[1.25rem] text-black-087 hidden items-center justify-center">
                    Link 2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0rem] flex flex-row items-start justify-start pt-[0.031rem] px-[1rem] pb-[0rem] box-border max-w-full">
                <div className="h-[0.063rem] flex-1 relative box-border max-w-full border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
              </div>
            </div>
            <div className="w-[63.875rem] flex flex-row items-start justify-end pt-[0rem] px-[1.375rem] pb-[1.5rem] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.625rem] max-w-full">
                <h3 className="m-0 w-[9.125rem] h-[2.063rem] relative text-inherit leading-[1.75rem] font-normal font-inherit inline-block shrink-0 mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                  Chủ đề
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.187rem] box-border max-w-full text-center text-[0.75rem] text-m3-sys-light-on-surface">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
                    <div className="w-[36.563rem] flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] box-border max-w-[calc(100%_-_24px)]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[2.937rem] mq700:flex-wrap mq700:gap-[1.438rem]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem] min-w-[10.938rem]">
                          <div className="self-stretch h-[4.25rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-m3-white flex flex-row items-start justify-start pt-[0rem] px-[0.5rem] pb-[0rem] box-border gap-[0.5rem]">
                            <div className="flex-1 flex flex-col items-center justify-center pt-[0.75rem] px-[0rem] pb-[1rem] gap-[0.25rem]">
                              <div className="rounded-2xl bg-black-highlight overflow-hidden flex flex-col items-center justify-center">
                                <div className="flex flex-row items-center justify-center py-[0.25rem] px-[1.25rem]">
                                  <img
                                    className="h-[1.5rem] w-[1.5rem] relative"
                                    alt=""
                                    src="/svgA/icon-10.svg"
                                  />
                                </div>
                              </div>
                              <b className="self-stretch relative tracking-[0.5px] leading-[1rem] font-semibold">
                                Label
                              </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center pt-[0.75rem] px-[0rem] pb-[1rem] gap-[0.25rem] text-m3-sys-light-on-surface-variant">
                              <div className="self-stretch rounded-2xl flex flex-row items-center justify-center py-[0rem] px-[1.437rem]">
                                <div className="flex flex-row items-center justify-center py-[0.25rem] px-[1.25rem]">
                                  <img
                                    className="h-[1.5rem] w-[1.5rem] relative"
                                    alt=""
                                    src="/svgA/icon-11.svg"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch relative tracking-[0.5px] leading-[1rem] font-medium">
                                Label
                              </div>
                            </div>
                            <div className="h-[5rem] flex-1 flex flex-col items-center justify-center pt-[0.75rem] px-[0rem] pb-[1rem] box-border gap-[0.25rem] text-[0.688rem] text-m3-white">
                              <div className="flex-1 rounded-2xl flex flex-row items-center justify-center pt-[0.125rem] px-[1.687rem] pb-[0.25rem] relative">
                                <div className="w-[1.563rem] flex flex-row items-center justify-center">
                                  <img
                                    className="h-[1.5rem] w-[1.5rem] relative"
                                    alt=""
                                    src="/svgA/icon-11.svg"
                                  />
                                </div>
                                <div className="w-[0.5rem] !m-[0] absolute top-[0.125rem] left-[2.719rem] rounded-81xl bg-m3-sys-light-primary overflow-hidden shrink-0 flex flex-row items-center justify-center min-w-[1rem] max-w-[2.125rem] z-[1]">
                                  <div className="flex-1 relative tracking-[0.5px] leading-[1rem] font-medium inline-block min-w-[0.5rem]">
                                    3
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch relative text-[0.75rem] tracking-[0.5px] leading-[1rem] font-medium text-m3-sys-light-on-surface-variant">
                                Label
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4.437rem] pl-[3.937rem] text-[0.875rem] text-black mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] [debug_commit:bf4bc93]"
                                loading="lazy"
                                alt=""
                                src="/svgA/iconsradio-button-checked.svg"
                              />
                              <div className="flex flex-col items-start justify-start py-[0rem] px-[0rem]">
                                <div className="ml-[-0.188rem] w-[7.125rem] relative tracking-[0.25px] leading-[1.25rem] flex items-center justify-center shrink-0 [debug_commit:bf4bc93]">
                                  Chế độ sáng
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-end justify-start gap-[0.625rem] min-w-[10.938rem] text-m3-sys-dark-inverse-surface">
                          <div className="self-stretch h-[4.25rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-[#00363d] flex flex-row items-start justify-start pt-[0rem] px-[0.5rem] pb-[0rem] box-border gap-[0.5rem]">
                            <div className="flex-1 flex flex-col items-center justify-center pt-[0.75rem] px-[0rem] pb-[1rem] gap-[0.25rem]">
                              <div className="rounded-2xl bg-m3-white overflow-hidden flex flex-col items-center justify-center">
                                <div className="flex flex-row items-center justify-center py-[0.25rem] px-[1.25rem]">
                                  <img
                                    className="h-[1.5rem] w-[1.5rem] relative"
                                    alt=""
                                    src="/svgA/icon-13.svg"
                                  />
                                </div>
                              </div>
                              <b className="self-stretch relative tracking-[0.5px] leading-[1rem] font-semibold">
                                Label
                              </b>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center pt-[0.75rem] px-[0rem] pb-[1rem] gap-[0.25rem] text-m3-sys-light-outline-variant">
                              <div className="self-stretch rounded-2xl flex flex-row items-center justify-center py-[0rem] px-[1.437rem]">
                                <div className="flex flex-row items-center justify-center py-[0.25rem] px-[1.25rem]">
                                  <img
                                    className="h-[1.5rem] w-[1.5rem] relative"
                                    alt=""
                                    src="/svgA/icon-14.svg"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch relative tracking-[0.5px] leading-[1rem] font-medium">
                                Label
                              </div>
                            </div>
                            <div className="h-[5rem] flex-1 flex flex-col items-center justify-center pt-[0.75rem] px-[0rem] pb-[1rem] box-border gap-[0.25rem] text-[0.688rem] text-m3-sys-dark-on-primary">
                              <div className="flex-1 rounded-2xl flex flex-row items-center justify-center pt-[0.125rem] px-[1.687rem] pb-[0.25rem] relative">
                                <div className="w-[1.563rem] flex flex-row items-center justify-center">
                                  <img
                                    className="h-[1.5rem] w-[1.5rem] relative"
                                    alt=""
                                    src="/svgA/icon-14.svg"
                                  />
                                </div>
                                <div className="!m-[0] absolute top-[0.125rem] left-[2.75rem] rounded-81xl bg-m3-sys-dark-primary overflow-hidden flex flex-col items-center justify-center min-w-[1rem] max-w-[2.125rem] z-[1]">
                                  <div className="relative tracking-[0.5px] leading-[1rem] font-medium inline-block min-w-[0.438rem]">
                                    3
                                  </div>
                                </div>
                              </div>
                              <div className="self-stretch relative text-[0.75rem] tracking-[0.5px] leading-[1rem] font-medium text-m3-sys-light-outline-variant">
                                Label
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[4.062rem] pl-[4.25rem] text-[0.875rem] text-black mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] [debug_commit:bf4bc93]"
                                loading="lazy"
                                alt=""
                                src="/svgA/iconsradio-button-unchecked.svg"
                              />
                              <div className="flex flex-col items-start justify-start py-[0rem] px-[0rem]">
                                <div className="ml-[-0.125rem] w-[7.125rem] h-[1.5rem] relative tracking-[0.25px] leading-[1.25rem] flex items-center justify-center shrink-0 [debug_commit:bf4bc93]">
                                  Chế độ tối
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[2.75rem] w-[0.25rem] relative rounded-sm bg-m3-sys-dark-primary overflow-hidden shrink-0 [transform:_rotate(-180deg)]">
                      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-m3-state-layers-light-on-primary-opacity-008 hidden" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[64.813rem] flex flex-row items-start justify-end py-[0rem] px-[1.375rem] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.062rem] max-w-full mq700:gap-[1rem]">
                <div className="self-stretch h-[0rem] flex flex-row items-start justify-start pt-[0.031rem] px-[1rem] pb-[0rem] box-border max-w-full">
                  <div className="h-[0.063rem] flex-1 relative box-border max-w-full border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
                </div>
                <div className="w-[9.625rem] flex flex-row items-start justify-start py-[0rem] px-[0.937rem] box-border">
                  <h3 className="m-0 flex-1 relative text-inherit leading-[1.75rem] font-normal font-inherit mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                    Chữ
                  </h3>
                </div>
                <div className="w-[38.063rem] flex flex-row items-start justify-start pt-[0rem] px-[0.875rem] pb-[0.312rem] box-border max-w-full text-[1rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
                      <div className="w-[11.938rem] h-[4.188rem] relative">
                        <div className="absolute top-[0rem] left-[0rem] tracking-[0.15px] leading-[1.5rem] font-medium inline-block w-[9.25rem] h-[2.125rem]">
                          Cỡ chữ
                        </div>
                        <div className="absolute top-[1.438rem] left-[8.938rem] rounded-81xl bg-m3-sys-dark-inverse-surface w-[3rem] flex flex-row items-start justify-start py-[0.75rem] px-[0.937rem] box-border z-[1] text-center text-[0.875rem] text-m3-sys-dark-inverse-on-surface">
                          <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block min-w-[1.063rem]">
                            18
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[1rem] flex flex-row items-start justify-end max-w-full">
                        <div className="self-stretch w-[33.25rem] rounded-2xl overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
                          <div className="self-stretch flex-1 relative rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-2xl bg-[#006874] max-w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border max-w-full text-center text-[0.875rem]">
                      <div className="w-[32.938rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-full mq450:flex-wrap">
                        <div className="w-[3.125rem] relative tracking-[0.1px] leading-[1.25rem] font-medium flex items-center justify-center shrink-0">
                          Nhỏ
                        </div>
                        <h1 className="m-0 w-[5.563rem] relative text-[1.875rem] tracking-[0.1px] leading-[1.25rem] font-medium font-inherit flex items-center justify-center shrink-0 mq950:text-[1.5rem] mq950:leading-[1rem] mq450:text-[1.125rem] mq450:leading-[0.75rem]">
                          Lớn
                        </h1>
                      </div>
                    </div>
                    <div className="w-[10.188rem] flex flex-row items-start justify-start pt-[0rem] px-[0.062rem] pb-[0.75rem] box-border">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem]">
                        <div className="w-[9.25rem] relative tracking-[0.15px] leading-[1.5rem] font-medium inline-block">
                          Font chữ
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end text-[1.063rem]">
                          <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                            <input
                              className="cursor-pointer m-0 h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                              type="radio"
                            />
                            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                              <div className="relative tracking-[0.1px] leading-[1.25rem] font-medium inline-block min-w-[3.75rem]">
                                Cổ điển
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[4.125rem] text-[1.063rem] font-ribeye mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                      <div className="flex flex-row items-start justify-start gap-[0.812rem]">
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                          <input
                            className="cursor-pointer m-0 w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                            type="radio"
                          />
                        </div>
                        <div className="relative tracking-[0.1px] leading-[1.25rem] inline-block min-w-[5.5rem]">
                          Sáng tạo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[0rem] flex flex-row items-start justify-start pt-[0.031rem] px-[1rem] pb-[0rem] box-border max-w-full">
                  <div className="h-[0.063rem] flex-1 relative box-border max-w-full border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
                </div>
                <footer className="w-[25.063rem] flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-center text-[1.375rem] text-black font-m3-body-medium">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                    <h3 className="m-0 relative text-inherit leading-[1.75rem] font-normal font-inherit inline-block min-w-[6.063rem] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                      Ngôn ngữ
                    </h3>
                    <div className="w-[12.5rem] flex flex-col items-start justify-start text-left text-[1rem] text-m3-sys-light-on-surface">
                      <div className="self-stretch flex flex-row items-start justify-start py-[1rem] px-[0.75rem] gap-[0.75rem]">
                        <img
                          className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                          loading="lazy"
                          alt=""
                          src="/svgA/icon-3.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="flex-1 relative tracking-[0.5px] leading-[1.5rem]">
                            Tiếng việt
                          </div>
                          <div className="self-stretch w-[6.5rem] relative text-[0.875rem] tracking-[0.25px] leading-[1.25rem] text-m3-sys-light-on-surface-variant hidden">
                            Supporting text
                          </div>
                        </div>
                        <img
                          className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                          loading="lazy"
                          alt=""
                          src="/svgA/trailing-element.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[0.562rem] px-[0rem] pb-[0.437rem]">
                        <div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-outline-variant" />
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GeneralSettings;
