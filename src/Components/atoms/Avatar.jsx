import robotImage from '../../assets/robot02_90810.png';
import './css/avatar.css';

function Avatar(props) {

    let image = robotImage;

    if (props.user) {
        image = 'https://picsum.photos/200';
    }

    return (
        <div className='avatar'>
            <img alt='avatar' src={image} />
        </div>
    )
}

export default Avatar