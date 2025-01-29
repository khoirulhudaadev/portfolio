import { RotateSpinner } from 'react-spinners-kit'

const LoadingFallback = () => {
    return (
      <div className='flex fixed top-0 left-0 z-[99999999999] items-center w-screen h-screen justify-center'>
        <RotateSpinner size={70} color="#36D7B7" loading={true} />
    </div>
    )
};

export default LoadingFallback