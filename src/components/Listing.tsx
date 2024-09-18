import Flag from 'react-world-flags';

interface ListingProps {
  data: string;
  onImageLoad: () => void;
}

function Listing({ data, onImageLoad }:  ListingProps) {
  return (
    <div className='flex flex-1 flex-col border-2 p-5 gap-2'>
      <div className='h-96 w-full'>
        <img src={data[2]} alt="product" className='h-full w-full object-contain' onLoad={onImageLoad} onError={onImageLoad}/>
      </div>
      <div className='text-2xl font-medium'>{data[1]}</div>
      <div className='flex justify-around flex-wrap'>
        <div className='text-green-700 font-bold flex items-center gap-2'>
          <span className='border-[1px] border-gray-700 min-w-14 h-8 flex items-center justify-center'>
            <Flag code={data[3]} style={{ height: '100%', objectFit: 'cover' }} />
          </span>
          {data[5]}
        </div>
        <div className='text-red-700 font-bold flex items-center gap-2 max-w-[50%]'>
          <span className='border-[1px] border-gray-700 min-w-14 h-8 flex items-center justify-center'>
            <Flag code={data[4]} style={{ height: '100%', objectFit: 'cover' }} />
          </span>
          {data[6]}
        </div>
      </div>
      <hr />
      <div>{data[7]}</div>
      <a className='text-blue-900 mr-0 ml-auto font-medium underline underline-offset-2' href={data[8]} target='_blank'>View the source</a>
    </div>
  );
}

export default Listing;
