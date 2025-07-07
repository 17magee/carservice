import { Ecm, Engine, Fc, Gentral, Insurance, Licence, Slide1, Slide2, Slide3, Test, Tow, Wash } from '../../assets/images/index';


const sliderData = [
  {
    id : '1',
    title : 'Gentral Checkup',
    describe : '100 % satification',
    image : Slide1
  },
  {
    id : '2',
    title : 'Gentral Checkup',
    describe : '100 % satification',
    image : Slide2
  },
  {
    id : '3',
    title : 'Gentral Checkup',
    describe : '100 % satification',
    image : Slide3
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
    }
]

export {sliderData,ServiceData,OthersData}