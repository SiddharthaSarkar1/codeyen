import { Loader2Icon } from 'lucide-react';
import { useEffect } from 'react';

useEffect(() => {
    setTimeout(() => {
        window.location.href = "/";
    }, 6000);
}, [])


const Loading = () => {
  return (
    <div className='h-screen flex flex-col'>
        <div className="flex justify-center items-center flex-1">
        <Loader2Icon className="size-7 animate-spin text-indigo-200" />
        </div>
    </div>
  )
}

export default Loading