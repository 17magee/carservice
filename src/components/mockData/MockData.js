import { Ecm, Engine, EngineC, Fc, Gentral, Insurance, Licence, Painting, Percentage, Slide1,
     Slide2, Slide3, Ten, Test, Tow, Tyre, Wash
     } from '../../assets/images/index';


const sliderData = [
  {
    id : '1',
    title : 'Gentral Checkup',
    describe : '100 % satification',
    offer : 'Minimum 10% Offer',
    image : Slide1,
    icon : Percentage
  },
  {
    id : '2',
    title : 'ECM Services',
    describe : '100 % satification',
    offer : 'Minimum 10% Offer',
    image : Slide2,
    icon : Percentage
  },
  {
    id : '3',
    title : 'Engine Cleaning',
    describe : '100 % satification',
    offer : 'Minimum 10% Offer',
    image : Slide3,
    icon : Percentage
  }
]

const ServiceData =[
    {
        id : '1',
        title : 'Gentral',
        describe : 'Fully checkup your car',
        image : Gentral
    },
    {
        id : '2',
        title : 'Tow',
        describe : 'Fully checkup your car',
        image : Tow
    },
    {
        id : '3',
        title : 'ECM',
        describe : 'Fully checkup your car',
        image : Ecm
    },
    {
        id : '4',
        title : 'Wash',
        describe : 'Fully checkup your car',
        image : Wash
    }
]
 
const OthersData =[
   {
        id : '1',
        title : 'Insurance',
        describe : 'Fully checkup your car',
        image : Insurance
    },
    {
        id : '2',
        title : 'Licence',
        describe : 'Fully checkup your car',
        image : Licence
    },
    {
        id : '3',
        title : 'FC',
        describe : 'Fully checkup your car',
        image : Fc
    },
    {
        id : '4',
        title : 'Testing',
        describe : 'Fully checkup your car',
        image : Test
    },

]

const offerData = [
     {
    id : '1',
    title : 'Gentral Checkup',
    describe : 'Full Checkup, Half the Price!',
    offer : 'Offer Strating from 10%',
    image : Gentral,
    icon : Ten,
    button : 'Check Availability'
  },
  {
    id : '2',
    title : 'ECM Services',
    describe : 'ECM Service at a Special Price!',
    offer : 'Offer Strating from 10%',
    image : Ecm,
    icon :Ten,
    button : 'Check Availability'
  },
  {     
    id : '3',
    title : 'Engine Cleaning',
    describe : 'Engine Cleaning Offer On!',
    offer : 'Offer Strating from 10%',
    image : EngineC,
    icon : Ten,
    button : 'Check Availability'
  },
   {     
    id : '4',
    title : 'Water Wash',
    describe : 'Water Wash Offer On!',
    offer : 'Offer Strating from 10%',
    image : Wash,
    icon : Ten,
    button : 'Check Availability'
  },
  {     
    id : '5',
    title : 'Tyre Change',
    describe : 'New Tyre Change Offer On!',
    offer : 'Offer Strating from 10%',
    image : Tyre,
    icon : Ten,
    button : 'Check Availability'
  },
  {     
    id : '6',
    title : 'Insurans Claim',
    describe : 'Insurans Claim Offer On!',
    offer : 'Offer Strating from 10%',
    image : Insurance,
    icon : Ten,
    button : 'Check Availability'
  },
  {     
    id : '7',
    title : 'Painting',
    describe : 'Painting Offer On!',
    offer : 'Offer Strating from 10%',
    image : Painting,
    icon : Ten,
    button : 'Check Availability'
  }
]

const ServicesData = [
     {
    id : '1',
    title : 'Gentral',
    image : Gentral,
    icon : Ten,
    button : 'Booking'
  },
  {
    id : '2',
    title : 'ECM',
    image : Ecm,
    icon :Ten,
    button : 'Booking'
  },
  {     
    id : '3',
    title : 'Engine',
    image : EngineC,
    icon : Ten,
    button : 'Booking'
  },
   {     
    id : '4',
    title : 'Tow', 
    image : Tow, 
    button : 'Booking'
  },
  {     
    id : '5',
    title : 'Alignment',
    image : Tyre,
    icon : Ten,
    button : 'Booking'
  },
  {     
    id : '6',
    title : 'AC Service',
    image : Insurance,
    icon : Ten,
    button : 'Booking'
  },
  {     
    id : '7',
    title : 'Painting',
    image : Painting,
    button : 'Booking'
  }
]

export {sliderData,ServiceData,OthersData,offerData ,ServicesData}