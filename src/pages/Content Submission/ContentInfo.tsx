import folderLogo from "../../assets/folderLogo.png";
import { AuthBtn, Input, OptionalWraper, SelectOption } from "../../components";

const ContentInfo = () => {
  return (
    <div className="bg-[#121418] py-18 px-8 lg:px-28 pt-[calc(var(--header-height)+4rem)]">
      <h1 className="font-bold text-2xl sm:text-[2rem] leading-10 font-noto text-white mb-5 sm:mb-10">
        Content Submission
      </h1>
      <div className="grid gap-15 md:grid-cols-2">
        <div>
          <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
            Content Information
          </h2>
          <div className="mt-10">
            <Input label="Title" type="text" id="title" required={false} />
            <Input
              label="Subtitle"
              type="text"
              id="subTitle"
              required={false}
            />
            <div className="flex flex-col mb-10">
              <label
                htmlFor="contentDiscription"
                className="text-[#CACACA] font-semibold text-base leading-6 font-noto my-1"
              >
                Description of Content
              </label>
              <textarea
                id="contentDiscription"
                className="bg-[#191B20] text-white border border-[#454545] outline-0 py-2 px-4 font-noto h-30"
              ></textarea>
            </div>
            <SelectOption
              id="country"
              label="Country"
              name="country"
              optionList={["United Kingdom", "USA", "Canada", "Lahore"]}
              required={false}
              defaultValue="Select Gallery"
            />
            <OptionalWraper left={18}>
              <Input
                label="Link Title"
                type="text"
                id="linkTitle"
                required={false}
              />
            </OptionalWraper>
            <OptionalWraper left={18}>
              <Input
                label="Link URL"
                type="text"
                id="linkUrl"
                required={false}
              />
            </OptionalWraper>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl leading-10 font-noto border-b pb-2 border-[#454545] text-[#CACACA] ">
            Upload Content File
          </h2>
          <div className="mt-10">
            <p className="text-[#CACACA] font-semibold text-base leading-6 font-noto my-2">
              Media Files upload
            </p>
            <label
              htmlFor="uploadFiles"
              className="bg-[#191B20] text-white border border-[#454545] outline-0 py-2 px-4 font-noto w-full h-70 flex flex-col items-center justify-center gap-3 cursor-pointer"
            >
              <img src={folderLogo} />
              <p className="text-[#929292] font-normal text-sm leading-3.5">
                Upload files from your computer or drag and drop
              </p>
              <p className="text-[#929292] font-normal text-sm leading-3.5">
                Supported format mp4 .mov .abc
              </p>
              <input type="file" id="uploadFiles" hidden />
            </label>
          </div>
        </div>
      </div>
      <div className="my-8">
        <AuthBtn label="Submit" />
      </div>
    </div>
  );
};
export default ContentInfo;
