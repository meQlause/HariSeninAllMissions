export const PaginationUI = () => {
  return (
    <div className="flex flex-row justify-end gap-2 pt-8">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-[#F4F5FA]">
        <img src="/assets/keyboard-arrow-left.png" />
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent bg-yellow-300 text-white">
        1
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
        2
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
        3
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
        4
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
        5
      </div>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-[#F4F5FA]">
        <img src="/assets/keyboard-arrow-right.png" />
      </div>
    </div>
  );
};
