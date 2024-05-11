'use client';

export default function BaseLoading(props: { height?: string }) {
  const hasHeight = props?.height ? props?.height : 'h-screen';
  return (
    <div
      className={`py-6 px-2 ${hasHeight} flex w-full justify-center items-center`}
    >
      <span className='loader'></span>
    </div>
  );
}
