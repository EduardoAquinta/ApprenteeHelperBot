import robotImage from '../../assets/robot.png';
import './css/avatar.css';

function Avatar(props) {

    let image = robotImage;

    if (props.user) {
        image = 'https://placehold.co/300x300.png';
    }

    return (
        <div className='avatar'>
            <img alt='avatar' src={image} />
        </div>
    )
}

export default Avatar