import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const getCssUrl = (url) => `url("${url}")`;

const DEMO_IMAGE_URL = 'https://www.fillmurray.com/640/360';
const useStyles = makeStyles((theme) => ({
    wrapper: {
        color: theme.palette.primary.light,
        flex: '1 1 100%',
        display: 'flex',
        flexWrap: 'wrap',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: '60px',
    },
    snsList: {
        display: 'flex',
        // height: '300px',
        // width: '100%',
        justifyContent: 'flex-start',
        color: '#333',
        '& > i': {
            color: theme.palette.primary.dark,
            padding: theme.spacing(2),
            fontSize: '35px',
        },
    },
}));
const CoverProfile = ({
    title = 'Default Title',
    imageSrc = DEMO_IMAGE_URL,
    snsList = [
        { faIcon: 'fab fa-facebook-square' },
        { faIcon: 'fab fa-instagram-square' },
        { faIcon: 'fab fa-twitter-square' },
        { faIcon: 'fab fa-github-square' },
    ],
}) => {
    const classes = useStyles();
    useEffect(() => {
        console.log(window.innerHeight);
    }, []);
    return (
        <div
            className={classes.wrapper}
            style={{ backgroundImage: getCssUrl(imageSrc) }}
        >
            <h1 className={classes.title}>{title.replace(' ', '\n')}</h1>
            <div className={classes.snsList}>
                {snsList.map(({ faIcon, href }) => (
                    <i key={faIcon} className={faIcon} />
                ))}
            </div>
        </div>
    );
};

export default CoverProfile;
