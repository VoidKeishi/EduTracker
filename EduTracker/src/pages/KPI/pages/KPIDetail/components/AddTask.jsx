import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    InputAdornment,
  } from "@mui/material";
  
  const AddTask = () => {
    return (
      <div className="w-full h-[38rem] relative rounded-xl bg-m3-white box-border overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] border-[1px] border-solid border-m3-sys-light-outline-variant mq450:h-auto">
        <section className="flex-1 flex flex-row flex-wrap items-start justify-start pt-[2rem] px-[2rem] pb-[5.375rem] box-border max-w-full text-left text-[2rem] text-black font-m3-label-large mq500:pt-[1.313rem] mq500:pb-[3.5rem] mq500:box-border">
          <div className="h-[3.25rem] flex-1 overflow-hidden flex flex-col items-start justify-start pt-[2.687rem] px-[0rem] pb-[0.5rem] box-border gap-[1.875rem] max-w-full">
            <div className="mt-[-4.375rem] flex flex-row items-start justify-start py-[0rem] px-[2rem]">
              <a className="[text-decoration:none] relative leading-[2.5rem] text-[inherit] shrink-0 [debug_commit:bf4bc93]">
                Tạo việc mới
              </a>
            </div>
            <div className="w-[21rem] h-[0.063rem] flex flex-row items-start justify-start pt-[0.062rem] px-[1rem] pb-[0rem] box-border shrink-0 [debug_commit:bf4bc93] max-w-full">
              <div className="h-[0.063rem] flex-1 relative box-border border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[3.5rem] px-[0rem] pb-[0rem] box-border max-w-full ml-[-28.313rem]">
            <form className="m-0 self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-start justify-start pt-[1rem] pb-[3.125rem] pr-[0rem] pl-[1rem] box-border gap-[1.625rem] max-w-full mq450:pt-[3.5rem] mq450:pb-[2rem] mq450:box-border">
              <div className="self-stretch h-[19.625rem] relative overflow-hidden shrink-0 max-w-full mq450:h-auto mq450:min-h-[314]">
                <div className="absolute top-[0rem] left-[0rem] rounded-t rounded-b-none w-[26.313rem] h-[3.5rem] flex flex-col items-start justify-start max-w-full mq450:h-auto mq450:min-h-[56]">
                  <div className="w-full !m-[0] absolute top-[0rem] left-[0rem] rounded-t rounded-b-none bg-m3-white flex flex-col items-start justify-start max-w-full h-full">
                    <div className="self-stretch rounded-t rounded-b-none flex flex-row items-start justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-center py-[0.25rem] pr-[17.375rem] pl-[0rem] box-border min-w-[14.5rem] max-w-full">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative text-[0.75rem] tracking-[0.4px] leading-[1rem] font-m3-label-large text-m3-sys-light-on-surface-variant text-left inline-block min-w-[4.938rem]">
                            Tên công việc
                          </div>
                        </div>
                        <input
                          className="w-[2.75rem] [border:none] [outline:none] bg-[transparent] h-[1.5rem] flex flex-row items-center justify-start font-m3-label-large text-[1rem] text-gray"
                          placeholder="Ăn tối"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.25rem]">
                        <div className="w-[2.5rem] h-[2.5rem] rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                          <div className="flex flex-row items-center justify-center p-[0.5rem]">
                            <img
                              className="h-[1.5rem] w-[1.5rem] relative"
                              loading="lazy"
                              alt=""
                              src="/icon.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[0.063rem] absolute !m-[0] right-[0%] bottom-[-0.062rem] left-[0%] box-border border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
                  <div className="self-stretch hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border max-w-full z-[2]">
                    <div className="h-[1rem] flex-1 relative text-[0.75rem] tracking-[0.4px] leading-[1rem] font-m3-label-large text-m3-sys-light-on-surface-variant text-left inline-block max-w-full">
                      Supporting text
                    </div>
                  </div>
                </div>
                <div className="absolute top-[4.125rem] left-[0rem] rounded-t rounded-b-none w-[26.313rem] h-[3.5rem] flex flex-col items-start justify-start max-w-full mq450:h-auto mq450:min-h-[56]">
                  <div className="w-full !m-[0] absolute top-[0rem] left-[0rem] rounded-t rounded-b-none bg-m3-white flex flex-col items-start justify-start max-w-full h-full">
                    <div className="self-stretch rounded-t rounded-b-none flex flex-row items-start justify-start py-[0.25rem] pr-[0rem] pl-[1rem] box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-center py-[0.25rem] pr-[17.25rem] pl-[0rem] box-border min-w-[14.5rem] max-w-full">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative text-[0.75rem] tracking-[0.4px] leading-[1rem] font-m3-label-large text-m3-sys-light-on-surface-variant text-left inline-block min-w-[3.375rem]">
                            Chú thích
                          </div>
                        </div>
                        <input
                          className="w-[calc(100%_-_276px)] [border:none] [outline:none] bg-[transparent] self-stretch h-[1.5rem] flex flex-row items-center justify-start font-m3-label-large text-[1rem] text-gray min-w-[3.063rem]"
                          placeholder="Măm măm"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center p-[0.25rem]">
                        <div className="w-[2.5rem] h-[2.5rem] rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                          <div className="flex flex-row items-center justify-center p-[0.5rem]">
                            <img
                              className="h-[1.5rem] w-[1.5rem] relative"
                              alt=""
                              src="/svgA/icon.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[0.063rem] absolute !m-[0] right-[0%] bottom-[-0.062rem] left-[0%] box-border border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
                  <div className="self-stretch hidden flex-row items-start justify-start pt-[0.25rem] px-[1rem] pb-[0rem] box-border max-w-full z-[2]">
                    <div className="h-[1rem] flex-1 relative text-[0.75rem] tracking-[0.4px] leading-[1rem] font-m3-label-large text-m3-sys-light-on-surface-variant text-left inline-block max-w-full">
                      Supporting text
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-row items-center justify-start gap-[0.437rem]">
                <button className="cursor-pointer [border:none] p-0 bg-m3-sys-light-primary rounded-81xl overflow-hidden flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center py-[0.625rem] px-[1.437rem]">
                    <div className="relative text-[0.875rem] tracking-[0.1px] leading-[1.25rem] font-medium font-m3-label-large text-m3-white text-center inline-block min-w-[3.313rem]">
                      Tạo cũ
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer p-0 bg-[transparent] rounded-81xl overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                  <div className="flex flex-row items-center justify-center py-[0.625rem] px-[1.5rem]">
                    <div className="relative text-[0.875rem] tracking-[0.1px] leading-[1.25rem] font-medium font-m3-label-large text-m3-sys-light-primary text-center inline-block min-w-[1.563rem]">
                      Huỷ
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  };
  
  export default AddTask;
  