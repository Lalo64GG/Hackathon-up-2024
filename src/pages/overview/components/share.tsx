import IosShareIcon from '@mui/icons-material/IosShare';

type shareBtnProps = {
    shared: string
}

export const ShareButton = ({ shared }: shareBtnProps) => {
     
    return(
          <div className='flex flex-row items-center gap-x-1'>
            <IosShareIcon />
            <p>{shared}</p>
          </div>
    )
}