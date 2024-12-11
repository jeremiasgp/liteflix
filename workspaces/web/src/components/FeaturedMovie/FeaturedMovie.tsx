import PlusIcon from "../icons/Plus.icon";

const FeaturedMovie = () => {
  return <section className="self-end">
      <h2 className="text-[20px] leading[24px] tracking-[4px] font-[400]">ORIGINAL DE <span className="font-[700]">LITEFLIX</span></h2>
      <h1 className="text-[120px] leading[100px] tracking-[16px] font-[700]">LA CASA DE PAPEL</h1>
      <div className="flex justify-start gap-[24px]">
        <button className="w-[248px] h-[56px] flex justify-center items-center bg-[#242424] border border-[#242424] text-white text-[18px] font-[400] tracking-[4px] leading-[21.6]px">
          REPRODUCIR
        </button>
        <button className="w-[248px] h-[56px] flex justify-center items-center bg-[#242424]/[.5] border border-white/[.5] text-white text-[18px] font-[400] tracking-[4px] leading-[21.6]px">
          <PlusIcon /><span className="inline-block ml-[12px]">MI LISTA</span>
        </button>
      </div>
    </section>
}

export default FeaturedMovie;
