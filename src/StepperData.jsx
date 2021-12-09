// import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import SchoolIcon from '@mui/icons-material/School';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
const steps = [
    {

        icon: function () {
            return <SchoolIcon />
        },

        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {

        icon: function () {
            return <HomeRoundedIcon />
        },
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {

        icon: function () {
            return <ApartmentRoundedIcon />
        },
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
    {

        icon: function () {
            return <ApartmentRoundedIcon />
        },
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
    {

        icon: function () {
            return <ApartmentRoundedIcon />
        },
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

export default steps;