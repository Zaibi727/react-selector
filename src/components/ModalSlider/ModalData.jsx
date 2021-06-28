import { AiOutlineInstagram } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ModalData = {
    Content: [
        {
            id: '1',
            mainPic: './images/eight6.jpg',
            profilePic: './images/profile.jpg',
            profileName: 'Audrey Williamson',
            dotIcon: <BsDot />,
            instaIcon: <AiOutlineInstagram />,
            accountId: '@bluebear234',
            impressions: '124K',
            reach: '124K',
            likes: '12.4K',
            comments: '24',
            enRate: '12.5%',
            impressionsTitle: 'Impressions',
            reachTitle: 'Reach',
            likesTitle: 'Likes',
            commentsTitle: 'Comments',
            engRateTitle: 'Eng.Rate',
            descriptionTitle: 'Description',
            descriptionContent: 'There are many variations of passages of Lorem Ipsum available .There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available',
            mentionsTitle: 'Mentions',
            mentionsContent: '@Companyname',
            hashtagsTitle: 'Hashtags',
            hashtagsContent: '#compayname',
            locationTitle:'Location',
            locationContent: '2464 Valley View Ln undefined Coppell. Virginia 88719 United States',
            nextArrow: <GrNext />, 
            previousArrow: <GrPrevious />,

        },
    ]
};

export default ModalData;