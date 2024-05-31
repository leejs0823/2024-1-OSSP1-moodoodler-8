import React from 'react';
import dayjs from 'dayjs';
import ColorNameCode from './ColorNameCode';
import useMoodYearCalendar from '../hooks/useMoodYearCalendar';
import RenderYearCalendar from './RenderYearCalendar';
import ProhibitionYear from './ProhibitionYear';

const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

export default function YearCalendar({ handleColorChipToggle }) {
  const { year, setYear, monthlyDiary } = useMoodYearCalendar();

  const handlePrevYear = () => {
    const newYear = dayjs(year).subtract(1, 'year').format('YYYY');
    setYear(newYear);
  };

  const handleNextYear = () => {
    const newYear = dayjs(year).add(1, 'year').format('YYYY');
    setYear(newYear);
  };

  return (
    <div className='flex justify-center items-center w-[342px] h-[586px] rounded-[20px] shadow-componentShadow'>
      <div className='flex flex-col w-[284px] h-[523px] gap-[12px] items-center'>
        <div className='flex flex-row justify-center items-start w-[287px] h-[38px] border-b border-[#E4E5E7]'>
          <div className='flex flex-row justify-between w-[287px] items-center'>
            <img
              src='/assets/leftArrow.svg'
              alt='leftArrow'
              className='w-[9px] h-[7px] cursor-pointer'
              onClick={handlePrevYear}
            />
            <p className='text-[17px] font-semibold text-darkNavy'>{year}</p>
            <img
              src='/assets/rightArrow.svg'
              alt='rightArrow'
              className='w-[9px] h-[7px] cursor-pointer'
              onClick={handleNextYear}
            />
          </div>
        </div>
        {year <= dayjs().format('YYYY') ? (
          <div className='flex flex-row w-[284px] h-[479px] justify-between'>
            <div className='flex flex-col justify-between items-center'>
              <div className='flex justify-center w-[173px] grid grid-cols-12'>
                {months.map((v, i) => (
                  <div className='w-[11.6px] font-medium text-[9px] text-center' key={i}>
                    {v}
                  </div>
                ))}
              </div>
              <div className='flex flex-row w-[173px] grid grid-cols-12'>
                {monthlyDiary.length > 0 &&
                  months.map((_, month) => (
                    <RenderYearCalendar key={month} monthlyList={monthlyDiary} month={month + 1} />
                  ))}
              </div>
            </div>
            <ColorNameCode />
          </div>
        ) : (
          <ProhibitionYear />
        )}
      </div>
    </div>
  );
}
