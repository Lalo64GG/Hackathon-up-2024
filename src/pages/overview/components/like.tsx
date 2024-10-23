
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

type LikeButtonProps = {
    numLike: string
}

export const LikeButton = ({ numLike }: LikeButtonProps) => {
    const [isLike, setLike] = useState<boolean>(false)


    if (numLike === null || numLike === undefined) {
        throw new Error("numLike is null or undefined");
    }
    return (
        <div className="flex flex-row items-center gap-x-1">
            <p className='font-semibold text-md'>{numLike}</p>
            <button 
                className={isLike ? "text-red-500 " : "text-white"} 
                onClick={() => setLike(!isLike)}
            >
                <FavoriteIcon />
            </button>
        </div>
    );
}
